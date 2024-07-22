import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./basic_layout_components/Header";
import Footer from "./basic_layout_components/Footer";
import SectionListComponent from "./basic_layout_components/SectionListComponent";

export default function BasicLayoutNoFooterNavigation({
  title,
  sections,
  renderItem,
}) {
  return (
    <View style={styles.container}>
      <Header title={title} />
      <SectionListComponent sections={sections} renderItem={renderItem} />
      <Footer />
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
