import React from 'react'
import {  useState } from 'react'
import { useEffect } from 'react'
import {axios} from 'react'

import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import { Outlet, Router } from 'react-router-dom'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Notfound from './pages/NotFound'
import Root from './router/Root'
import NotFound from './pages/NotFound'
import Categories from './pages/Categories'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      
      {
      path:'/',
      element:<Home />
    },
    {
      path:'/categories',
      element:<Categories/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },

    {
      path:'/products',
      element:<Products/>
    },

    {
      path:'/signin',
      element:<Signin/>
    },

    {
      path:'/signup',
      element:<Signup/>
    },

 {
  path:'*',
  element:<NotFound/>
 },]}

 
]);


  function App() {
   
return (
  <>

  
   <RouterProvider router={router} />
   <ToastContainer />
  
  
  </>
)};
  


export default App
