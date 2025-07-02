import { BiPurchaseTag } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import { Link, useLocation } from "react-router";
import { Slide, Fade } from "react-awesome-reveal";

const FoodCard = ({ food }) => {
  const location = useLocation();
  const {
    img,
    food_name,
    description,
    available_quantity,
    category,
    purchase_count,
    _id,
  } = food;
  // truncation function for show more ux
  const maxWords = 15;
  const truncatedDescription = description
    ? description.split(" ").slice(0, maxWords).join(" ") +
      (description.split(" ").length > maxWords ? "..." : "")
    : "No instructions provided.";

  return (
    <Slide direction="left">
      <Fade duration={1000}>
        <div className="card bg-base-100 shadow-sm ">
          <figure className="w-full h-50">
            <img
              src={
                img
                  ? img
                  : "https://cdn-icons-png.flaticon.com/512/3875/3875148.png"
              }
              alt={food_name}
              className=" object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-col sm:flex-row justify-between  items-center">
              <h2 className="card-title">{food_name} </h2>
              <div className="flex rounded-2xl border p-1 hover:bg-red-400 hover:text-white hover:cursor-default">
                <MdOutlineProductionQuantityLimits size={20} />
                {available_quantity} left
              </div>

              {/* <div className="badge badge-secondary ">{cuisineType}</div> */}
            </div>
            <div className="card-actions justify-end grid grid-cols-2 2xl:grid-cols-3">
              <p className="font-semibold border py-1 rounded-lg hover:bg-green-600 hover:text-white text-center hover:cursor-default">
                {category}
              </p>
            </div>
            <p className="h-[40px]">{truncatedDescription}</p>
          </div>
          <div className="flex gap-2  mx-auto mb-4">
            <Link to={`/foodDetails/${_id}`}>
              <div className="btn hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black ">
                <BiPurchaseTag size={25} /> {purchase_count} times
              </div>
            </Link>
            <Link
              to={
                location.pathname === "/myFoods"
                  ? `/updateFood/${_id}`
                  : `/foodDetails/${_id}`
              }
            >
              <button className="btn hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black  flex w-fit">
                {location.pathname === "/myFoods" ? "Update" : "See Details"}
              </button>
            </Link>
          </div>
        </div>
      </Fade>
    </Slide>
  );
};

export default FoodCard;
