
import { useState } from 'react';
import './App.css';

function App() {
const [value,setvalue]=useState(1);
const[mul,setmul]=useState(1)

const multi=()=>{
setmul(value*2);
setvalue(value+1)
}

  return (
    <>
    <h2>Main Value: {value}</h2>
    <button onClick={multi}>Multiply by 2</button>
    <h2>Multiplied Value: {mul} </h2>
    </>
  )
}

export default App
