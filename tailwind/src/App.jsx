import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Govind",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1>Tailwind test</h1>
      <Card username='Govind' />
      <Card username="harsh" btnText='click me' />
      <Card username="garvit" btnText='Read us' />
    </>
  )
}

export default App