import { FaRegBell } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiExport } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { CgSortAz } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import UserDetails from "./UserDetails";

const User = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center pb-4">
        <p className="capitalize text-2xl font-semibold">user management</p>

        <div className="flex items-center gap-16">
          <div className="relative">
            <FaRegBell size={25} className="text-gray-500" />
            <p className="absolute -top-2 -right-1 p-2 bg-red-600 rounded-full h-4 flex items-center justify-center w-4 text-white">
              1
            </p>
          </div>

          <div className="flex gap-8 py-1  items-center bg-white rounded-full">
            <div className="flex items-center gap-2 pl-1">
              <img
                src="/log-man.jpg"
                className="rounded-full h-7 w-7 object-cover"
                alt=""
              />
              <p>Teejay Teko</p>
            </div>
            <IoMdArrowDropdown size={30} className="pr-2" />
          </div>
        </div>
      </div>

      {/* second div */}
      <div className="flex items-center justify-between">
        <div className="relative bg-white rounded-lg ">
          <BiSearch size={20} className="absolute text-gray-600 left-2 top-3" />
          <form>
            <input
              type="text"
              placeholder="search  users"
              className="border-none   focus:ring-0  text text-center rounded-full"
            />
          </form>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 px-4 bg-[#0B1475] py-2 rounded-md text-white">
            <BiExport size={20} />
            <p>export</p>
            <IoIosArrowDown />
          </div>

          <div className="flex items-center ">
            <div className="flex items-center gap-2 px-3 bg-white py-2 rounded-l-md border-r-2">
              <CgSortAz />
              <p>Filter By</p>
            </div>
            <button className="flex items-center gap-2 px-3 bg-white py-2 border-r-2">
              user type
              <IoIosArrowDown />
            </button>
            <button className="flex items-center gap-2 px-3 bg-white py-2 border-r-2">
              status
              <IoIosArrowDown />
            </button>
            <button className="flex text-red-600 items-center gap-2 px-3 bg-white py-2 rounded-r-md">
              reset filter
              <GrPowerReset />
            </button>
          </div>
        </div>
      </div>

      <UserDetails />
    </div>
  );
};

export default User;
