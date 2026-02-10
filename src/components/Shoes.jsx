import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Shoes() {
  const navItems = ["Boots", "Sandals", "Formal", "Sneakers"];

  return (
    <div>
      {/* Sub Navbar */}
      <div className="my-6 border-b pb-3 mt-16">
        <div className="flex gap-4 md:gap-8 justify-center md:justify-center overflow-x-auto no-scrollbar px-2">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-medium transition whitespace-nowrap
                ${isActive ? "text-white bg-black" : "text-gray-700 hover:text-black"}`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  )
}
