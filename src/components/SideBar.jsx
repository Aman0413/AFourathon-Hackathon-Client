import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { PiStudent } from "react-icons/pi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SideBar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5 pt-10  duration-300 sticky top-0 `}
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
        <Link to="/">
          <li
            className={`"flex  rounded-md p-2 cursor-pointer text-[#494848]-300 text-xl hover:bg-white hover:text-dark-purple hover:font-semibold  items-center gap-x-4 ${
              location.pathname === "/"
                ? "text-dark-purple font-semibold bg-white  "
                : ""
            }"`}
          >
            <AiOutlineHome />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Home
            </span>
          </li>
        </Link>
        <Link to="/students">
          <li
            className={`"flex  rounded-md p-2 cursor-pointer text-[#494848]-300 text-xl hover:bg-white hover:text-dark-purple hover:font-semibold  items-center gap-x-4 ${
              location.pathname === "/students"
                ? "text-dark-purple font-semibold bg-white  "
                : ""
            }" `}
          >
            <PiStudent />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Students
            </span>
          </li>
        </Link>
        <Link to="/elective">
          <li
            className={`"flex  rounded-md p-2 cursor-pointer text-[#494848]-300 text-xl hover:bg-white hover:text-dark-purple hover:font-semibold  items-center gap-x-4 ${
              location.pathname === "/elective"
                ? "text-dark-purple font-semibold bg-white  "
                : ""
            } "`}
          >
            <AiOutlineHome />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Elective Subject
            </span>
          </li>
        </Link>
        {/* <li className="flex  rounded-md p-2 cursor-pointer text-[#494848]-300 text-xl hover:bg-white hover:text-dark-purple hover:font-semibold  items-center gap-x-4 ">
          <AiOutlineSearch />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Search
          </span>
        </li> */}
      </ul>
    </div>
  );
}
export default SideBar;
