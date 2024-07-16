import { createSlice } from "@reduxjs/toolkit";
import { Patient } from "../fhir_resources/Patient";

const initialState = Patient;

export const patientReducer = createSlice({
  name: "patient",
  initialState,
  reducers: {
    updateGivenName: (state, action) => {
      state.name[0].given[0] = action.payload;
    },
    updateFamilyName: (state, action) => {
      state.name[0].family = action.payload;
    },
    updateIdentifier: (state, action) => {
      state.identifier.type.coding.code = action.payload;
    },
    updateDateOfBirth: (state, action) => {
      state.birthDate = action.payload;
    },
    updateGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const {
  updateGivenName,
  updateFamilyName,
  updateIdentifier,
  updateDateOfBirth,
  updateGender,
} = patientReducer.actions;
export default patientReducer.reducer;
