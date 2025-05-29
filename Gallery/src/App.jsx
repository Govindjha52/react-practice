import { useState } from "react";
import "./App.css";
import { Data } from "./data.js";

function App() {
  const [count, setCount] = useState(0);
  const [show, setshow] = useState(false);
  const hasnext = count < Data.length - 1;

  // function of click on next button.
  function next() {
    if (hasnext) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  //function of show more button
  function showdetails() {
    setshow(!show);
  }

  let data = Data[count];
  return (
    <>
      <h2>
        List of images click on next --{">"} show next image with description.
      </h2>
      <button onClick={next}>Next</button>
      <h2>
        <p>
          Name: {data.name} by <i>{data.artist}</i>{" "}
        </p>{" "}
       
      </h2>
      <h3>
        ( {count + 1} of {Data.length})
      </h3>{" "}
      <br />
      <button 
      onClick={showdetails}>
      {show ? "Hide" : "Show"}details
      </button>

      {show && <p> {data.description}</p>} <br /> <br />
      <img src={data.url} alt={data.alt} />
    </>
  );
}

export default App;
