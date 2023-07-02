import axios from "../../utils/axiosClient";
import { toast } from "react-toastify";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//get all students
export const fetchStudents = createAsyncThunk("fetchStudents", async () => {
  const res = await axios.get("/student/all");
  return res.data;
});

//delete student
export const deleteStudent = createAsyncThunk("deleteStudent", async (id) => {
  const res = await axios.delete(`/student/delete/${id}`);
  return res.data;
});

//add new student
export const addStudent = createAsyncThunk("addStudent", async (student) => {
  const res = await axios.post("/student/add", student);
  return res.data;
});

//update student
export const updateStudent = createAsyncThunk(
  "updateStudent",
  async (id, student) => {
    const res = await axios.put(`/student/update/${id}`, {
      student,
    });
    console.log(res.data);
    return res.data;
  }
);

//get single student
export const fetchSingleStudent = createAsyncThunk(
  "fetchSingleStudent",
  async (id) => {
    const res = await axios.get(`/student/get/${id}`);
    return res.data;
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    data: null,
    singleStudent: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    //update student
    builder.addCase(updateStudent.fulfilled, (state, action) => {
      toast.success("Student Updated successfully", {
        position: "top-center",
      });
      state.isLoading = false;
    });
    builder.addCase(updateStudent.pending, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateStudent.rejected, (state, action) => {
      toast.error("Error ", action.error.message, {
        position: "top-center",
      });
      state.isLoading = false;
      state.isError = true;
    });

    //get single student
    builder.addCase(fetchSingleStudent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleStudent = action.payload;
    });
    builder.addCase(fetchSingleStudent.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleStudent.rejected, (state, action) => {
      toast.error("Error ", action.error.message, {
        position: "top-center",
      });
      state.isLoading = false;
      state.isError = true;
    });

    //add student
    builder.addCase(addStudent.fulfilled, (state, action) => {
      state.isLoading = false;
      toast.success("Student Added successfully", {
        position: "top-center",
      });
    });
    builder.addCase(addStudent.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addStudent.rejected, (state, action) => {
      toast.error("Error ", action.error.message, {
        position: "top-center",
      });
      state.isLoading = false;
      state.isError = true;
    });

    //delete student
    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      state.isLoading = false;
      toast.success("Student Deleted successfully", {
        position: "top-center",
      });
    });
    builder.addCase(deleteStudent.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteStudent.rejected, (state, action) => {
      toast.error("Error ", action.error.message, {
        position: "top-center",
      });
      state.isLoading = false;
      state.isError = true;
    });

    //get all students
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.students = action.payload;
    });
    builder.addCase(fetchStudents.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      toast.error("Error ", action.error.message, {
        position: "top-center",
      });
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default studentsSlice.reducer;
