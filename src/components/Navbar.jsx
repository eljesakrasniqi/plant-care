import React, { useEffect, useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <header>
            <nav className='px-4 py-6 shadow-sm sticky top-0 z-50'>
                <div className='flex items-center justify-between max-w-6xl mx-auto'>
                    <Link to="/" className='text-2xl text-black-900 font-bold'>
                        <img className='w-50' src={logo} alt="logo" />
                    </Link>

                    <ul className='flex justify-between gap-6'>
                        <li>
                            <NavLink to="/features" className='font-medium'>Features</NavLink>
                        </li>
                        <li>
                            <NavLink to="/properties" className='font-medium'>How It Works</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className='font-medium'>About </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className='font-medium'>Contact </NavLink>
                        </li>
                    </ul>
                    <ul className='flex justify-between gap-6'>
                        <li>
                            <NavLink to="/register" className="bg-[#1C9426] text-blue-50 p-2 rounded-sm px-5" >Register  </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>     
    )
}

export default Navbar