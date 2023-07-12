import React, { useEffect, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import axios from "../utils/axiosClient";
import { AiOutlineDelete } from "react-icons/ai";
import { fetchSubjects } from "../redux/slices/elctive";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudentFromSubject } from "../redux/slices/elctive";
import { addElectiveSubjectToStudent } from "../redux/slices/elctive";

function SeeSingleStudent({ show, hide, id }) {
  const [student, setStudent] = useState(null);
  const [firstSubject, setFirstSubject] = useState("");
  const [secondSubject, setSecondSubject] = useState("");
  const dispatch = useDispatch();
  const allSubject = useSelector((state) => state.subjects.data?.result);

  const getStudent = async (id) => {
    try {
      const res = await axios.get(`student/get/${id}`);
      setStudent(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (id, firstSubjectId, secondSubjectId) => {
    dispatch(
      addElectiveSubjectToStudent({ id, firstSubjectId, secondSubjectId })
    );
  };

  const changeHandlerFirst = (e) => {
    setFirstSubject(e.target.value);
  };
  const changeHandlerSecond = (e) => {
    setSecondSubject(e.target.value);
  };

  const handleDelete = (id, subjectId) => {
    dispatch(deleteStudentFromSubject({ id, subjectId }));
  };

  useEffect(() => {
    getStudent(id);
    dispatch(fetchSubjects());
  }, [allSubject]);

  if (!show) return null;
  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center flex flex-col items-center ">
            <h2 className="text-xl font-bold py-4 mb-3">Student Detail</h2>
            <BiSolidUser className="text-6xl" />
          </div>

          <div className="flex flex-col gap-3 ">
            <div className="flex justify-evenly">
              <div className="flex gap-2 bg-[#e4e7eb] py-2 w-48 justify-center items-center rounded-md">
                <span>{student?.name}</span>
              </div>
              <div className="flex gap-2 ">
                <div className="flex gap-2 bg-[#e4e7eb] py-2 w-48 justify-center items-center rounded-md">
                  <span>{student?.studentId}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly">
              <div className="flex gap-2 bg-[#e4e7eb] py-2 w-48 justify-center items-center rounded-md">
                <span>{student?.email}</span>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-2 bg-[#e4e7eb] py-2 w-48 justify-center items-center rounded-md">
                  <span>{student?.phoneNumber}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col ">
              <div className="bg-[#e4e7eb] w-[80%]  py-2 rounded-md flex justify-center items-center ">
                <span>Elective Subjects</span>
              </div>
            </div>
          </div>

          {student && student.electiveSubject.length > 0 ? (
            student.electiveSubject.map((stu) => {
              return (
                <div
                  className="flex justify-between items-center bg-[#e5e7eb] py-2 px-2 rounded-md my-4"
                  key={stu._id}
                >
                  <p className="font-semibold">{stu.name}</p>
                  <p>{stu.code}</p>
                  <button
                    className="bg-dark-purple text-white rounded-full w-10 h-10 flex justify-center items-center transition duration-300 ease-in-out active:scale-95"
                    onClick={() => {
                      handleDelete(id, stu._id);
                    }}
                  >
                    <AiOutlineDelete className="text-xl" />
                  </button>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center text-center items-center bg-[#e5e7eb] py-4 px-2 rounded-md my-4">
              <span>There are no subjects taken by student.</span>
            </div>
          )}

          <form className="my-4">
            <div className="  flex flex-col justify-center items-center gap-3">
              <div>
                <select
                  id="first"
                  value={firstSubject}
                  onChange={changeHandlerFirst}
                  className="py-3 px-4 border border-gray-500 rounded-lg font-semibold text-[#4a5568]"
                >
                  <option value="">Select First Subject</option>
                  {allSubject?.map((subject) => {
                    return (
                      <option value={subject._id} key={subject._id}>
                        {subject.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <select
                  id="second"
                  value={secondSubject}
                  onChange={changeHandlerSecond}
                  className="py-3 px-4 border border-gray-500 rounded-lg font-semibold text-[#4a5568]"
                >
                  <option value="">Select Second Subject</option>
                  {allSubject?.map((subject) => {
                    return (
                      <option value={subject._id} key={subject._id}>
                        {subject.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </form>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button
              className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out active:scale-95"
              onClick={hide}
            >
              Cancel
            </button>
            <button
              className="mb-2 md:mb-0 bg-dark-purple border border-dark-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-dark-blue transition duration-300 ease-in-out active:scale-95"
              onClick={() => {
                handleSubmit(id, firstSubject, secondSubject);
              }}
            >
              Save
            </button>
          </div>
        </div>
        <div className=" text-center text-sm">
          You can only select two subjects for a student.
        </div>
      </div>
    </div>
  );
}

export default SeeSingleStudent;
