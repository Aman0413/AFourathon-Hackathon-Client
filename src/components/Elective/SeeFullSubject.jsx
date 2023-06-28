import React, { useEffect, useState } from "react";
import SubjectCard from "./SubjectCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleSubject } from "../../redux/slices/elctive";

function SeeFullSubject({ show, hide, id }) {
  const dispatch = useDispatch();
  const subject = useSelector((state) => state.subjects.subject?.result);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleSubject(id));
    }
  }, []);
  if (!show) return null;

  return (
    <div>
      <div
        class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          {subject && (
            <SubjectCard
              code={subject.code}
              name={subject.name}
              description={subject.description}
            />
          )}

          <button
            class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 mt-3"
            onClick={hide}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeeFullSubject;
