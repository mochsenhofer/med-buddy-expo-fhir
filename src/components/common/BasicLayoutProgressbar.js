import React from "react";
import HeaderWithProgressBar from "./basic_layout_components/HeaderWithProgressBar";
import SectionListComponent from "./basic_layout_components/SectionListComponent";
import FooterNavigation from "./basic_layout_components/FooterNavigation";
import { View, StyleSheet } from "react-native";

export default function BasicLayoutProgressBar({
  title,
  sections,
  renderItem,
  onNextButtonPress,
  onBackButtonPress,
  navigateTo,
  currentStep,
  page,
}) {
  return (
    <View style={styles.container}>
      <HeaderWithProgressBar title={title} currentStep={currentStep} />
      <SectionListComponent sections={sections} renderItem={renderItem} />
      <FooterNavigation
        onNextButtonPress={onNextButtonPress}
        onBackButtonPress={onBackButtonPress}
        navigateTo={navigateTo}
        page={page}
      />
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
});
