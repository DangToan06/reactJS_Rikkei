import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Bai1() {
  return (
    <div>
      <nav className="flex items-center justify-center gap-8 bg-blue-500 p-4 shadow-lg ">
        <NavLink
          end
          to="/bai1"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md font-medium transition ${
              isActive
                ? "bg-blue-700 text-white"
                : "text-white hover:bg-blue-600 hover:text-gray-100"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/bai1/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md font-medium transition ${
              isActive
                ? "bg-blue-700 text-white"
                : "text-white hover:bg-blue-600 hover:text-gray-100"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/bai1/contact"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md font-medium transition ${
              isActive
                ? "bg-blue-700 text-white"
                : "text-white hover:bg-blue-600 hover:text-gray-100"
            }`
          }
        >
          Contact
        </NavLink>
      </nav>

      <Outlet></Outlet>
    </div>
  );
}
