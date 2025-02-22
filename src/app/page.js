import React from "react";
import User from "./components/User";
import Sidebar from "./components/Sidebar";

const page = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-48 bg-[#0B1475] p-6">
        <Sidebar />
      </div>
      <div className="bg-[#EDF1F3] w-full">
        {" "}
        <User />
      </div>
    </div>
  );
};

export default page;
