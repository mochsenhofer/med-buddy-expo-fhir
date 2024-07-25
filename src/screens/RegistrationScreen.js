import React from "react";
import BasicLayout from "../components/common/BasicLayout";
import useRegistrationScreenData from "../hooks/useRegistrationScreenData";
import { previewScreenRoute } from "../navigation/Navigation";
import renderQuestionItem from "../utils/renderQuestionItem";

export default function RegistrationScreen() {
  const { registrationScreenData, text } = useRegistrationScreenData();

  return (
    <BasicLayout
      title={text.title}
      sections={registrationScreenData}
      renderItem={renderQuestionItem}
      navigateTo={previewScreenRoute}
    />
  );
}
