import React from "react";
import { View, StyleSheet } from "react-native";

export default function Footer() {
  return <View style={styles.footerContainer}></View>;
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
