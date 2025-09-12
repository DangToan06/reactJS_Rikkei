import React from "react";
import { NavLink } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <h1>Bai tap cua Toan</h1>
      <div className="flex gap-4">
        <NavLink to="/bai1" className="hover:text-red-600">
          Bai1
        </NavLink>
        <NavLink to="/bai2" className="hover:text-red-600">
          Bai2
        </NavLink>
        <NavLink to="/bai3" className="hover:text-red-600">
          Bai3
        </NavLink>
        <NavLink to="/bai4" className="hover:text-red-600">
          Bai4
        </NavLink>
        <NavLink to="/bai5" className="hover:text-red-600">
          Bai5
        </NavLink>
        <NavLink to="/bai6" className="hover:text-red-600">
          Bai6
        </NavLink>
        <NavLink to="/bai7" className="hover:text-red-600">
          Bai7
        </NavLink>
        <NavLink to="/bai8" className="hover:text-red-600">
          Bai8
        </NavLink>
      </div>
    </div>
  );
}
