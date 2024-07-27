import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateGivenName,
  updateFamilyName,
  updateInsuranceNumber,
  updateBirthDate,
  updateGender,
} from "../store/patientReducer";
import useLanguage from "./useLanguage";
import { texts } from "../languages/texts";

const useRegistrationScreenData = () => {
  const registeredPatient = useSelector((state) => state.patient);
  const language = useLanguage();
  const dispatch = useDispatch();
  const lastNameRef = useRef(null);
  const insuranceNumberRef = useRef(null);
  const dobRef = useRef(null);
  const text = texts.en.registrationScreen;

  const [formErrors, setFormErrors] = useState({
    givenNameError: false,
    familyNameError: false,
    insuranceNumberError: false,
    birthDateError: false,
    genderError: false,
  });

  function validateField(field) {
    const errors = { ...formErrors };
    switch (field) {
      case "givenName":
        errors.givenNameError = registeredPatient.name[0].given[0] === "";
        break;
      case "familyName":
        errors.familyNameError = registeredPatient.name[0].family === "";
        break;
      case "insuranceNumber":
        errors.insuranceNumberError =
          registeredPatient.identifier[0].value.length !== 10;

        break;
      case "birthDate":
        errors.birthDateError = registeredPatient.birthDate === "";
        break;
      case "gender":
        errors.genderError = registeredPatient.gender === "";
        break;
      default:
        break;
    }
    setFormErrors(errors);
    return !Object.values(errors).includes(true); // Return false if any errors are true
  }

  function validateAllFields() {
    const fields = [
      "givenName",
      "familyName",
      "insuranceNumber",
      "birthDate",
      "gender",
    ];
    const results = fields.map((field) => validateField(field));
    return results.every((result) => result);
  }

  const registrationScreenData = [
    {
      title: text.description,
      data: [
        {
          linkId: "p.1",
          text: text["p.1"],
          value: registeredPatient.name[0].given[0],
          type: "string",
          onChangeText: (text) => {
            dispatch(updateGivenName(text));
            setFormErrors({ ...formErrors, givenNameError: false });
          },
          onSubmitEditing: () => lastNameRef.current.focus(),
          onEndEditing: () => validateField("givenName"),
          autoFocus: true,
          error: formErrors.givenNameError,
          errorMessage: text.error["p.1"],
        },
        {
          linkId: "p.2",
          text: text["p.2"],
          value: registeredPatient.name[0].family,
          type: "string",
          ref: lastNameRef,
          onSubmitEditing: () => insuranceNumberRef.current.focus(),
          onChangeText: (text) => {
            dispatch(updateFamilyName(text));
            setFormErrors({ ...formErrors, familyNameError: false });
          },
          onEndEditing: () => validateField("familyName"),
          error: formErrors.familyNameError,
          errorMessage: text.error["p.2"],
        },
        {
          linkId: "p.3",
          text: text["p.3"],
          value: registeredPatient.identifier[0].value,
          type: "integer",
          ref: insuranceNumberRef,
          maxLength: 10,
          onChangeText: (text) => {
            dispatch(updateInsuranceNumber(text));
            setFormErrors({ ...formErrors, insuranceNumberError: false });
          },
          onEndEditing: () => validateField("insuranceNumber"),
          error: formErrors.insuranceNumberError,
          errorMessage: text.error["p.3"],
        },
        {
          linkId: "p.4",
          text: text["p.4"],
          value: registeredPatient.birthDate,
          type: "date",
          ref: dobRef,
          onChangeText: (text) => {
            dispatch(updateBirthDate(text));
            setFormErrors({ ...formErrors, birthDateError: false });
          },
          onEndEditing: () => validateField("birthDate"),
          locale: language,
          error: formErrors.birthDateError,
          errorMessage: text.error["p.4"],
        },
        {
          linkId: "p.5",
          text: text["p.5"],
          value: registeredPatient.gender,
          type: "choice",
          onSelect: (value) => {
            dispatch(updateGender(value));
            setFormErrors({ ...formErrors, genderError: false });
          },
          answerOption: [
            { valueCoding: { code: "male", display: text.male } },
            { valueCoding: { code: "female", display: text.female } },
            { valueCoding: { code: "other", display: text.other } },
          ],
          error: formErrors.genderError,
          errorMessage: text.error["p.5"],
        },
      ],
    },
  ];

  return { registrationScreenData, text, validateAllFields };
};

export default useRegistrationScreenData;
