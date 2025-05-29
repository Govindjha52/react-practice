import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import About from "./component/page/About";
import Contact from "./component/page/Contact";
import Github, { githubloader } from "./component/page/Github";
import Home from "./component/page/Home";
import User from "./component/page/User";
import "./index.css";
import Layout from "./layout";

// 1st method to create router
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[{
//       path:"",
//       element:<Home/>
//     },
//     {
//      path:"/about",
//      element:<About/>
//     },
//     {
//       path:"/contact",
//       element:<Contact/>
//     },{
//       path:"/github",
//       element:<Github/>
//     }
//   ]
//   }
// ])

// 2nd method to create route

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route loader={githubloader} path="github" element={<Github />} />
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
