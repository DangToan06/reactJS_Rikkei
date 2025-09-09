import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <NavLink to="/nav/home">Home</NavLink>
        <NavLink to="/nav/about">About</NavLink>
        <NavLink to="/nav/contact">Contact</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
