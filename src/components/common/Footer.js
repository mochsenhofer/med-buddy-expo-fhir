import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "red",
  },
});
