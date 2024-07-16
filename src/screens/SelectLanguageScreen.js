import React from "react";
import CenteredScreenLayout from "../components/common/CenteredScreenLayout";
import renderSelectLanguageButton from "../utils/renderFunctions/renderSelectLanguageButton";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { registrationScreenRoute } from "../navigation/MedBuddyStackNavigation";

export default function SelectLanguageScreen() {
  const navigation = useNavigation();
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
        title={"Select Language"}
        sections={languageButtonProps}
        renderItem={renderSelectLanguageButton}
        numColumns={3}
      />
    </>
  );
}
