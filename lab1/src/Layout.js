import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div>
        <div className='navbar'>
            <div><Link className='link' to={'/'}>Home</Link></div>
            <div><Link className='link' to={'/about'}>About</Link></div>
            <div><Link className='link' to={'/courses'}>Courses</Link></div>    
        </div>
        <Outlet/>
    </div>
  )
}

export default Layout