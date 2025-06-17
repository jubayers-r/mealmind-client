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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <h1>not found</h1>,
    children: [
     {
       index: true,
       Component: Home,
       loader: ()=> fetch("http://localhost:3000/topFoods")
     },
     {
       path: "login",
       Component: LogIn
     },
     {
       path: "register",
       Component: Register
     },
     {
       path: "gallery",
       Component: Gallery
     },
     {
       path: "myOrders",
       Component: MyOrders
     },
     {
       path: "addFood",
       Component: AddFood
     },
     {
       path: "myFoods",
       Component: MyFoods
     },
     {
       path: "purchase/:id",
       Component: FoodPurchase,
       loader: ()=> fetch("http://localhost:3000/foods")
     },
     {
       path: "foodDetails/:id",
       Component: FoodDetails,
       loader: ()=> fetch("http://localhost:3000/foods")
     },
     {
       path: "foods",
       Component: AllFoods,
       loader: ()=> fetch("http://localhost:3000/foods")
     },
    ],
  },
]);
