import React from 'react'
import { Link, useLocation } from 'react-router'

function Navbar() {

  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? 'text-purple-400' : '';
  }
  return (
    <div className='w-full h-14 bg-[#030014] flex items-center justify-between px-5 text-white '>

            <h3 className='text-2xl text-purple-400 hover:text-white hover:cursor-pointer'>Motion</h3>
            <input className='border-2 rounded-2xl p-2 w-[40%] ' type="text" placeholder='Search For Movies,Series and People ' />
            <ul className=''>
                <li className='flex gap-7 '>
                    <Link className={`hover:underline ${isActive('/')}` } to="/">Home</Link>
                    <Link className={`hover:underline ${isActive('/now-showing')}`} to="/now-showing">Now Showing</Link>
                    <Link className={`hover:underline ${isActive('/series')}`} to="/series">Series</Link>
                    <Link className={`hover:underline ${isActive('/popular')}`} to="/popular">Popular</Link>
                </li>
            </ul>
    </div>
  )
}

export default Navbar