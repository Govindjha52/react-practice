import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./git.css";
function Github() {
  const data = useLoaderData("");
  return (
    <>
      <div className="git-box">
        <div className="user-im git-cont">
          <img src={data.avatar_url} alt="Git picture" />
          <h2>
            <b>Bio: </b> {data.bio}{" "}
          </h2>
        </div>
        <br />

        <div className="desc git-cont">
          <h2>
            <b>Name: </b> {data.name}{" "}
          </h2>
          <p>
            <b>Location: </b> {data.location}{" "}
          </p>
          <p>
            <b>Followers: </b> {data.followers}{" "}
          </p>
          <p>
            <b>Total Repo: </b> {data.public_repos}{" "}
          </p>
          <p>
            <b>Using From: </b>
            {data.created_at}{" "}
          </p>
          <br />
          <hr />
          <h3>Social Media: </h3>
          <p>
            <b>twitter: &nbsp; {data.twitter_username}</b>
          </p>
        </div>

        <div className="repo git-cont">
          <h2>
            {" "}
            <b>PROJECTS: </b>{" "}
          </h2>{" "}
          <hr />
          <br />
          <ul>
            <li>
              {" "}
              <a href="https://github.com/Govindjha52/pms-project">
                PMS SYSTEM
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://github.com/Govindjha52/learning-platform">
                lEARNING PLATFORM
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://github.com/Govindjha52/Gym-Application">
                GYM APPLICATION
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://github.com/Govindjha52/ATMsimulator">
                ATM SIMULATOR
              </a>{" "}
            </li>
            <br />
            <Link to="https://github.com/Govindjha52">
              {" "}
              <button class="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Click here to see more..
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubloader = async () => {
  const response = await fetch("https://api.github.com/users/Govindjha52");
  console.log(response);
  return response.json();
};
