import { useState } from 'react'
import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Home from './component/page/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 class="text-center">react router page</h2>
      <Header/>
      <Home/>
      <Footer/>

    </>
  )
}

export default App