import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

const Layout = () => {
  return (
    <div className='Layout-i'>
        <div className='Header-i'>
            <Header/>
        </div>
        <div className='Body-Content'>
            <div className='Content-i'>
              <Outlet/>
            </div>
            <div className='Footer-i'>
                <Footer/>
            </div>
        </div>
        
    </div>
  )
}

export default Layout