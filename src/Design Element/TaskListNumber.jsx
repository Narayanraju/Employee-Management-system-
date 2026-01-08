import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex m-10 justify-between gap-5 screen">
      <div className=" w-[45%] p-10 bg-green-500 rounded-2xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" w-[45%] p-10 bg-blue-400 rounded-2xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className=" w-[45%] p-10 bg-gray-500 rounded-2xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted task</h3>
      </div>
      <div className=" w-[45%] p-10 bg-red-700 rounded-2xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
