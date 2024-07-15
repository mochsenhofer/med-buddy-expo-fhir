import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Section() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionText}>Section</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "yellow",
  },
  headerText: {
    color: "white",
    textAlign: "center",
  },
});
