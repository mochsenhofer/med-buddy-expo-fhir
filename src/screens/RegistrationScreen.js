import React from "react";
import BasicLayout from "../components/common/BasicLayout";
import useRegistrationScreenData from "../hooks/useRegistrationScreenData";
import renderQuestionItem from "../utils/renderQuestionItem";

export default function RegistrationScreen() {
  const { registrationScreenData, validateAllFields, sendPatientData } =
    useRegistrationScreenData();

  async function handleNextButtonPressed() {
    const isValid = validateAllFields();
    if (isValid) {
      sendPatientData();
    }
  }

  return (
    <BasicLayout
      sections={registrationScreenData}
      renderItem={renderQuestionItem}
      onNextButtonPress={handleNextButtonPressed}
      behavior={"padding"}
    />
  );
}
