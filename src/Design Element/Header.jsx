import React, { useState } from "react";

export const Header = (props) => {
  const [Username, setUsername] = useState("");
  console.log(props);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    props.changeUser("");
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl text-white">
        Hello <br />{" "}
        <span className="text-5xl">
          {props.data ? props.data.firstName : "Admin"}👍
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600! text-lg font-medium text-white px-5 py-2 rounded-3xl"
      >
        Log Out
      </button>
    </div>
  );
};
