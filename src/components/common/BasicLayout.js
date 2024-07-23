import React from "react";
import Header from "./basic_layout_components/Header";
import SectionListComponent from "./basic_layout_components/SectionListComponent";
import FooterNavigation from "./basic_layout_components/FooterNavigation";
import { View, StyleSheet } from "react-native";

export default function BasicLayout({
  title,
  sections,
  renderItem,
  onNextButtonPress,
  onBackButtonPress,
  navigateTo,
}) {
  return (
    <View style={styles.container}>
      <Header title={title} />
      <SectionListComponent sections={sections} renderItem={renderItem} />
      <FooterNavigation
        onNextButtonPress={onNextButtonPress}
        onBackButtonPress={onBackButtonPress}
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
    width: "100%",
  },
});
