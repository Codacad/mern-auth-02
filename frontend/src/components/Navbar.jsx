import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../state/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <>
      <nav className="px-16 bg-gray-700 text-gray-200 py-2 flex justify-between items-center">
        <Link to={"/"} className="logo text-4xl font-bold font-orange-800">
          MERN AUTH 01
        </Link>
        <ul className="nav-links flex justify-end items-center gap-4">
          <li>
            <Link className="" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="" to={"/dashboard"}>
              Dashoboard
            </Link>
          </li>

          <li>
            <Link className="" to={"/profile"}>
              Profile
            </Link>
          </li>
          {!isAuthenticated ? (
            <div className="flex gap-2">
              <li>
                <Link
                  className="bg-gray-200 text-gray-800 block w-20 rounded-sm p-1 text-center"
                  to={"/register"}
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  className="bg-gray-200 text-gray-800 block w-16 rounded-sm p-1 text-center"
                  to={"/login"}
                >
                  Login
                </Link>
              </li>
            </div>
          ) : (
            <button onClick={() => dispatch(logout())}>Logout</button>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
