import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Sidebar() {
  const activeLink = ({ isActive }) =>
    `flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isActive
      ? "bg-[#1C9426] text-white shadow-md"
      : "text-gray-600 hover:bg-green-50 hover:text-[#1C9426]"
    }`;

  return (
    <aside className="w-72 h-screen bg-white border-r border-gray-100 shadow-lg flex flex-col">
      <div className="px-6 py-8 border-b border-gray-100">
        <Link to="/">
          <img
            className="w-44 mx-auto"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <nav className="flex-1 px-5 py-6">
        <p className="text-xs uppercase text-gray-400 font-semibold mb-4">
          Main Menu
        </p>

        <ul className="space-y-2">
          <li>
            <NavLink to="/dashboard" className={activeLink}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/my-plants" className={activeLink}>
              My Plants
            </NavLink>
          </li>

          <li>
            <NavLink to="/calendar" className={activeLink}>
              Calendar
            </NavLink>
          </li>

          <li>
            <NavLink to="/reminders" className={activeLink}>
              Reminders
            </NavLink>
          </li>

          <li>
            <NavLink to="/care-guide" className={activeLink}>
              Care Guide
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="p-5 border-t border-gray-100">
        <Link
          to="/add-plant"
          className="block w-full text-center bg-[#1C9426] text-white py-3 rounded-xl font-medium hover:bg-green-700 shadow-md hover:shadow-lg"
        >
          + Add New Plant
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;