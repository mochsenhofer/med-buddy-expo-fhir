import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { marginScreenBorderComponents } from "../../../theme/constants";
import { useNavigation } from "@react-navigation/native";
import theme from "../../../theme/theme";

export default function FooterNavigation({
  handleNextButtonPress,
  handleBackButtonPress,
  navigateTo,
}) {
  const navigation = useNavigation();

  function onBackButtonPress() {
    if (handleBackButtonPress) {
      handleBackButtonPress();
    } else {
      navigation.goBack();
    }
  }

  function onNextButtonPress() {
    if (handleNextButtonPress) {
      handleNextButtonPress();
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
        onPress={onBackButtonPress}
      >
        BACK
      </Button>
      <Button
        icon="arrow-right"
        mode="contained"
        style={[styles.navigationButton, styles.nextButton]}
        contentStyle={{ flexDirection: "row-reverse" }}
        labelStyle={styles.navigationButtonText}
        onPress={onNextButtonPress}
      >
        NEXT
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    textTransform: "uppercase",
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
