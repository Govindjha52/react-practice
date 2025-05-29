import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class Services {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    //  Create post
    async createPost({ title, slug, content, featureimage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                    title,
                    content,
                    featureimage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            throw error;
        }
    }

    //  Update post
    async updatepost(slug, { title, content, featureimage, status }) {
        try {
            return await this.databases.updateDocument( // ✅ corrected from this.Databases
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, {
                    title,
                    content,
                    featureimage,
                    status,
                }
            );
        } catch (error) {
            throw error;
        }
    }

    // ✅ Delete post
    async deletepost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            throw error;
        }
    }

    // Get one post (fixed logic)
    async getpost(slug) {
        if (!slug) {
            throw new Error("Missing document ID (slug) in getpost()");
        }

        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            throw error;
        }
    }


    //  Get multiple posts with optional query
    async getposts(
        queries = [Query.equal("status", "active")]
    ) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            throw error;
        }
    }

    //  File upload
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    //  Delete file
    async deletefile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            throw error;
        }
    }

    //  Get file preview
    getfilepreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }
}

//  Export an instance
const services = new Services();
export default services;