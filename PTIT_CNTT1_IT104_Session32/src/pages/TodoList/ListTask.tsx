import { Button, Checkbox, Select } from "antd";
import React from "react";
import FormAdd from "./FormAdd";
import { useDispatch, useSelector } from "react-redux";
import type ITask from "../../interface/task.interface";
import ModalDelete from "./ModalDelete";

export default function ListTask() {
  const resultTask = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  //   console.log(resultTask);

  // Filter
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  // Dổi màu task theo lever
  const getLevelTag = (level: number) => {
    switch (level) {
      case 3:
        return {
          label: "Không Quan Trọng",
          setLabel: "bg-gray-500 text-[#fff]",
        };
      case 2:
        return {
          label: "Bình Thường",
          setLabel: "bg-blue-500 text-[#fff]",
        };
      case 1:
        return {
          label: "Quan Trọng",
          setLabel: "bg-orange-500 text-[#fff]",
        };
      case 0:
        return {
          label: "Khẩn cấp",
          setLabel: "bg-red-500 text-[#fff]",
        };
      default:
        return { label: "Không Xác Định", setLabel: "bg-gray-300 text-black" };
    }
  };

  return (
    <div className="flex justify-center">
      <div className="border-1 w-[700px] mt-8 h-auto mb-32 border-gray-200 rounded-[6px] shadow-[-6px_10px_25px_-6px_rgba(0,0,0,0.2)]">
        <div className="text-2xl font-bold text-center my-2.5 px-3.5 py-5 ">
          <h1>Danh sách công việc</h1>
          <div className="flex gap-4 justify-end mt-4">
            <Select
              defaultValue=""
              style={{ width: 250 }}
              onChange={handleChange}
              options={[
                {
                  value: "",
                  label: "Lọc công việc theo mức độ",
                  disabled: true,
                },
                { value: "Khẩn cấp", label: "Khẩn cấp" },
                { value: "Quan trọng", label: "Quan trọng" },
                { value: "Bình thường", label: "Bình thường" },
                { value: "Không quan trọng", label: "Không Quan trọng" },
              ]}
            />
            <FormAdd></FormAdd>
          </div>

          {/* Danh sách task */}

          <div className="flex-col-reverse flex gap-4 mt-4 ">
            {resultTask.map((task: ITask) => {
              const { label, setLabel } = getLevelTag(task.leverTask);
              return (
                <div
                  key={task.id}
                  className="flex justify-between border-1 border-gray-200 rounded-[6px] shadow-[-6px_10px_25px_-6px_rgba(0,0,0,0.09)] py-1.5 px-9 duration-300 hover:-translate-y-1"
                >
                  <div>
                    <Checkbox
                      checked={task.status}
                      onChange={() =>
                        dispatch({
                          type: "TOGGLE_STATUS",
                          payload: { id: task.id },
                        })
                      }
                    >
                      <span
                        className={`text-[20px] font-normal ${
                          task.status ? "line-through text-gray-400" : ""
                        }`}
                      >
                        {task.nameTask}
                      </span>
                    </Checkbox>
                    <span
                      className={`${setLabel} rounded-2xl px-4 py-1 text-[12px] font-normal`}
                    >
                      {label}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Button color="cyan" variant="filled">
                      Sửa
                    </Button>
                    <ModalDelete id={task.id} button="delete"></ModalDelete>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}

          <div className="flex justify-between mt-6">
            <div>
              <span className="font-normal text-[15px]">
                Số công việc hoàn thành:{" "}
              </span>
              <span className="text-[15px]">10</span>
            </div>
            <div className="flex gap-4">
              <Button
                color="primary"
                variant="solid"
                onClick={() => dispatch({ type: "COMPLETE_ALL" })}
              >
                Hoàn thành tất cả
              </Button>
              <ModalDelete id={null} button="deleteAll"></ModalDelete>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
