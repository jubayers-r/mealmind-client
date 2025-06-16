import React, { use } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const rest = Object.fromEntries(formData.entries());
    const food_info = {
      ...rest,
      price: parseFloat(form.price.value).toFixed(2),
      quantity: parseInt(form.quantity.value),
    };

    axios
      .post("http://localhost:3000/post", food_info)
      .then((res) => {
        res.data.acknowledged &&
          Swal.fire({
            title: "Successful",
            text: `x${form.quantity.value} ${form.food_name.value} is Added Successfully`,
            icon: "success",
          });
        navigate("/myFoods");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handlePost}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Add Food</legend>

        <label className="label">Food Name</label>
        <input
          name="food_name"
          type="text"
          className="input"
          placeholder="Food Name"
          required
        />
        <label className="label">Food Image</label>
        <input
          name="img"
          type="text"
          className="input"
          placeholder="Food Image"
        />
        <label className="label">Short Description</label>
        <input
          name="description"
          type="text"
          className="input"
          placeholder="Short Description"
          required
        />
        <label className="label">Quantity</label>
        <input
          name="quantity"
          type="number"
          className="input"
          placeholder="Quantity"
          defaultValue={1}
          min={1}
          required
        />
        <label className="label">Price ($)</label>
        <input
          name="price"
          type="string"
          className="input"
          placeholder="Price"
          required
        />
        <label className="label">Category</label>
        <input
          name="category"
          type="text"
          className="input"
          placeholder="eg. Dessert/Snacks/Main Course"
          required
        />
        <label className="label">Origin (Country)</label>
        <input
          name="origin"
          type="text"
          className="input"
          placeholder="Origin"
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
          Post
        </button>
      </fieldset>
    </form>
  );
};

export default AddFood;
