import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 class="text-center">react router page</h2>
    <img src={`${process.env.PUBLIC_URL}/image1`} alt="Banner" />

    </>
  )
}

export default App