import React, { useEffect, useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import { baseUrl, logOut} from '../services/auth';
import logo from '../assets/logo.png'

function Navbar() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const userId = localStorage.getItem("userId");
        console.log(userId, 'userId');

        if (userId) {
            fetch(`${baseUrl}/users/${userId}`)
                .then((response) => response.json())
                .then((data) => setUser(data))
        }
    }, [])

    const handleLogout = () => {
        logOut()
        window.location.href = "/"
    }
    return (
        <header>
            <nav className='px-4 py-6 shadow-sm sticky top-0 z-50'>
                <div className='flex items-center justify-between max-w-6xl mx-auto'>
                    <Link to="/" className='text-2xl text-black-900 font-bold'>
                        <img className='w-50' src={logo} alt="logo" />
                    </Link>

                    <ul className='flex justify-between gap-6'>
                        {user && (
                            <>
                                <li>
                                    <NavLink to="/dashboard" className='font-medium'>Dashboard  </NavLink>
                                </li>
                            </>
                        )
                        }
                        <li>
                            <NavLink to="/features" className='font-medium'>Features</NavLink>
                        </li>
                        <li>
                            <NavLink to="/properties" className='font-medium'>How It Works</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className='font-medium'>Contact </NavLink>
                        </li>
                    </ul>
                    <ul className='flex justify-between gap-6'>
                        {!user && (
                            <>
                                <li>
                                    <NavLink to="/register" className="bg-[#1C9426] text-blue-50 p-2 rounded-sm px-5" >Register  </NavLink>
                                </li>
                            </>
                        )}
                        {user && (
                            <>
                            <li>
                                Hi, {user.email}
                            </li>
                                <li>
                                    <NavLink to="/" onClick={handleLogout} className="bg-red-500 text-blue-50 p-2 rounded-sm px-5" >Log out  </NavLink>
                                </li>
                            </>
                        )
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar