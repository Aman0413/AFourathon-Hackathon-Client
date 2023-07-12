import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSubject } from "../../redux/slices/elctive";

function AddSubject({ show, hide }) {
  const [subject, setSubject] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const subjectData = {
    name: subject,
    code: code,
    description: description,
  };

  if (!show) return null;
  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center ">
            <h2 className="text-xl font-bold py-4 mb-3">Add New Subject</h2>

            <div className="flex justify-between flex-col items-center gap-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  className="border py-2 px-2 rounded-lg "
                  placeholder="Subject Name"
                  onChange={(e) => setSubject(e.target.value)}
                />
                <input
                  type="text"
                  className="border py-2 px-2 rounded-lg"
                  placeholder="Code"
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <textarea
                  name=""
                  id=""
                  cols="45"
                  rows="8"
                  className="border py-2 px-2 rounded-lg"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button
              class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out active:scale-95"
              onClick={hide}
            >
              Cancel
            </button>
            <button
              className="mb-2 md:mb-0 bg-dark-purple border border-dark-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-dark-blue transition duration-300 ease-in-out active:scale-95"
              onClick={() => {
                dispatch(addSubject(subjectData));
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

export default AddSubject;
