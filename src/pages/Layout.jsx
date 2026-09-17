import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import { PrevNext } from '@/components/PrevNext'

function Layout() {
  return (
    <div className="w-full min-h-screen bg-[#030303]">
        <Navbar/>
        <main className="w-full min-h-[90vh] relative">
            <Outlet/>
            <PrevNext/>
        </main>
    </div>
    
)}

// #030014





export default Layout   