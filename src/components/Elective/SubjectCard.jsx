import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteStudentFromSubject } from "../../redux/slices/elctive";

function SubjectCard({ subject }) {
  const dispatch = useDispatch();
  const handleDelete = (id, subjectId) => {
    dispatch(deleteStudentFromSubject({ id, subjectId }));
  };

  return (
    <div className="SubjectCard max-w-md py-4 px-8 bg-white rounded-lg ">
      <div className="flex flex-col gap-3">
        <h2 class="text-gray-800 text-3xl font-semibold">{subject.name}</h2>
        <div className="flex gap-4 text-xSl">
          <p>Code</p>
          <p className="font-semibold">{subject.code}</p>
        </div>
        <p className="mt-2 text-gray-600">{subject.description}</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="mt-5 font-semibold text-base">
          Students who taken this Subject below
        </div>

        {subject && subject.students.length > 0 ? (
          subject.students.map((stu) => {
            return (
              <div className="flex justify-between items-center bg-[#e5e7eb] py-2 px-2 rounded-md">
                <p className="font-semibold">{stu.name}</p>
                <p>{stu.studentId}</p>
                <button
                  className="bg-dark-purple text-white rounded-full w-10 h-10 flex justify-center items-center"
                  onClick={() => {
                    handleDelete(stu._id, subject._id);
                  }}
                >
                  <AiOutlineDelete className="text-xl" />
                </button>
              </div>
            );
          })
        ) : (
          <div className="flex justify-between items-center bg-[#e5e7eb] py-2 px-2 rounded-md ">
            There are no students who taken this subject.
          </div>
        )}
      </div>
    </div>
  );
}

export default SubjectCard;
