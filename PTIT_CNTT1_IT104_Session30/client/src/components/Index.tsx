import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import FilterTask from "./FilterTask";
import ListTask from "./ListTask";
import Delete from "./Delete";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
interface Task {
  id: number;
  task: string;
  status: boolean;
}

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean | string>();

  const handleFilter = (stu: boolean | string) => {
    setFilter(stu);
  };

  const getAllTask = async () => {
    setIsLoading(true);
    try {
      let url = "http://localhost:3000/Todos";

      if (filter === false || filter === true) {
        url += `?status=${filter}`;
      }

      const response = await axios.get(url);
      setTasks(response.data);
    } catch (error) {
      console.log("Loi kho lay duoc data: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllTask();
  }, [filter]);

  return (
    <div className="flex justify-center">
      <div className="bg-[#fff] w-[500px] mt-8 h-auto mb-32 border-gray-300 border-1 rounded-[6px]">
        <h1 className="text-2xl font-bold text-center my-2.5">
          Quản lý công viêc
        </h1>
        <AddTask loadAddTask={getAllTask} />
        <FilterTask handleFilter={handleFilter} />
        <ListTask getAllTask={getAllTask} tasks={tasks} />
        <Delete reLoadPage={getAllTask} />
        {isLoading ? (
          <div className="absolute bg-black w-[100vw] h-[100vh] left-0 top-0 opacity-[0.5] z-10 flex justify-center items-center">
            <Spin
              indicator={
                <LoadingOutlined
                  style={{
                    fontSize: 48,
                    color: "#fff",
                  }}
                  spin
                />
              }
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
