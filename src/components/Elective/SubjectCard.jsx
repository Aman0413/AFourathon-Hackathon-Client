import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function SubjectCard({ name, code, description }) {
  return (
    <div class="SubjectCard max-w-md py-4 px-8 bg-white rounded-lg ">
      <div className="flex flex-col gap-3">
        <h2 class="text-gray-800 text-3xl font-semibold">{name}</h2>
        <div className="flex gap-4 text-xSl">
          <p>Code</p>
          <p className="font-semibold">{code}</p>
        </div>
        <p class="mt-2 text-gray-600">{description}</p>
      </div>
      <div class="flex justify-end mt-4 gap-4">
        <button className="bg-dark-purple text-white rounded-full w-10 h-10 flex justify-center items-center">
          <AiOutlineEdit className="text-xl" />
        </button>
        <button className="bg-dark-purple text-white rounded-full w-10 h-10 flex justify-center items-center">
          <AiOutlineDelete className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default SubjectCard;
