import { useState } from 'react'
import './App.css'

import AddTodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h2 className="text-3xl font-bold underline text-center ">
    React Redux toolkit
    </h2>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
