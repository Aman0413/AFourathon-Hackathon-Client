import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./slices/students";

export default configureStore({
  reducer: {
    students: studentsReducer,
  },
});
