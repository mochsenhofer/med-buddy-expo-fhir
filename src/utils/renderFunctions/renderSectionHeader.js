import React from "react";
import { Text } from "react-native-paper";
import theme from "../../theme/theme";
import { sectionHeader } from "../../theme/constants";

export default function renderSectionHeader({ section: { title } }) {
  return (
    <Text
      variant={sectionHeader}
      style={{
        color: theme.colors.primary,
        textTransform: "uppercase",
        marginBottom: 10,
      }}
    >
      {title}
    </Text>
  );
}
