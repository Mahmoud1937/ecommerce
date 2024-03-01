import React, { useContext, useEffect } from 'react'
import Home from './components/Home/Home'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

import Brands from './components/Brands/Brands'
import NotFound from './components/NotFound/NotFound'
import  { userContext } from './Context/UserContext.js'
import ProtectRoute from './components/ProtectRoute/ProtectRoute.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
const root= createBrowserRouter([
   {path:'',element:<Layout/>,children:[
    {index:true,element: <ProtectRoute> <Home/></ProtectRoute> },
    {path:'login',element: <Login/>},
    {path:'register',element: <Register/>}, 
    {path:'products',element: <ProtectRoute> <Products/></ProtectRoute>},
    {path:'/productDetails/:id',element: <ProtectRoute> <ProductDetails/></ProtectRoute>},
    {path:'cart',element: <ProtectRoute> <Cart/></ProtectRoute>},
    {path:'brands',element: <ProtectRoute> <Brands/></ProtectRoute>},
    {path:'*',element:<NotFound/>},
  ]}
])
export default function App() {
 let {setUserToken,setLogin}=useContext(userContext)
 useEffect(()=>{
  if(localStorage.getItem('userToken')!==null){
    setUserToken(localStorage.getItem('userToken'))
    setLogin(localStorage.getItem('userName'))
  }
 },[]) 
return<>


<RouterProvider router={root}></RouterProvider>




  </>


}
