import moment from "moment";
import { MdOutlineCancelPresentation } from "react-icons/md";

const OrdersTable = ({ item }) => {
  const { food_name, category, price, purchase_time } = item;

  const time = moment(purchase_time).format("llll");
  return (
    <tbody>
      <tr>
        <td className="border">{food_name}</td>
        <td className="border">{price}($)</td>
        <td className="border">{time}</td>
        <td className="border">
          <button className="btn btn-block">
            <MdOutlineCancelPresentation size={40} color="red" className="mx-auto" />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default OrdersTable;
