import React from "react";
import { Header } from "../../Design Element/Header";
import CreateTask from "../../Design Element/CreateTask";
import AllTask from "../../Design Element/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-full w-full p-10 ">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
