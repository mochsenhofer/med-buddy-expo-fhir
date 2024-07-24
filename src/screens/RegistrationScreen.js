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
import { texts } from "../languages/texts";

export default function RegistrationScreen() {
  const registeredPatient = useSelector((state) => state.patient);
  const language = registeredPatient.communication[0].language.coding[0].code;
  const dispatch = useDispatch();
  const lastNameRef = useRef(null);
  const insuranceNumberRef = useRef(null);
  const dobRef = useRef(null);
  const text = texts.en.registrationScreen;

  const registrationScreenData = [
    {
      title: text.description,
      data: [
        {
          linkId: "p.1",
          text: text["p.1"],
          value: registeredPatient.name[0].given[0],
          type: "string",
          onChangeText: (text) => dispatch(updateGivenName(text)),
          onSubmitEditing: () => lastNameRef.current.focus(),
          autoFocus: true,
        },
        {
          linkId: "p.2",
          text: text["p.2"],
          value: registeredPatient.name[0].family,
          type: "string",
          ref: lastNameRef,
          onSubmitEditing: () => insuranceNumberRef.current.focus(),
          onChangeText: (text) => dispatch(updateFamilyName(text)),
        },
        {
          linkId: "p.3",
          text: text["p.3"],
          value: registeredPatient.identifier[0].value,
          type: "integer",
          ref: insuranceNumberRef,
          maxLength: 10,
          onChangeText: (text) => dispatch(updateInsuranceNumber(text)),
        },
        {
          linkId: "p.4",
          text: text["p.4"],
          value: registeredPatient.birthDate,
          type: "date",
          ref: dobRef,
          onChangeText: (text) => dispatch(updateBirthDate(text)),
          locale: language,
        },
        {
          linkId: "p.5",
          text: text["p.5"],
          value: registeredPatient.gender,
          type: "choice",
          onSelect: (value) => dispatch(updateGender(value)),
          answerOption: [
            { valueCoding: { code: "male", display: text.male } },
            { valueCoding: { code: "female", display: text.female } },
            { valueCoding: { code: "other", display: text.other } },
          ],
        },
      ],
    },
  ];

  return (
    <BasicLayout
      title={text.title}
      sections={registrationScreenData}
      renderItem={renderQuestionItem}
      navigateTo={previewScreenRoute}
    />
  );
}
