import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export default function Header({ title }) {
  const theme = useTheme();
  return (
    <View
      style={[
        { backgroundColor: theme.colors.primary },
        styles.headerContainer,
      ]}
    >
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    color: "white",
    textAlign: "center",
  },
});
