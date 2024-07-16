import React from "react";
import { Text } from "react-native-paper";
import { paragraphText } from "../../theme/constants";

export default function renderSectionListItem({ item }) {
  return <Text variant={paragraphText}>{item}</Text>;
}
