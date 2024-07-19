import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { h2 } from "../theme/constants";
import theme from "../theme/theme";

export default function renderSectionHeader({ section: { title } }) {
  return (
    <Text style={styles.h2} variant={h2}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  h2: {
    marginBottom: 10,
    color: theme.colors.primary,
    textTransform: "uppercase",
  },
});
