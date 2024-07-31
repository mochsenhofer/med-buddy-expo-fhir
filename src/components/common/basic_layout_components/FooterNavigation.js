import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { marginScreenBorderComponents } from "../../../theme/constants";
import { useNavigation } from "@react-navigation/native";
import useLanguage from "../../../hooks/useLanguage";
import theme from "../../../theme/theme";
import { texts } from "../../../languages/texts";

export default function FooterNavigation({
  onNextButtonPress,
  onBackButtonPress,
  navigateTo,
  page,
}) {
  const navigation = useNavigation();
  const language = useLanguage();
  const text = texts[language].navigationButtons;

  function handleBackButtonPressed() {
    if (onBackButtonPress) {
      onBackButtonPress();
    } else {
      navigation.goBack();
    }
  }

  function handleNextButtonPressed() {
    if (onNextButtonPress) {
      onNextButtonPress();
    } else {
      navigation.navigate(navigateTo);
    }
  }

  return (
    <View style={styles.container}>
      <Button
        icon="arrow-left"
        mode="outlined"
        style={[styles.navigationButton, styles.backButton]}
        labelStyle={styles.navigationButtonText}
        onPress={handleBackButtonPressed}
      >
        {text.back}
      </Button>
      <Text>{page}</Text>
      <Button
        icon="arrow-right"
        mode="contained"
        style={[styles.navigationButton, styles.nextButton]}
        contentStyle={{ flexDirection: "row-reverse" }}
        labelStyle={styles.navigationButtonText}
        onPress={handleNextButtonPressed}
      >
        {text.next}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  navigationButton: {
    borderRadius: 1000,
    minWidth: 200,
    minHeight: 75,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  navigationButtonText: {
    fontSize: 20,
  },
  backButton: {
    position: "absolute",
    bottom: marginScreenBorderComponents,
    left: marginScreenBorderComponents,
    borderColor: theme.colors.primary,
  },
  nextButton: {
    position: "absolute",
    bottom: marginScreenBorderComponents,
    right: marginScreenBorderComponents,
  },
});
