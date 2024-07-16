import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
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
      <Text variant="headlineSmall" style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1.25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
