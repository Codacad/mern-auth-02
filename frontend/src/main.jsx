import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import store from "./state/store.js";
import { Provider } from "react-redux";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <ProtectedRoute element={<Profile />} />,
      },
      {
        path: "dashboard",
        element: <ProtectedRoute element={<Dashboard />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
