import MainLayout from "../layout/MainLayout";
import { createBrowserRouter } from "react-router";
import LogIn from "../pages/Signin";
import Register from "../pages/Signup";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Gallery from "../pages/Gallery";
import FoodPurchase from "../pages/FoodPurchase";
import MyOrders from "../pages/MyOrders";
import AddFood from "../pages/AddFood";
import MyFoods from "../pages/MyFoods";
import PrivetRoute from "./PrivetRoute";
import UpdateFood from "../pages/UpdateFood";
import Support from "../pages/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <h1>not found</h1>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch(
            "https://restaurant-management-server-chi-five.vercel.app/topFoods"
          ),
      },
      {
        path: "login",
        Component: LogIn,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "gallery",
        Component: Gallery,
      },
      {
        path: "support",
        Component: Support,
      },
      {
        path: "myOrders",
        element: <PrivetRoute><MyOrders/></PrivetRoute>,
      },
      {
        path: "addFood",
        element: <PrivetRoute><AddFood/></PrivetRoute>,
      },
      {
        path: "updateFood/:id",
        element: <PrivetRoute><UpdateFood/></PrivetRoute>,
        loader: () =>
          fetch(
            "https://restaurant-management-server-chi-five.vercel.app/foods"
          ),
      },
      {
        path: "myFoods",
        element: <PrivetRoute><MyFoods/></PrivetRoute>,
      },
      {
        path: "purchase/:id",
        element: <PrivetRoute><FoodPurchase/></PrivetRoute>,
        loader: () =>
          fetch(
            "https://restaurant-management-server-chi-five.vercel.app/foods"
          ),
      },
      {
        path: "foodDetails/:id",
        Component: FoodDetails,
        loader: () =>
          fetch(
            "https://restaurant-management-server-chi-five.vercel.app/foods"
          ),
      },
      {
        path: "foods",
        Component: AllFoods,
        loader: () =>
          fetch(
            "https://restaurant-management-server-chi-five.vercel.app/foods"
          ),
      },
    ],
  },
]);
