import React, { useState } from "react";
import type { User } from "../interface/User";
import { NavLink } from "react-router-dom";

export default function ListUser() {
  const [listUser] = useState<User[]>([
    {
      id: 1,
      userName: "Nguyen Van A",
      email: "nva@gmail.com",
      address: "Ha Noi",
    },
    {
      id: 2,
      userName: "Nguyen Van B",
      email: "nvb@gmail.com",
      address: "Ha Nam",
    },
    {
      id: 3,
      userName: "Nguyen Van C",
      email: "nvc@gmail.com",
      address: "Ninh Binh",
    },
  ]);

  return (
    <div className="flex gap-2 justify-center items-center min-h-screen">
      {listUser.map((u) => (
        <div key={u.id} className="border rounded-[5px] p-[12px] shadow-md">
          <p>Id: {u.id}</p>
          <p>UserName: {u.userName}</p>
          <p>Email: {u.email}</p>
          <p>Address: {u.address}</p>
          <NavLink to="/detail" state={u}>
            <button
              type="button"
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded cursor-pointer"
            >
              Xem chi tiết
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
