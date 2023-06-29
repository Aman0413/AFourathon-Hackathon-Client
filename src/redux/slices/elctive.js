import axios from "../../utils/axiosClient";
import { toast } from "react-toastify";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//get all subjects
export const fetchSubjects = createAsyncThunk("fetchSubjects", async () => {
  const res = await axios.get("/electivesubject/all");

  // const res = await toast.promise(await axios.get("/electivesubject/all"), {
  //   pending: "Loading...",
  //   success: "Success",
  //   error: "Error",
  // });
  return res.data;
});

//get single subject
export const fetchSingleSubject = createAsyncThunk(
  "fetchSingleSubject",
  async (id) => {
    const res = await axios.get(`/electivesubject/${id}`);
    return res.data;
  }
);

//update subject
export const updateSubject = createAsyncThunk(
  "updateSubject",
  async (id, subject) => {
    const res = await axios.put(`/electivesubject/update/${id}`, subject);
    return res.data;
  }
);

//delete subject
export const deleteSubject = createAsyncThunk("deleteSubject", async (id) => {
  const res = await axios.delete(`/electivesubject/delete/${id}`);
  console.log(res.data);
  return res.data;
});

const subjectSlice = createSlice({
  name: "subject",
  initialState: {
    data: null,
    subject: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    //delete subject
    builder.addCase(deleteSubject.fulfilled, (state, action) => {
      state.isLoading = false;
      toast.success("Subject deleted successfully", {
        position: "top-center",
      });
    });
    builder.addCase(deleteSubject.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteSubject.rejected, (state, action) => {
      toast.error("Error", action.error.message, {
        position: "top-center",
      });
      state.isLoading = false;
      state.isError = true;
    });
    //update subject
    builder.addCase(updateSubject.fulfilled, (state, action) => {
      state.isLoading = false;
      toast.success("Subject Updated successfully", {
        position: "top-center",
      });
    });
    builder.addCase(updateSubject.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateSubject.rejected, (state, action) => {
      toast.error("Error", action.error.message, {
        position: "top-center",
      });
      state.isLoading = false;
      state.isError = true;
    });

    //get single subject
    builder.addCase(fetchSingleSubject.fulfilled, (state, action) => {
      state.subject = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSingleSubject.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleSubject.rejected, (state, action) => {
      toast.error("Error", action.error.message, {
        position: "top-center",
      });
      state.isLoading = false;
      state.isError = true;
    });

    //get all subjects
    builder.addCase(fetchSubjects.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSubjects.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSubjects.rejected, (state, action) => {
      // toast.error("Error", action.error.message, {
      //   position: "top-center",
      // });
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default subjectSlice.reducer;
