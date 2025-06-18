import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import OrdersTable from "../components/OrdersTable";

const MyOrders = () => {
  const { user } = use(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://restaurant-management-server-chi-five.vercel.app/myOrders?email=${user?.email}`
      )
      .then((res) => setData(res.data));
  }, [data]);

  return (
    <table className="table-fixed w-9/11 mx-auto text-center border my-5 dark:text-white">
      <thead>
        <tr>
          <th className="border">Food Name</th>
          <th className="border">Price ($)</th>
          <th className="border">Qty</th>
          <th className="border">On</th>
          <th className="border">(Click to) Delete</th>
        </tr>
      </thead>
      {data.map((item, i) => (
        <OrdersTable key={i} item={item} />
      ))}
    </table>
  );
};

export default MyOrders;
