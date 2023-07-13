import React, { useEffect, useState } from "react";
import { LuEye } from "react-icons/lu";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import DeleteStudent from "../components/DeleteStudent";
import { deleteStudent } from "../redux/slices/students";
import { fetchStudents } from "../redux/slices/students";
import { IoMdAdd } from "react-icons/io";
import AddStudents from "../components/AddStudent";
import EditStudents from "../components/EditStudent";
import SeeSingleStudent from "../components/SeeSingleStudent";
import Loader from "../components/Loader";

function Students() {
  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [seeStudent, setSeeStudent] = useState(false);
  const [id, setId] = useState(null);
  const dispatch = useDispatch();

  const showModal = (e) => {
    setId(e.toString());
    setModalVisible(true);
  };
  const showModalAdd = () => {
    setAddModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
    setAddModalVisible(false);
    setUpdateModalVisible(false);
    setSeeStudent(false);
  };

  const showUpdateModal = (id) => {
    setId(id);
    setUpdateModalVisible(true);
  };

  const showSeeStudent = (id) => {
    setId(id);
    setSeeStudent(true);
  };
  //get all students from store
  const students = useSelector((state) => state.students);
  if (students) {
    console.log(students);
  }

  useEffect(() => {
    //get all students dispatch action
    dispatch(fetchStudents());
  }, []);
  return (
    <>
      <div class="w-full px-3 py-3 mt-3">
        {students.isLoading ? <Loader /> : null}
        <div className="flex justify-end">
          <button
            class="mb-2 md:mb-0 bg-dark-purple border border-dark-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-dark-blue flex justify-center items-center gap-1"
            onClick={() => {
              setAddModalVisible(true);
            }}
          >
            <IoMdAdd className="text-2xl " />
            Add New Students
          </button>
        </div>
        <div class="bg-white shadow-md rounded my-6">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">No</th>
                <th class="py-3 px-6 text-left">Name</th>
                <th class="py-3 px-6 text-center">Students Id</th>
                <th class="py-3 px-6 text-center">Email</th>
                <th class="py-3 px-6 text-center">Phone</th>
                <th class="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {students.students &&
                students.students.result.map((stu, index) => {
                  return (
                    <tr
                      class="border-b border-gray-200 hover:bg-gray-100 "
                      key={stu._id}
                    >
                      <td class="py-3 px-6 text-start whitespace-nowrap ">
                        <span class="font-medium">{index + 1}</span>
                      </td>
                      <td class="py-3 px-6 text-start whitespace-nowrap">
                        <span class="font-medium">{stu.name}</span>
                      </td>
                      <td class="py-3 px-6 text-center whitespace-nowrap">
                        <span class="font-medium">{stu.studentId}</span>
                      </td>
                      <td class="py-3 px-6 text-center whitespace-nowrap">
                        <span class="font-medium">{stu.email}</span>
                      </td>
                      <td class="py-3 px-6 text-center whitespace-nowrap">
                        <span class="font-medium">{stu.phoneNumber}</span>
                      </td>

                      <td class="py-3 px-6 text-center">
                        <div class="flex item-center justify-center gap-5">
                          <LuEye
                            className="font-semibold text-xl hover:text-dark-purple hover:font-extrabold transition duration-300 ease-in-out hover:scale-125 active:scale-110"
                            onClick={() => {
                              showSeeStudent(stu._id);
                            }}
                          />
                          <AiOutlineEdit
                            className="font-semibold text-green-700 text-xl hover:text-dark-purple hover:font-extrabold transition duration-300 ease-in-out hover:scale-125 active:scale-110"
                            onClick={() => {
                              showUpdateModal(stu._id);
                            }}
                          />
                          <AiOutlineDelete
                            className="font-semibold text-red-600 text-xl hover:text-dark-purple hover:font-extrabold transition duration-300 ease-in-out hover:scale-125 active:scale-110"
                            onClick={() => {
                              showModal(stu._id);
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {showModal && (
        <DeleteStudent
          show={modalVisible}
          hide={hideModal}
          deleteStudent={deleteStudent}
          id={id}
        />
      )}

      {/* add student modal */}
      {addModalVisible && <AddStudents show={showModalAdd} hide={hideModal} />}
      {/* update student modal */}
      {updateModalVisible && (
        <EditStudents show={showUpdateModal} hide={hideModal} id={id} />
      )}

      {/* see student modal */}
      {seeStudent && (
        <SeeSingleStudent show={showSeeStudent} hide={hideModal} id={id} />
      )}
    </>
  );
}

export default Students;
