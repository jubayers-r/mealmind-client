import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";

const OrdersTable = ({ item }) => {
  const { food_name, price, purchase_time, _id, quantity } = item;

  const time = moment(purchase_time).format("llll");
  const handleCancel = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              `https://restaurant-management-server-chi-five.vercel.app/myOrder/${_id}`
            )
            .then((res) => {
              res.data.acknowledged &&
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
            });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <tbody>
      <tr>
        <td className="border">{food_name}</td>
        <td className="border">{price}($)</td>
        <td className="border">{quantity}</td>
        <td className="border">{time}</td>
        <td className="border">
          <button
            className="btn btn-block dark:bg-gray-900 dark:text-white hover:text-red-600 text-2xl"
            onClick={handleCancel}
          >
            X
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default OrdersTable;
