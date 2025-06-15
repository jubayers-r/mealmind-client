import React from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from '../components/FoodCard';

const AllFoods = () => {
    const foodsData = useLoaderData();

    return (
         <div className="w-9/11 mx-auto ">
      <div className="flex flex-col sm:flex-row justify-between items-center ">
        <h3 className="text-2xl sm:text-3xl font-bold text-center my-5 dark:text-white ">
          Taste Your Buds Out
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {foodsData.map((food) => (
              <FoodCard key={food._id} food={food} />
            ))
         }
      </div>
    </div>
    );
};

export default AllFoods;