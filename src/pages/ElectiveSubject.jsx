import React, { useEffect, useState } from "react";
import { fetchSubjects } from "../redux/slices/elctive";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { LuEye } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import SeeFullSubject from "../components/Elective/SeeFullSubject";
import UpdateSubject from "../components/Elective/UpdateSubject";
import DeleteSubject from "../components/Elective/DeleteSubject";
import Loader from "../components/Loader";
import AddSubject from "../components/Elective/AddSubject";

function ElectiveSubject() {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const subject = useSelector((state) => state.subjects);
  const [showSeeFullSubject, setShowSeeFullSubject] = useState(false);
  const [showUpdateBox, setShowUpdateBox] = useState(false);
  const [showDeleteBox, setShowDeleteBox] = useState(false);
  const [showAddSubject, setShowAddSubject] = useState(false);

  const hide = () => {
    setShowSeeFullSubject(false);
    setShowUpdateBox(false);
    setShowDeleteBox(false);
    setShowAddSubject(false);
  };

  const showSeeFullSubjectModal = (id) => {
    setId(id);
    setShowSeeFullSubject(true);
  };

  const showUpdateModal = (id) => {
    setId(id);
    setShowUpdateBox(true);
  };

  const showDeleteModal = (id) => {
    setId(id);
    setShowDeleteBox(true);
  };
  const showAddSubjectModal = () => {
    setShowAddSubject(true);
  };

  useEffect(() => {
    dispatch(fetchSubjects());
  }, []);

  return (
    <div class="w-full px-3 py-3 mt-3 ">
      {subject.isLoading ? <Loader /> : null}
      <div className="flex justify-end">
        <button
          class="mb-2 md:mb-0 bg-dark-purple border border-dark-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-dark-blue flex justify-center items-center gap-1"
          onClick={() => showAddSubjectModal(true)}
        >
          <IoMdAdd className="text-2xl " />
          Add New Subject
        </button>
      </div>
      <div class="bg-white shadow-md rounded my-6">
        <table class="min-w-max w-full table-auto">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-left">No</th>
              <th class="py-3 px-6 text-left">Subject</th>
              <th class="py-3 px-6 text-center">Code Id</th>
              <th class="py-3 px-6 text-center">Description</th>
              <th class="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {subject &&
              subject.data?.result.map((item, index) => {
                return (
                  <tr
                    class="border-b border-gray-200 hover:bg-gray-100  "
                    key={item._id}
                  >
                    <td class="py-3 px-6 text-start whitespace-nowrap ">
                      <span class="font-medium">{index + 1}</span>
                    </td>
                    <td class="py-3 px-6 text-start whitespace-nowrap">
                      <span class="font-medium">{item.name}</span>
                    </td>
                    <td class="py-3 px-6 text-center whitespace-nowrap">
                      <span class="font-medium">{item.code}</span>
                    </td>
                    <td class="py-3 px-6 text-center whitespace-nowrap">
                      <span class="font-medium">
                        {item.description.substring(0, 20)}...
                      </span>
                    </td>

                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center gap-5">
                        <LuEye
                          className="font-semibold text-xl hover:text-dark-purple hover:font-extrabold"
                          onClick={() => showSeeFullSubjectModal(item._id)}
                        />
                        <AiOutlineEdit
                          className="font-semibold text-green-700 text-xl hover:text-dark-purple hover:font-extrabold"
                          onClick={() => showUpdateModal(item._id)}
                        />
                        <AiOutlineDelete
                          className="font-semibold text-red-600 text-xl hover:text-dark-purple hover:font-extrabold"
                          onClick={() => showDeleteModal(item._id)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {showSeeFullSubject && (
        <SeeFullSubject show={showSeeFullSubjectModal} hide={hide} id={id} />
      )}
      {showUpdateBox && (
        <UpdateSubject show={showUpdateModal} hide={hide} id={id} />
      )}

      {showDeleteBox && (
        <DeleteSubject show={showDeleteModal} hide={hide} id={id} />
      )}
      {showAddSubject && <AddSubject show={showAddSubjectModal} hide={hide} />}
    </div>
  );
}

export default ElectiveSubject;
