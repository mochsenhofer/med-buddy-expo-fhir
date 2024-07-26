import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { p } from "../theme/constants";

export default function renderOverviewItem({ item }) {
  return (
    <View style={styles.overviewItemContainer}>
      <Text variant={p}>{item.text}</Text>
      <Text variant={p}>{item.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overviewItemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
  },
});
