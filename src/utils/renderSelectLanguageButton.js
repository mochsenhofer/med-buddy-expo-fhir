import React from "react";
import { Text } from "react-native-paper";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { p } from "../theme/constants";

export default function renderSelectLanguageButton({ item }) {
  return (
    <TouchableOpacity
      style={styles.selectLanguageButton}
      onPress={() => item.onPress(item.value)}
    >
      <Image style={styles.icon} source={item.icon} />
      <View style={styles.textContainer}>
        <Text variant={p}>{item.label}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectLanguageButton: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 1000,
    margin: 5,
    width: "31%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 1000,
  },
});
