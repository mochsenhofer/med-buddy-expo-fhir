import React, { useRef } from "react";
import renderQuestionItem from "../utils/renderFunctions/renderQuestionItem";
import BasicScreenLayout from "../components/common/BasicScreenLayout";
import { previewScreenRoute } from "../navigation/MedBuddyStackNavigation";
import {
  updateGivenName,
  updateFamilyName,
  updateBirthDate,
  updateInsuranceNumber,
  updateGender,
} from "../store/patientReducer";
import { useSelector, useDispatch } from "react-redux";

export default function RegistrationScreen() {
  const registeredPatient = useSelector((state) => state.patient);
  const language = registeredPatient.communication[0].language.coding[0].code;
  const dispatch = useDispatch();
  const givenNameRef = useRef();
  const familyNameRef = useRef();
  const birthDateRef = useRef();
  const insuranceNumberRef = useRef();

  const patientInputArray = [
    {
      title: "Welcome!",
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
          ref: givenNameRef,
          onSubmit: () => {
            familyNameRef.current.focus();
          },
          value: registeredPatient.name[0].given[0],
        },
        {
          question: "Last Name",
          placeholder: "What is your last name?",
          type: "string",
          onChangeText: (text) => {
            dispatch(updateFamilyName(text));
          },
          ref: familyNameRef,
          onSubmit: () => {
            insuranceNumberRef.current.focus();
          },
          value: registeredPatient.name[0].family,
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
          ref: insuranceNumberRef,
          value: registeredPatient.identifier[0].value,
        },
        {
          question: "Date of birth",
          placeholder: "What is your date of birth?",
          type: "date",
          onChange: (d) => {
            dispatch(updateBirthDate(d));
          },
          ref: birthDateRef,
          locale: language,
          value: registeredPatient.birthDate,
        },
        {
          question: "Choice",
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
      title={registeredPatient.birthDate}
    />
  );
}
