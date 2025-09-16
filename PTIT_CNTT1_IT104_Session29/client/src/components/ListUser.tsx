import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  email?: string;
}

export default function ListUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  //Goi API

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users?name_like=${searchValue}`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.log("Error: ", error));
  }, [searchValue]);

  return (
    <div>
      <h3>Danh sach nguoi dung</h3>
      <input
        type="text"
        placeholder="Tim kiem theo ten"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        value={searchValue}
      />
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ten</th>
            <th>Ngay sinh</th>
            <th>Email</th>
            <th>Dia chi</th>
            <th>Chuc nang</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => {
            return (
              <tr key={u.id}>
                <td>{i + 1}</td>
                <td>{u.name}</td>
                <td>{u.dateOfBirth}</td>
                <td>{u.email}</td>
                <td>Hà Nội</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button>Prev</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>Next</button>
      </div>
    </div>
  );
}
