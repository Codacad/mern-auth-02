import React, { useState } from "react";
import { useRegisterUserMutation } from "../state/slices/userApi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setIsAuthenticated,setUser } from "../state/slices/authSlice";
import Cookies from "js-cookie";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error, data } = await registerUser({ name, email, password });

      if (error) {
        setErrorMessage(error.data.message);
      }
      if (data?.message === "Registered Successfully") {
        dispatch(setIsAuthenticated(Cookies.get("authToken")));
        dispatch(setUser(data.user));
        setName("");
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="register flex justify-center p-4">
        <form
          onSubmit={(e) => handleRegisterSubmit(e)}
          className="flex w-80 p-4 bg-gray-100 flex-col gap-4"
        >
          <h1>Register here...</h1>

          <span className="text-red-500"> {errorMessage}</span>
          <input
            type="text"
            id="name"
            className="name outline-none border rounded-md p-2 border-gray-400 focus:ring-1 focus:ring-gray-600"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            id="email"
            className="email outline-none border rounded-md p-2 border-gray-400 focus:ring-1 focus:ring-gray-600"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="email outline-none border rounded-md p-2 border-gray-400 focus:ring-1 focus:ring-gray-600"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-24 p-2 bg-gray-600 text-gray-200 rounded-md mx-auto">
            Register
          </button>
          <div className="already-registered text-center">
            Already Registered?{" "}
            <Link className="text-gray-600 font-bold text-md" to={"/login"}>
              Login
            </Link>{" "}
            here
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
