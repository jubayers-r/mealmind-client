import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FoodDetails = () => {
    const data = useLoaderData();
    const params = useParams().id;
    const selectedFood = data.find(food => food._id == params);
    const {food_name, img, purchase_count} = selectedFood
    return (
        <div className='w-5/11 mx-auto'>
            <p className='text-2xl font-semibold text-center py-2'>This food was purchased {purchase_count} times</p>
            <div className=' border rounded-xl p-5 '>
            <img src={img} alt="" className='rounded-xl w-full' />
            <h3 className='text-4xl font-bold text-center '>{food_name}</h3>
            </div>
            <button className='btn btn-block my-2 '>Purchase</button>
        </div>
    );
};

export default FoodDetails;