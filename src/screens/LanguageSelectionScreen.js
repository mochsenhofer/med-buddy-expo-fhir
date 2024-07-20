import React from "react";
import FlatListLayout from "../components/common/FlatListLayout";
import renderSelectLanguageButton from "../utils/renderSelectLanguageButton";
import { useNavigation } from "@react-navigation/native";
import { registrationScreenRoute } from "../navigation/Navigation";

export default function LanguageSelectionScreen() {
  const navigation = useNavigation();
  function selectLanguage(language) {
    console.log(language);
    navigation.navigate(registrationScreenRoute);
  }
  const languageSelectionScreenData = [
    {
      label: "Welcome!",
      description: "For English click here",
      value: "en",
      onPress: (value) => selectLanguage(value),
      icon: require("../assets/images/english.png"),
    },
    {
      label: "Willkommen!",
      description: "Für Deutsch hier klicken",
      value: "de",
      onPress: (value) => selectLanguage(value),
      icon: require("../assets/images/austria.png"),
    },
    {
      label: "Witamy!",
      description: "Kliknij na polski",
      value: "pl",
      onPress: (value) => selectLanguage(value),
      icon: require("../assets/images/polish.png"),
    },
  ];

  return (
    <FlatListLayout
      data={languageSelectionScreenData}
      renderItem={renderSelectLanguageButton}
      navigateTo={registrationScreenRoute}
      numColumns={3}
    />
  );
}
