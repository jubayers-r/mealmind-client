import React, { useState } from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../components/FoodCard";

const AllFoods = () => {
  const foodsData = useLoaderData();
  const [query, setQuery] = useState("");
  const filteredData = foodsData.filter((food) =>
    food.food_name.toLowerCase().includes(query)
  );

  return (
    <div className="w-9/11 mx-auto ">
      <input
        placeholder="Search"
        className="input w-full my-5 text-center text-2xl"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <div className="flex flex-col sm:flex-row justify-between items-center ">
        <h3 className="text-2xl sm:text-3xl font-bold text-center my-5 w-full">
          The taste you never had before
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {filteredData.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
