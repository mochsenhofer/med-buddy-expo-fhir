import React from "react";
import { Text } from "react-native-paper";
import { p } from "../theme/constants";
import renderQuestionnaireUserInput from "./renderQuestionnaireUserInput";
import { StyleSheet } from "react-native";

export default function renderQuestionnaireItem({ item, onSelect }) {
  return (
    <>
      {item.type === "choice" || item.type === "display" ? (
        <Text style={styles.text} variant={p}>
          {item.text}
        </Text>
      ) : null}

      {renderQuestionnaireUserInput(item, onSelect)}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 5,

    fontSize: 20,
  },
});
