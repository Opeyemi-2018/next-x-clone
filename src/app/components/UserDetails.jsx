"use client";
import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import UserInfo from "./UserData";

const UserDetails = () => {
  const [users, setUsers] = useState(UserInfo);

  return (
    <div>
      <div className="bg-[#0B1475] py-4 px-1 rounded-tr-md rounded-tl-md mt-6">
        <div className="grid grid-cols-9 gap-20 text-nowrap items-center place-items-center text-white capitalize text-[14px]">
          <input type="checkbox" />
          <p>user type</p>
          <p>full name</p>
          <p>email</p>
          <p>phone number</p>
          <p>rides completed</p>
          <p>location</p>
          <p>status</p>
          <p>Action</p>
        </div>
      </div>

      {users.map((user, index) => {
        const {
          userType,
          fullName,
          email,
          number,
          ridesCompleted,
          location,
          status,
        } = user;
        return (
          <div
            className={` py-4 px-1 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-100"
            }`}
          >
            <div className="grid grid-cols-9 gap-20 place-items-center justify-start capitalize text-[13px]  text-gray-500">
              <input type="checkbox" />
              <p>{userType}</p>
              <p className="text-nowrap">{fullName}</p>
              <p>{email}</p>
              <p>{number}</p>
              <p>{ridesCompleted}</p>
              <p>{location}</p>
              <p>{status}</p>
              <HiOutlineDotsHorizontal />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserDetails;
