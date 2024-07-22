import { createSlice } from "@reduxjs/toolkit";
import { Patient } from "../fhir_resources/Patient";

const initialState = Patient || {};

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
    updateInsuranceNumber: (state, action) => {
      state.identifier[0].value = action.payload;
    },
    updateBirthDate: (state, action) => {
      state.birthDate = action.payload;
    },
    updateGender: (state, action) => {
      state.gender = action.payload;
    },
    updateLanguage: (state, action) => {
      state.communication[0].language.coding[0].code = action.payload;
    },
    updatePatientId: (state, action) => {
      state.id = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateGivenName,
  updateFamilyName,
  updateInsuranceNumber,
  updateBirthDate,
  updateGender,
  updateLanguage,
  updatePatientId,
} = patientReducer.actions;

export default patientReducer.reducer;
