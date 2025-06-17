import React, { use, useEffect } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user, setStateData, loading } = use(AuthContext);
  const location = useLocation();
  useEffect(() => {
    setStateData(location.pathname);
  }, []);

  if (loading) {
    return (
      <span className="loading loading-dots loading-xl mx-auto dark:text-white" />
    );
  }
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivetRoute;
