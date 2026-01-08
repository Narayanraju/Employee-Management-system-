import React from "react";
import { useState } from "react";

export function Login({ HandleLogin }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    HandleLogin(Email, Password);
    console.log("Email : ", Email);
    console.log("Password : ", Password);

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-700 rounded-xl">
          <form
            onSubmit={(e) => {
              submitForm(e);
            }}
            className="flex flex-col items-center justify-center p-25 "
          >
            <input
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder-white text-yellow-300 "
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <input
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder-white text-yellow-300 mt-7 "
              type="password"
              placeholder="Enter Your Password"
              required
            />
            <button className="cursor-pointer bg-emerald-400! rounded-full py-3 px-5 text-xl placeholder-white text-white mt-7 ">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
