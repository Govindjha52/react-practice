import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './git.css';
function Github(){
    const data=useLoaderData()
    // const[data,setData]=useState([ ]);
    // useEffect( () =>{
    //     fetch('https://api.github.com/users/Govindjha52')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data)
    //         console.log(data);
    //     })
    // } ,[])
    
  return (
    <>
    <div className="git-box">

        <div className="user-im">
        <img src={data.avatar_url} alt="Git picture" />
        <h2><b>Bio: </b> {data.bio} </h2>
        </div><br />

        <div className="desc">
           <h2><b>Name: </b> {data.name} </h2> 
           <p><b>Location: </b> {data.location} </p>
           <p><b>Followers: </b> {data.followers} </p>
           <p><b>Total Repo: </b> {data.public_repos} </p>
           <p><b>Using From: </b> {data.created_at} </p>
        </div>

    </div>
    </>
  )
}

export default Github;

export const githubloader=async()=>{
   const response=await fetch('https://api.github.com/users/Govindjha52')
   return response.json()
}
