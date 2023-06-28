import axios from "../../utils/axiosClient";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//get all subjects
export const fetchSubjects = createAsyncThunk("fetchSubjects", async () => {
  const res = await axios.get("/electivesubject/all");
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

const subjectSlice = createSlice({
  name: "subject",
  initialState: {
    data: null,
    subject: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    //get single subject
    builder.addCase(fetchSingleSubject.fulfilled, (state, action) => {
      state.subject = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSingleSubject.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleSubject.rejected, (state, action) => {
      console.log("Error", action.error.message);
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
      console.log("Error", action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default subjectSlice.reducer;
