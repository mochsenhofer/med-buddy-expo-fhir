import React from "react";
import renderQuestionItem from "../utils/renderFunctions/renderQuestionItem";
import BasicScreenLayout from "../components/common/BasicScreenLayout";
import { previewScreenRoute } from "../navigation/MedBuddyStackNavigation";
import {
  updateGivenName,
  updateFamilyName,
  updateDateOfBirth,
  updateInsuranceNumber,
  updateGender,
} from "../store/patientReducer";
import { useDispatch } from "react-redux";

export default function RegistrationScreen() {
  const dispatch = useDispatch();
  const patientInputArray = [
    {
      title: "Registration Screen",
      data: [
        {
          question: "Please answer the following questions: ",
          type: "display",
        },
        {
          question: "First Name",
          placeholder: "What is your first name?",
          type: "string",
          onChangeText: (text) => {
            dispatch(updateGivenName(text));
          },
          autofocus: true,
        },
        {
          question: "Last Name",
          placeholder: "What is your last name?",
          type: "string",
          onChangeText: (text) => {
            dispatch(updateFamilyName(text));
          },
        },
        {
          question: "Date of birth",
          placeholder: "What is your date of birth?",
          type: "string",
          onChangeText: (text) => {
            dispatch(updateDateOfBirth(text));
          },
        },
        {
          question: "Insurance number",
          placeholder: "What is your insurance number?",
          type: "string",
          onChangeText: (text) => {
            dispatch(updateInsuranceNumber(text));
          },
          maxLength: 10,
          keyboardType: "numeric",
        },
        {
          question: "What is your gender?",
          type: "choice",
        },
      ],
    },
  ];
  return (
    <BasicScreenLayout
      sections={patientInputArray}
      renderItem={renderQuestionItem}
      navigateTo={previewScreenRoute}
    />
  );
}
