import MainLayout from "../layout/MainLayout";
import { createBrowserRouter } from "react-router";
import LogIn from "../pages/Signin";
import Register from "../pages/Signup";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <h1>not found</h1>,
    children: [
     {
       index: true,
       Component: Home
     },
     {
       path: "login",
       Component: LogIn
     },
     {
       path: "register",
       Component: Register
     },
    ],
  },
]);
