import React from "react";
import { Text } from "react-native-paper";
import theme from "../../theme/theme";

export default function renderSectionHeader({ section: { title } }) {
  return (
    <Text
      variant="headlineSmall"
      style={{ color: theme.colors.primary, textTransform: "uppercase" }}
    >
      {title}
    </Text>
  );
}
