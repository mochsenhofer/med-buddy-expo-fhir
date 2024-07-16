import React from "react";
import { StyleSheet, View } from "react-native";

export default function Footer() {
  return <View style={styles.footerContainer}></View>;
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
