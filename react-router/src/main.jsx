import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import About from './component/page/About'
import Home from './component/page/Home'
import './index.css'
import Layout from './layout'

// 1st method to create router
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },
    {
     path:"/about",
     element:<About/>
    }]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
