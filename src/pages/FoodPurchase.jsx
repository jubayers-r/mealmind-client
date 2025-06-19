import React, { use } from "react";
import { Link, useLoaderData, useLocation, useNavigate, useParams } from "react-router";
import { AuthContext } from "../context/authContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const FoodPurchase = () => {
  const data = useLoaderData();
  const params = useParams().id;
  const selectedFood = data.find((food) => food._id == params);
  const { food_name, price } = selectedFood;
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const rest = Object.fromEntries(formData.entries());
    const time = Date.now();
    const purchase_info = {
      ...rest,
      price: parseFloat(form.price.value).toFixed(2),
      quantity: parseInt(form.quantity.value),
      purchase_time: time,
      food_id: params,
    };

    axios
      .post(
        "https://restaurant-management-server-chi-five.vercel.app/purchase",
        purchase_info
      )
      .then((res) => {
        res.data.acknowledged &&
          Swal.fire({
            title: "Successful",
            text: `x${form.quantity.value} ${form.food_name.value} is purchased Successfully`,
            icon: "success",
          });
        navigate("/myOrders");
      })
      .catch((error) => console.log(error));
  };

  const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const quantity = queryParams.get("qty");

  return (
    <div className="w-full flex justify-center">
      <form onSubmit={handleSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto dark:bg-slate-600 dark:text-white">
        <legend className="fieldset-legend text-2xl font-bold dark:text-white">
            Food Purchase</legend>

          <label className="label">Food Name</label>
          <input
            name="food_name"
            type="text"
            className="input dark:text-black"
            placeholder="Food Name"
            defaultValue={food_name}
            readOnly
            required
          />

          <label className="label">Price($)</label>
          <input
            name="price"
            type="string"
            className="input dark:text-black"
            placeholder="Price"
            defaultValue={price}
            readOnly
            required
          />

          <label className="label">Quantity</label>
          <input
            name="quantity"
            type="number"
            className="input dark:text-black"
            placeholder="Purchase Quantity"
            min={1}
            defaultValue={quantity}
            readOnly
            required
          />

          <label className="label">Buyer Name</label>
          <input
            name="buyer_name"
            type="text"
            className="input dark:text-black"
            defaultValue={user.displayName}
            readOnly
          />

          <label className="label">Buyer Name</label>
          <input
            name="buyer_email"
            type="text"
            className="input dark:text-black"
            defaultValue={user.email}
            readOnly
          />
          <button className="btn btn-neutral mt-4" type="submit">
            Purchase
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default FoodPurchase;
