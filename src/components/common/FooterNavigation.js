import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function FooterNavigation({
  nextButtonPressed,
  backButtonPressed,
  navigateTo,
  page,
}) {
  const navigation = useNavigation();
  const handleNextButtonPress = () => {
    if (nextButtonPressed) {
      primaryButtonPressed();
    } else {
      navigation.navigate(navigateTo);
    }
  };

  const handleBackButtonPress = () => {
    if (backButtonPressed) {
      backButtonPressed();
    } else {
      navigation.goBack();
    }
  };

  const theme = useTheme();
  return (
    <View style={styles.footerContainer}>
      <Button
        icon="chevron-left"
        mode="outlined"
        onPress={() => handleBackButtonPress()}
        labelStyle={[theme.colors.primary, styles.navigationButtonText]}
        style={[styles.navigationButton, styles.backButtonPosition]}
      >
        Back
      </Button>
      <Text variant="titleSmall" style={styles.page}>
        {page}
      </Text>
      <Button
        icon="chevron-right"
        mode="contained"
        onPress={() => handleNextButtonPress()}
        style={[styles.navigationButton, styles.nextButtonPosition]}
        labelStyle={styles.navigationButtonText}
      >
        Next
      </Button>
    </View>
  );
}
const edgeComponentMargins = 15;

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    flexDirection: "row",
  },
  navigationButtonText: {
    textAlign: "center",
    flexDirection: "reverse-row",
    fontSize: 20,
  },
  navigationButton: {
    minWidth: 200,
    minHeight: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1000,
    borderWidth: 2,
    position: "absolute",
    bottom: edgeComponentMargins,
  },
  nextButtonPosition: {
    right: edgeComponentMargins,
  },
  backButtonPosition: {
    left: edgeComponentMargins,
  },
  page: {
    bottom: edgeComponentMargins,
  },
});
