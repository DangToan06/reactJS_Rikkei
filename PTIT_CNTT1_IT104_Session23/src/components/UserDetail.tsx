import { useLocation } from "react-router-dom";
import type { User } from "../interface/User";

export default function UserDetail() {
  const location = useLocation();
  console.log(location);

  const user = location.state as User;

  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center min-h-screen">
        <h1 className="text-2xl">Thong tin chi tiet</h1>
        <div key={user.id} className="border rounded-[5px] p-[12px] shadow-md">
          <p>Id: {user.id}</p>
          <p>UserName: {user.userName}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <button
            type="button"
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded cursor-pointer"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}
