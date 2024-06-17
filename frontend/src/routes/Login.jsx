import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="login flex justify-center p-4">
        <form className="flex w-80 p-4 bg-gray-100 flex-col gap-4">
          <h1>Login here...</h1>
          <input
            type="email"
            id="email"
            className="email outline-none border rounded-md p-2 border-gray-400 focus:ring-1 focus:ring-gray-600"
            placeholder="Enter Email"
          />
          <input
            type="password"
            className="email outline-none border rounded-md p-2 border-gray-400 focus:ring-1 focus:ring-gray-600"
            id="password"
            placeholder="Enter Password"
          />
          <button className="w-24 p-2 bg-gray-600 text-gray-200 rounded-md mx-auto">
            Login
          </button>
          <div className="already-registered text-center">
            New an Account?{" "}
            <Link className="text-gray-600 font-bold text-md" to={"/register"}>
              Register
            </Link>{" "}
            here
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
