import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./patientReducer";

export const store = configureStore({
  reducer: {
    patient: patientReducer,
  },
});
