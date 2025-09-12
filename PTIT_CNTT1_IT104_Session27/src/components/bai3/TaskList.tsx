import React from "react";
import { dataTask } from "./Data/Task";
import { NavLink } from "react-router-dom";

export default function TaskList() {
  const jobs = dataTask;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Danh sách công việc
      </h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {job.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{job.description}</p>
            <NavLink to={`${job.id}`}>
              <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                Xem chi tiết
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
