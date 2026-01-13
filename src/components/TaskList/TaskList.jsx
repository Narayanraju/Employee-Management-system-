import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <>
      <div
        id="TaskList"
        className=" overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full  py-5 "
      >
        {data.tasks.map((ele, index) => {
          if (ele.active) {
            return <AcceptTask key={index} data={ele} />;
          }
          if (ele.newTask) {
            return <NewTask key={index} data={ele} />;
          }
          if (ele.completed) {
            return <CompleteTask key={index} data={ele} />;
          }
          if (ele.failed) {
            return <FailedTask key={index} data={ele} />;
          }
        })}
      </div>
      <marquee className="text-amber-300 mt-12 text-center">
        © 2026 Narayan Raju. All rights reserved.
      </marquee>
    </>
  );
};

export default TaskList;
