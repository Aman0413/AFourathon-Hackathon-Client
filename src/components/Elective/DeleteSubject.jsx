import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { deleteSubject } from "../../redux/slices/elctive";
import { useDispatch } from "react-redux";

function DeleteSubject({ show, hide, id }) {
  const dispatch = useDispatch();

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
            <div className="flex items-center justify-center">
              <AiFillDelete className="text-red-600 text-6xl text-center" />
            </div>

            <h2 className="text-xl font-bold py-4">Are you sure?</h2>
            <p className="text-sm text-gray-500 px-8">
              {" "}
              Do you really want to delete subject?
            </p>
          </div>

          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button
              className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              onClick={hide}
            >
              Cancel
            </button>
            <button
              className="mb-2 md:mb-0 bg-dark-purple border border-dark-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-dark-blue"
              onClick={() => dispatch(deleteSubject(id))}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteSubject;
