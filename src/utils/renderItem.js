import React from "react";
import { Text } from "react-native-paper";
import { p } from "../theme/constants";

export default function renderItem({ item }) {
  return <Text variant={p}>{item}</Text>;
}
