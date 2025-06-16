import React, { use } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { AuthContext } from "../context/authContext/AuthContext";

const FoodPurchase = () => {
  const data = useLoaderData();
  const params = useParams().id;
  const selectedFood = data.find((food) => food._id == params);
  const { food_name, img, purchase_count, price } = selectedFood;
  const {user} = use(AuthContext);
  console.log(user)
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Food Purchase</legend>

        <label className="label">Food Name</label>
        <input name="name" type="text" className="input" placeholder="Food Name" defaultValue={food_name} readOnly required/>

        <label className="label">Price($)</label>
        <input name="price" type="text" className="input" placeholder="Price" defaultValue={price} readOnly required />

        <label className="label">Quantity</label>
        <input name="Quantity" type="number" className="input" placeholder="Purchase Quantity" min={1} defaultValue={1} required />

        <label className="label">Buyer Name</label>
        <input name="Buyer" type="text" className="input" defaultValue={user.displayName} readOnly />

        <label className="label">Buyer Name</label>
        <input name="Buyer" type="text" className="input" defaultValue={user.email} readOnly />
        <button className="btn btn-neutral mt-4">Purchase</button>
      </fieldset>
    </div>
  );
};

export default FoodPurchase;
