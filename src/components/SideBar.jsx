import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { PiStudent } from "react-icons/pi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";

function SideBar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
        id="sidebar"
      >
        <BsFillArrowLeftCircleFill
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full text-[#494848]  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <BiSolidDashboard
            className={`cursor-pointer duration-500 text-[#494848] ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Dashboard
          </h1>
        </div>
        <ul className="pt-6 flex flex-col justify-between h-[30%] gap-4">
          <li className="flex  rounded-md p-2 cursor-pointer text-[#494848]-300 text-xl hover:bg-white hover:text-dark-purple hover:font-semibold  items-center gap-x-4 ">
            <AiOutlineHome />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Home
            </span>
          </li>
          <li className="flex  rounded-md p-2 cursor-pointer text-[#494848]-300 text-xl hover:bg-white hover:text-dark-purple hover:font-semibold  items-center gap-x-4 ">
            <PiStudent />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Students
            </span>
          </li>
          <li className="flex  rounded-md p-2 cursor-pointer text-[#494848]-300 text-xl hover:bg-white hover:text-dark-purple hover:font-semibold  items-center gap-x-4 ">
            <AiOutlineHome />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Elective Subject
            </span>
          </li>
          <li className="flex  rounded-md p-2 cursor-pointer text-[#494848]-300 text-xl hover:bg-white hover:text-dark-purple hover:font-semibold  items-center gap-x-4 ">
            <AiOutlineSearch />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Search
            </span>
          </li>
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
  );
}
export default SideBar;