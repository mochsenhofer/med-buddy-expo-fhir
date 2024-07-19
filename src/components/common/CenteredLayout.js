import React from "react";
import Header from "./basic_layout_components/Header";
import CenteredSectionListComponent from "./centered_layout_components/CenteredSectionListComponent";
import Footer from "./centered_layout_components/Footer";
import { View, StyleSheet } from "react-native";

export default function CenteredLayout({
  title,
  sections,
  renderItem,
  numColumns,
}) {
  return (
    <View style={styles.container}>
      <Header title={title} />
      <CenteredSectionListComponent
        sections={sections}
        renderItem={renderItem}
        numColumns={numColumns}
      />
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
