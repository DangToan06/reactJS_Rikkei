import React from "react";
import { Task } from "./TodoListIndex/Task";
import { Search } from "./TodoListIndex/Search";
import { Nav } from "./TodoListIndex/Nav";
export const TodoListIndex = () => {
  return (
    <div className="col col-xl-10" style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-body p-5">
          <Search />
          <Nav />
          <Task />
        </div>
      </div>
    </div>
  );
};
