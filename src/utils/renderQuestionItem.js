import React from "react";
import { Text } from "react-native-paper";
import { p } from "../theme/constants";
import renderUserInput from "./renderUserInput";
import { StyleSheet } from "react-native";

export default function renderQuestionItem({ item }) {
  return (
    <>
      {item.type === "choice" || item.type === "display" ? (
        <Text style={styles.text} variant={p}>
          {item.text}
        </Text>
      ) : null}

      {renderUserInput(item)}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 5,
    fontSize: 20,
  },
});
