import React from "react";
import BasicLayout from "../components/common/BasicLayout";
import useRegistrationScreenData from "../hooks/useRegistrationScreenData";
import { previewScreenRoute } from "../navigation/Navigation";
import renderQuestionItem from "../utils/renderQuestionItem";
import { useNavigation } from "@react-navigation/native";

export default function RegistrationScreen() {
  const navigation = useNavigation();
  const { registrationScreenData, text, validateAllFields } =
    useRegistrationScreenData();

  function handleNextButtonPressed() {
    const isValid = validateAllFields();
    if (isValid) {
      navigation.navigate(previewScreenRoute);
    }
  }

  return (
    <BasicLayout
      title={text.title}
      sections={registrationScreenData}
      renderItem={renderQuestionItem}
      onNextButtonPress={handleNextButtonPressed}
      behavior={"padding"}
    />
  );
}
