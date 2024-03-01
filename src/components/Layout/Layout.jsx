import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { Offline } from 'react-detect-offline'
export default function Layout() {
  return <>
    <Offline>
    <div className='network'>
    <i className='fas fa-wifi'></i>
    </div>
    </Offline>

    <div className="parent">
    <Navbar/>

<div className="container">
<Outlet/>

</div>
 <Footer/>
    </div>



 

  </>

}
