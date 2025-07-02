import React, { useState } from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../components/FoodCard";

const AllFoods = () => {
  const foodsData = useLoaderData();
  const [query, setQuery] = useState("");
  const filteredData = foodsData.filter((food) =>
    food.food_name.toLowerCase().includes(query)
  );
  const [type, setType] = useState("Default");
  const [sort, setSort] = useState("Release Time");

  const handleType = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setType(value);
  };

  const handleSort = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSort(value);
  };

  return (
    <div className="w-10/11 mx-auto mt-5">
      <input
        placeholder="Search"
        className="input w-full my-5 text-center text-2xl bg-gray-100 dark:bg-gray-300 "
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <div className="flex flex-col sm:flex-row justify-between items-center ">
        {/* <div
        className="flex flex-col sm:flex-row justify-between items-center  bg-[url('/bg-food.jpg')]
  bg-cover bg-center
  text-transparent
  bg-clip-text
  mask-repeat-no-repeat
  mask-size-contain
  mask-center "
      > */}

        <div className="flex flex-col lg:flex-row justify-between items-center my-5 ">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-5 dark:text-white ">
            Taste Your Buds Out
          </h3>
          <div className="grid md:flex gap-5 py-1 ">
            <div className="flex gap-2 items-center">
              <p className="dark:text-white">Sort by:</p>
              <select
                onChange={handleSort}
                className="bg-white lg:h-10 h-6 rounded-sm px-2 hover:brightness-75 "
              >
                <option>Release Time</option>
                <option>Ascending (A-Z)</option>
                <option>Descending (Z-A)</option>
              </select>
            </div>
            <div className="flex gap-2 items-center">
              <p className="dark:text-white">Filter by:</p>
              <select
                onChange={handleType}
                className="bg-white lg:h-10 h-6 rounded-sm px-2 hover:brightness-75 "
              >
                <option>Default</option>
                {[...new Set(filteredData.map((data) => data.category))].map(
                  (type) => (
                    <option key={type}>{type}</option>
                  )
                )}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {/* {filteredData.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))} */}

        {filteredData
          .filter((food) => {
            // If type is "Default", don't filter; otherwise, filter by cuisineType
            return type === "Default" ? true : food.category === type;
          })
          .sort((a, b) => {
            if (sort === "Ascending (A-Z)") {
              return a.food_name.localeCompare(b.food_name);
            } else if (sort === "Descending (Z-A)") {
              return b.food_name.localeCompare(a.food_name);
            } else {
              return 0; // No sorting (e.g., "Time" or "Release Time")
            }
          })
          .map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
      </div>
    </div>
  );
};

export default AllFoods;
