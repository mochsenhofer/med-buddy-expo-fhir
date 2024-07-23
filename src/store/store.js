import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./patientReducer";
import questionnaireResponseReducer from "./questionnaireResponseReducer";

export const store = configureStore({
  reducer: {
    patient: patientReducer,
    questionnaireResponse: questionnaireResponseReducer,
  },
});
