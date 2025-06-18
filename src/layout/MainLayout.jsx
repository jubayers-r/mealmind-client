import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
 <div className="min-h-screen flex flex-col dark:bg-black">
      <Navbar />
      <hr className="text-gray-200" />
      <main className="flex-grow flex flex-col justify-center pb-15">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
