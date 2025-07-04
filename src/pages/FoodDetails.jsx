import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData, useLocation, useParams } from "react-router";
import { AuthContext } from "../context/authContext/AuthContext";

const FoodDetails = () => {
  const { user, quantity, setQuantity } = use(AuthContext);
  const data = useLoaderData();
  const params = useParams().id;
  const selectedFood = data.find((food) => food._id == params);
  const { food_name, img, purchase_count, available_quantity, author_email } =
    selectedFood;
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (
      quantity == 0 ||
      available_quantity === 0 ||
      quantity > available_quantity
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [available_quantity, quantity]);

  const location = useLocation();

  return (
    <div className="w-5/11 mx-auto">
      <p className="text-2xl font-semibold text-center py-2 dark:text-white">
        This food was purchased {purchase_count} times
      </p>
      <div className=" border rounded-xl p-5 dark:text-white">
        <img src={img} alt={""} className="rounded-xl w-full " />
        <h3 className="text-xl sm:text-4xl font-bold text-center dark:text-white">
          {food_name}
        </h3>
      </div>
      {/* box starts */}
      <p className="text-2xl font-semibold text-center py-2 dark:text-white">
        Available Stock: {available_quantity} {food_name}
      </p>
      <form className="w-full my-2">
        {user && author_email === user?.email ? (
          ""
        ) : (
          <input
            className="input w-1/2"
            placeholder="Quantity"
            max={available_quantity}
            type="number"
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        )}

        <Link
          to={{
            pathname:
              author_email && author_email === user?.email
                ? `/updateFood/${params}`
                : quantity == 0 || quantity > available_quantity
                ? location.pathname
                : `/purchase/${params}`,
            search: `?qty=${quantity}`, // this adds ?qty=2 to the URL
          }}
        >
          <button
            disabled={
              isDisabled || quantity <= 0 || quantity > available_quantity
            }
            className={`btn disabled:bg-gray-400 disabled:cursor-not-allowed ${
              user && author_email === user?.email ? "w-full" : "w-1/2"
            } `}
          >
            {user && author_email === user?.email
              ? "Update"
              : available_quantity === 0
              ? "item is not available"
              : "Purchase"}
          </button>
        </Link>
      </form>
      {/* box ends */}
    </div>
  );
};

export default FoodDetails;
