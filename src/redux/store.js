import { configureStore } from "@reduxjs/toolkit";
import subjectsReducer from "./slices/elctive";
import studentsReducer from "./slices/students";

export default configureStore({
  reducer: {
    students: studentsReducer,
    subjects: subjectsReducer,
  },
});
