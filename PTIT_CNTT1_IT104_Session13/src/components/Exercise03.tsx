import React, { Component } from "react";

interface Person {
  id: number;
  name: string;
  age: number;
}

type StateType = {
  users: Person[];
};

export default class Exercise03 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "John", age: 30 },
        { id: 2, name: "Mary", age: 25 },
        { id: 3, name: "Jane", age: 20 },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>Danh sách người dùng</h2>
        <table
          border={1}
          cellPadding={8}
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Địa chỉ</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
