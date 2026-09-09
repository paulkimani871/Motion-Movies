import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import NowShowing from './NowShowing'

function Layout() {
  return (
    <div className="w-full min-h-screen bg-[#030303]">
        <Navbar/>
        <main className="w-full h-[90%]">
            <Outlet/>
        </main>
    </div>
    
)}

// #030014





export default Layout   