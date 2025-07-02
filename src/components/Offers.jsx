import React from "react";
import FoodCard from "./FoodCard";
import OfferCard from "./OfferCard";

const Offers = ({topFoods}) => {
  return (
    <div className="w-10/11 mx-auto">
      <h1 className="sm:text-4xl text-2xl font-bold text-center my-5 min-h-[50px] dark:text-white">
        Today's Offers {"(on the best products)"}
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {topFoods.map((food) => (
              <OfferCard key={food._id} food={food} />
            ))}
          </div>
    </div>
  );
};

export default Offers;
