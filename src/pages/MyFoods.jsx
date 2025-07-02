import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import axios from "axios";
import FoodCard from "../components/FoodCard";

const MyFoods = () => {
  const { user } = use(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://restaurant-management-server-chi-five.vercel.app/myFoods?email=${user?.email}`
      )
      .then((res) => setData(res.data));
  }, [data]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 w-10/11 mx-auto my-10 ">
      {data.map((item, i) => (
        <FoodCard key={i} food={item} />
      ))}
    </div>
  );
};

export default MyFoods;
