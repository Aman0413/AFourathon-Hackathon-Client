import React, { useEffect, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import axios from "../utils/axiosClient";

function SeeSingleStudent({ show, hide, id }) {
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log("id " + id);

  const getStudent = async (id) => {
    try {
      const res = await axios.get(`student/${id}`);
      setStudent(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {}, []);

  if (!show) return null;
  return (
    <div
      class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div class="">
          <div class="text-center p-5 flex-auto justify-center flex flex-col items-center ">
            <h2 className="text-xl font-bold py-4 mb-3">Student Detail</h2>
            <BiSolidUser className="text-6xl" />
          </div>

          <div className="flex flex-col gap-3 ">
            <div className="flex justify-evenly">
              <div className="flex gap-2 bg-[#e4e7eb] py-2 w-40 justify-center items-center rounded-md">
                <span>Name</span>
                <span>Aman Verma</span>
              </div>
              <div className="flex gap-2 ">
                <div className="flex gap-2 bg-[#e4e7eb] py-2 w-40 justify-center items-center rounded-md">
                  <span>Student Id</span>
                  <span>ER312</span>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="flex gap-2 bg-[#e4e7eb] py-2 w-40 justify-center items-center rounded-md">
                <span>Email</span>
                <span>aman@gmail.com</span>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-2 bg-[#e4e7eb] py-2 w-40 justify-center items-center rounded-md">
                  <span>Phone</span>
                  <span>1236237621</span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button
              class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              onClick={hide}
            >
              Cancel
            </button>
            <button
              class="mb-2 md:mb-0 bg-dark-purple border border-dark-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-dark-blue"
              onClick={() => {
                getStudent(id);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeSingleStudent;
