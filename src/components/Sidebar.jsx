import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'


function Sidebar() {
  const activeLink = ({ isActive }) => {
    isActive
      ? "bg-green-700 text-green-700"
      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
  }

  return (
    <aside className="w-64 h-screen bg-white border-r shadow-sm flex flex-col justify-between">
      <div>
        <Link to="/" className='text-2xl text-black-900 font-bold'>
          <img className='w-50' src={logo} alt="logo" />
        </Link>
        <nav className="mt-6 px-4">
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to="/dashboard" className={activeLink} >Dashboard</NavLink>
            </li>

            <li>
              <NavLink to="/my-plants" className={activeLink}>My plants</NavLink>
            </li>

            <li>
              <NavLink className={activeLink}>Calendar</NavLink>
            </li>
            <li>
              <NavLink className={activeLink}>Reminders</NavLink>
            </li>
            <li>
              <NavLink className={activeLink}>Care guide</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar