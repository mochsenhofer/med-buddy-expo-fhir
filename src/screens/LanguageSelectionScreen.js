import React from "react";
import CenteredLayout from "../components/common/CenteredLayout";
import { registrationScreenRoute } from "../navigation/Navigation";
import renderSelectLanguageButton from "../utils/renderSelectLanguageButton";

export default function LanguageSelectionScreen() {
  const DATA = [
    {
      title: null,
      data: [
        {
          label: "English",
          value: "en",
        },
        {
          label: "Spanish",
          value: "es",
        },
        {
          label: "French",
          value: "fr",
        },
      ],
    },
  ];

  return (
    <CenteredLayout
      title={"Select Language"}
      sections={DATA}
      renderItem={renderSelectLanguageButton}
      navigateTo={registrationScreenRoute}
      numColumns={3}
    />
  );
}
