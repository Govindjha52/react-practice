import { useState } from "react"; // hook--> state change in ui. 
import "./App.css";
function App() {
  const [count, setcount] = useState(0);

  function inc() {
    if(count==10){
      alert('You reach the max limit.. ')
    }
    if(count<10){
      setcount(count + 1); 
       // if we duplicate multiple it works only one at a time on clicked.. 
       
      // setcount(count + 1);
      // setcount(count + 1);
      // setcount(count + 1);

      /* if u really wanna increase multiple or duplicate then u can use like this.. */
      setcount(prev=>prev+1)
    }
    
  }

  function dec() {
    if(count <=0){
      alert(`You can't move further down.. `)
    }
    if(count>0){
      setcount(count - 1); 
    }
    
  }

  return (
    <>
      <h2>On Click Increase or decrease </h2>
      <h3>Count Value is : {count}</h3>
      <button onClick={inc}>Increase</button> &nbsp;
      <button onClick={dec}>Decrease</button>
    </>
  );
}

export default App;
