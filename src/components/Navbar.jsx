import React from 'react'
import { Link, useLocation } from 'react-router'
import SearchInput from './SearchInput';

function Navbar() {

  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? 'text-purple-400' : '';
  }
  return (
    <div className='w-full h-14 bg-[#030014] flex items-center justify-between px-5 text-white sticky top-0 left-0 '>

            <Link to={"/"} className='text-2xl text-purple-400 hover:text-white hover:cursor-pointer'> Motion</Link>
            <SearchInput/>
    
            <ul className='md:block hidden'>
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