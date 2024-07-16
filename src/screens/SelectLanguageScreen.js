import React from "react";
import CenteredScreenLayout from "../components/common/CenteredScreenLayout";
import renderSelectLanguageButton from "../utils/renderFunctions/renderSelectLanguageButton";

export default function SelectLanguageScreen() {
  const languageButtonProps = [
    {
      title: null,
      data: [
        {
          label: "Willkommen!",
          description: "Für Deutsch hier klicken",
          key: "de",
          image: require("../assets/images/austria.png"),
        },
      ],
    },
    {
      title: null,
      data: [
        {
          label: "Welcome!",
          description: "For English click",
          key: "en",
          image: require("../assets/images/english.png"),
        },
      ],
    },
    {
      title: null,
      data: [
        {
          label: "Witamy",
          description: "Kliknij, aby po polsku",
          key: "pl",
          image: require("../assets/images/polish.png"),
        },
      ],
    },
  ];

  return (
    <>
      <CenteredScreenLayout
        sections={languageButtonProps}
        renderItem={renderSelectLanguageButton}
        numColumns={3}
      />
    </>
  );
}
