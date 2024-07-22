import React, { useRef } from "react";
import BasicLayout from "../components/common/BasicLayout";
import { previewScreenRoute } from "../navigation/Navigation";
import renderQuestionItem from "../utils/renderQuestionItem";
import { useSelector, useDispatch } from "react-redux";
import {
  updateGivenName,
  updateFamilyName,
  updateInsuranceNumber,
  updateBirthDate,
  updateGender,
  updatePatientId,
} from "../store/patientReducer";

export default function RegistrationScreen() {
  const registeredPatient = useSelector((state) => state.patient);
  const language = registeredPatient.communication[0].language.coding[0].code;
  const dispatch = useDispatch();
  const lastNameRef = useRef(null);
  const insuranceNumberRef = useRef(null);
  const dobRef = useRef(null);

  const registrationScreenData = [
    {
      title: "Please provide your personal information: ",
      data: [
        {
          linkId: "p.1",
          text: "First Name",
          value: registeredPatient.name[0].given,
          type: "string",
          onChangeText: (text) => dispatch(updateGivenName(text)),
          onSubmitEditing: () => lastNameRef.current.focus(),
          autoFocus: true,
        },
        {
          linkId: "p.2",
          text: "Last Name",
          value: registeredPatient.name[0].family,
          type: "string",
          ref: lastNameRef,
          onSubmitEditing: () => insuranceNumberRef.current.focus(),
          onChangeText: (text) => dispatch(updateFamilyName(text)),
        },
        {
          linkId: "p.3",
          text: "Insurance Number",
          value: registeredPatient.identifier[0].value,
          type: "integer",
          ref: insuranceNumberRef,
          maxLength: 10,
          onChangeText: (text) => dispatch(updateInsuranceNumber(text)),
        },
        {
          linkId: "p.4",
          text: "Date of Birth",
          value: registeredPatient.birthDate,
          type: "date",
          ref: dobRef,
          onChangeText: (text) => dispatch(updateBirthDate(text)),
          locale: language,
        },
        {
          linkId: "p.5",
          text: "Gender",
          value: registeredPatient.gender,
          type: "choice",
        },
      ],
    },
  ];

  return (
    <BasicLayout
      title={"Registration"}
      sections={registrationScreenData}
      renderItem={renderQuestionItem}
      navigateTo={previewScreenRoute}
    />
  );
}
