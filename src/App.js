import React from "react"
import './App.css';
import {createBrowserRouter,Routes,Route,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import Signin from './components/Signin'
import Rootlayout from "./components/Rootlayout";
import Myprofile from "./components/Myprofile";



function App(props) {
  const rou=createBrowserRouter([
    {
      path:"/",
      element:<Rootlayout/>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signin",
          element:<Signin></Signin>
        },
        {
          path:"/cart",
          element:<Cart></Cart>
        },
        {
          path:"/profile",
          element:<Myprofile></Myprofile>
        }

      ]
    },
  ])
    return (
      <RouterProvider router={rou}/>
    )
  }
  
  export default App;
  
