import React from 'react';

function Card({username, btnText="visit me"}) {
   
  return (
    <div>
    <h1>{username}</h1>
    <p> Lorem ipsum dolor sit amet coi, debitis?  </p>
    <button > {btnText } → </button>
  </div>

  )
}

export default Card