import { createSlice } from "@reduxjs/toolkit";
import { QuestionnaireResponse } from "../fhir_resources/QuestionnaireResponse";

const initialState = QuestionnaireResponse || {};

export const questionnaireResponseReducer = createSlice({
  name: "questionnaireResponse",
  initialState,
  reducers: {
    updateAuthor: (state, action) => {
      state.author.reference = action.payload;
    },
    updateQuestionnaireId: (state, action) => {
      state.questionnaire = action.payload;
    },
    updateQuestionnaireResponseStatus: (state, action) => {
      state.status = action.payload;
    },
    updatePatient: (state, action) => {
      state.contained[0] = action.payload;
    },
    updateQuestionnaire: (state, action) => {
      state.contained[1] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateAuthor,
  updateQuestionnaireId,
  updateQuestionnaireResponseStatus,
  updatePatient,
  updateQuestionnaire,
} = questionnaireResponseReducer.actions;

export default questionnaireResponseReducer.reducer;
