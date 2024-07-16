import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import Section from "./Section";
import FooterNavigation from "./FooterNavigation";

export default function BasicScreenLayout({
  title,
  sections,
  renderItem,
  backButtonPressed,
  nextButtonPressed,
  navigateTo,
}) {
  return (
    <View style={styles.container}>
      <Header title={title} />
      <Section sections={sections} renderItem={renderItem} />
      <FooterNavigation
        backButtonPressed={backButtonPressed}
        nextButtonPressed={nextButtonPressed}
        navigateTo={navigateTo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
