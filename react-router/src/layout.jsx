import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />  
    <Footer />
    </>
  )
}

export default Layout