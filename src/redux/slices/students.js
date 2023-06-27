import axios from "../../utils/axiosClient";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//action
export const fetchStudents = createAsyncThunk("fetchStudents", async () => {
  const res = await axios.get("/student/all");
  return res.data;
});

export const deleteStudent = createAsyncThunk("deleteStudent", async (id) => {
  const res = await axios.delete(`/student/delete/${id}`);
  return res.data;
});

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    //delete student
    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteStudent.pending, (state, action) => {
      state.isLoading = true;
      window.location.reload();
    });
    builder.addCase(deleteStudent.rejected, (state, action) => {
      console.log("Error", action.error.message);
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
      console.log("Error", action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default studentsSlice.reducer;
