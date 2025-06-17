import axios from "axios";
import React, { use } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/authContext/AuthContext";

const UpdateFood = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const { id } = useParams();
  const data = useLoaderData();
  const selectedData = data?.find((food) => food._id == id);
  const {
    food_name,
    img,
    description,
    available_quantity,
    price,
    category,
    origin,
  } = selectedData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const rest = Object.fromEntries(formData.entries());
    const food_info = {
      ...rest,
      price: parseFloat(form.price.value).toFixed(2),
      available_quantity: parseInt(form.available_quantity.value),
      purchase_count: 0,
      creationTime: Date.now(),
    };

    axios
      .put(`https://restaurant-management-server-chi-five.vercel.app/update/${id}`, food_info)
      .then((res) => {
        res.data.acknowledged &&
          Swal.fire({
            title: "Successful",
            text: `Updated Successfully`,
            icon: "success",
          });
        navigate("/myFoods");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleUpdate}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
        <legend className="fieldset-legend">Update Food Info</legend>

        <label className="label">Food Name</label>
        <input
          name="food_name"
          type="text"
          className="input"
          placeholder="Food Name"
          defaultValue={food_name}
          required
        />
        <label className="label">Food Image</label>
        <input
          name="img"
          type="text"
          className="input"
          placeholder="Food Image"
          defaultValue={img}
        />
        <label className="label">Short Description</label>
        <input
          name="description"
          type="text"
          className="input"
          placeholder="Short Description"
          defaultValue={description}
          required
        />
        <label className="label">Quantity</label>
        <input
          name="available_quantity"
          type="number"
          className="input"
          placeholder="Quantity"
          min={1}
          defaultValue={available_quantity}
          required
        />
        <label className="label">Price ($)</label>
        <input
          name="price"
          type="string"
          className="input"
          placeholder="Price"
          defaultValue={price}
          required
        />
        <label className="label">Category</label>
        <input
          name="category"
          type="text"
          className="input"
          placeholder="eg. Dessert/Snacks/Main Course"
          defaultValue={category}
          required
        />
        <label className="label">Origin (Country)</label>
        <input
          name="origin"
          type="text"
          className="input"
          placeholder="Origin"
          defaultValue={origin}
        />
        <label className="label">Added By</label>
        <input
          name="author_name"
          type="Name"
          className="input"
          placeholder="Author Name"
          defaultValue={user.displayName}
          readOnly
        />
        <input
          name="author_email"
          type="email"
          className="input"
          placeholder="Author Email"
          defaultValue={user.email}
          readOnly
        />

        <button className="btn btn-neutral mt-4" type="submit">
          Update
        </button>
      </fieldset>
    </form>
  );
};

export default UpdateFood;
