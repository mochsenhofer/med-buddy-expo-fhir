import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import CenteredSection from "./CenteredSection";
import Footer from "./Footer";

export default function CenteredScreenLayout({
  title,
  sections,
  renderItem,
  numColumns,
}) {
  return (
    <View style={styles.container}>
      <Header title={title} />
      <CenteredSection
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
  },
});
