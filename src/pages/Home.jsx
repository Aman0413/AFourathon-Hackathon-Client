import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../redux/slices/students";
import { fetchSubjects } from "../redux/slices/elctive";

function Home() {
  const totalStudents = useSelector(
    (state) => state.students.students?.result?.length
  );
  const totalSubjects = useSelector(
    (state) => state.subjects.data?.result?.length
  );

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchSubjects());
  }, [totalStudents, totalSubjects]);
  return (
    <div className="w-screen h-screen  flex flex-col gap-20 bg-gray-100">
      <div className="flex flex-col md:flex-row w-full items-center justify-around my-10 gap-8 md:gap-0">
        <div class="flex flex-row space-x-4 w-[80%] items-center bg-dark-blue md:w-[30%] h-56 rounded-lg px-10">
          <div id="stats-1">
            <FaUsers className="md:text-4xl text-3xl text-white" />
          </div>
          <div className="">
            <p class="text-teal-300 md:text-xl text-sm font-bold uppercase leading-4">
              Total Students
            </p>
            <p class="text-white font-bold text-3xl inline-flex items-center space-x-2">
              <span>{totalStudents}</span>
            </p>
          </div>
        </div>
        <div class="flex flex-row space-x-4 items-center  bg-dark-blue w-[80%] md:w-[30%] h-56 px-10 rounded-lg ">
          <div id="stats-1">
            <SiBookstack className="text-white md:text-4xl text-3xl" />
          </div>
          <div className="">
            <p class="text-teal-300 md:text-xl text-sm  uppercase leading-4 font-bold">
              Total Subjects
            </p>
            <p class="text-white font-bold text-3xl inline-flex items-center space-x-2">
              <span>{totalSubjects}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
