import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className=" p-6 overflow-auto  text-white font-bold">
      <div className=" border-3 border-yellow-500  mb-5 py-4 rounded-xl px-4 flex justify-between">
        <h2 className="w-1/5 text-white">Employess Name</h2>
        <h3 className="w-1/5 text-white">New Task </h3>
        <h5 className="w-1/5 text-white">Active Task</h5>
        <h3 className="w-1/5 text-white">Completed </h3>
        <h5 className="w-1/5 text-white">Failed</h5>
      </div>

      <div className="">
        {userData.map((e, i) => {
          return (
            <div className=" border-2 border-emerald-500 mb-3 py-2 rounded-xl px-4 gap-3 flex justify-between">
              <h2
                className="w-1/5 text-lg font-semibold text-red-500  p-1 rounded-2xl"
                id={i}
              >
                {e.firstName}
              </h2>
              <h3
                className="w-1/5 text-lg font-semibold text-blue-600 p-1 rounded-2xl"
                id={i}
              >
                {e.taskCounts.newTask}
              </h3>
              <h5
                className="w-1/5 text-lg font-semibold text-yellow-600 p-1 rounded-2xl"
                id={i}
              >
                {e.taskCounts.active}
              </h5>
              <h3
                className="w-1/5 text-lg font-semibold text-green-600 p-1 rounded-2xl"
                id={i}
              >
                {e.taskCounts.completed}
              </h3>
              <h5
                className="w-1/5 text-lg font-semibold text-red-600 p-1 rounded-2xl"
                id={i}
              >
                {e.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
      <p className="text-amber-300 mt-12 text-center">
        © 2026 Narayan Raju. All rights reserved.
      </p>
    </div>
  );
};

export default AllTask;
