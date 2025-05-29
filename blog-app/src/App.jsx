import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import './App.css'
import authService from "./appwrite/auth"
import { Footer, Header } from './components'
import { login, logout } from "./store/authslice"

function App() {



  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div>
      <div className='w-full block'>
        <Header />
        <main className='my-10 mx-0'>
        {/* TODO:  */}
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App