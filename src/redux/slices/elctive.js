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
export const updateSubject = createAsyncThunk("updateSubject", async (data) => {
  const res = await axios.put(`/electivesubject/update/${data.id}`, {
    name: data.subject,
    code: data.code,
    description: data.description,
  });

  console.log(res.data);
  return res.data;
});

//delete subject
export const deleteSubject = createAsyncThunk("deleteSubject", async (id) => {
  const res = await axios.delete(`/electivesubject/delete/${id}`);
  console.log(res.data);
  return res.data;
});

//add subject
export const addSubject = createAsyncThunk("addSubject", async (subject) => {
  const res = await axios.post("/electivesubject/add", subject);
  return res.data;
});

//delete student from subject
export const deleteStudentFromSubject = createAsyncThunk(
  "deleteStudentFromSubject",
  async (data) => {
    const res = await axios.delete(
      `/electivesubject/deleteStudent/${data.id}`,
      {
        data,
      }
    );

    return res.data;
  }
);

//add elective subject to student
export const addElectiveSubjectToStudent = createAsyncThunk(
  "addElectiveSubjectToStudent",
  async (data) => {
    console.log(data);
    const res = await axios.post(`/student/addElectiveSub/${data.id}`, data);

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
    //add elective subject to student
    builder.addCase(addElectiveSubjectToStudent.fulfilled, (state, action) => {
      state.isLoading = false;
      toast.success("Added Successfully", {
        position: "top-center",
      });
    });
    builder.addCase(addElectiveSubjectToStudent.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addElectiveSubjectToStudent.rejected, (state, action) => {
      toast.error(action.error.message, {
        position: "top-center",
      });
      state.isLoading = false;
      state.isError = true;
    });
    //delete student from subject
    builder.addCase(deleteStudentFromSubject.fulfilled, (state, action) => {
      state.isLoading = false;
      toast.success("Deleted Successfully", {
        position: "top-center",
      });
    });
    builder.addCase(deleteStudentFromSubject.pending, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteStudentFromSubject.rejected, (state, action) => {
      toast.error(action.error.message, {
        position: "top-center",
      });
      state.isLoading = false;
      state.isError = true;
    });

    //add subject
    builder.addCase(addSubject.fulfilled, (state, action) => {
      state.isLoading = false;
      toast.success("Subject added successfully", {
        position: "top-center",
      });
    });
    builder.addCase(addSubject.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addSubject.rejected, (state, action) => {
      toast.error(action.error.message, {
        position: "top-center",
      });
      state.isLoading = false;
      state.isError = true;
    });

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
      toast.error(action.error.message, {
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
      toast.error(action.error.message, {
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
      toast.error(action.error.message, {
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
      toast.error(action.error.message, {
        position: "top-center",
      });
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default subjectSlice.reducer;
