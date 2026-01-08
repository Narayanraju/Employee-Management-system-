import { React, useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [asignTo, setasignTo] = useState("");
  const [category, setCategory] = useState("");

  // const [Taskadd, setTaskadd] = useState();

  const [userData, setUserData] = useContext(AuthContext);

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   setTaskadd({
  //     TaskTitle,
  //     taskDescription,
  //     taskDate,
  //     catgory,
  //     asignTo,
  //     active: false,
  //     newTask: true,
  //     failed: false,
  //     completed: false,
  //   });

  //   const localData = userData;

  //   localData.forEach((element) => {
  //     if (asignTo == element.firstName) {
  //       element.tasks.push(Taskadd);
  //       console.log(element);
  //     }
  //   });

  //   setUserData(localData);

  //   settaskDate("");
  //   settaskDescription("");
  //   setasignTo("");
  //   setcatgory("");
  //   setTaskTitle("");
  // };

  const submitForm = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      asignTo,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const localData = [...userData]; // clone array

    localData.forEach((element) => {
      if (asignTo === element.firstName) {
        element.tasks.push(newTask); // ✅ push real task
        console.log(element);
      }
      settaskDate("");
      settaskDescription("");
      setasignTo("");
      setCategory("");
      settaskTitle("");
    });

    setUserData(localData);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <div class="min-h-screen bg-black flex items-center justify-center px-6">
          <div class="w-full max-w-7xl bg-zinc-900 rounded-xl p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* <!-- Left Section --> */}
              <div class="space-y-5">
                {/* <!-- Task Title --> */}
                <div>
                  <label class="block text-sm text-gray-300 mb-2">
                    Task Title
                  </label>
                  <input
                    value={taskTitle}
                    onChange={(e) => {
                      settaskTitle(e.target.value);
                    }}
                    type="text"
                    placeholder="Make a UI design"
                    class="w-full bg-zinc-800 border border-zinc-600 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* <!-- Date --> */}
                <div>
                  <label class="block text-sm text-gray-300 mb-2">Date</label>
                  <input
                    value={taskDate}
                    onChange={(e) => {
                      settaskDate(e.target.value);
                    }}
                    type="date"
                    class="w-full bg-zinc-800 border border-zinc-600 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* <!-- Assign To --> */}
                <div>
                  <label class="block text-sm text-gray-300 mb-2">
                    Assign to
                  </label>
                  <input
                    value={asignTo}
                    onChange={(e) => {
                      setasignTo(e.target.value);
                    }}
                    type="text"
                    placeholder="employee name"
                    class="w-full bg-zinc-800 border border-zinc-600 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* <!-- Category --> */}
                <div>
                  <label class="block text-sm text-gray-300 mb-2">
                    Category
                  </label>
                  <input
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    type="text"
                    placeholder="design, dev, etc"
                    class="w-full bg-zinc-800 border border-zinc-600 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* <!-- Right Section --> */}
              <div class="flex flex-col h-full">
                {/* <!-- Description --> */}
                <div class="flex-1">
                  <label class="block text-sm text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={taskDescription}
                    onChange={(e) => {
                      settaskDescription(e.target.value);
                    }}
                    class="w-full h-full min-h-[230px] bg-zinc-800 border border-zinc-600 text-white rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>

                {/* <!-- Button --> */}
                <button class="mt-12  bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-lg transition duration-200 ">
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
