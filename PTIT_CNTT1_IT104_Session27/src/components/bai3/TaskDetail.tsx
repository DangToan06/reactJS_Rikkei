import React from "react";
import { dataTask, type IDataTask } from "./Data/Task";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskDetail() {
  const listTask: IDataTask[] = dataTask;
  const idTask = useParams();
  const task: IDataTask | undefined = listTask.find(
    (t) => Number(idTask.id) === t.id
  );
  const navigate = useNavigate();

  return (
    <div>
      {task ? (
        <div className="max-w-2xl mx-auto p-6 bg-white mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {task.title}
          </h2>
          <p className="text-gray-600 mb-6"></p>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700 leading-relaxed">{task.description}</p>
          </div>

          <div className="flex gap-3">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
              onClick={() => navigate(-1)}
            >
              Quay lại
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
