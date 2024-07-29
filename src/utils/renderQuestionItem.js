import React from "react";
import { Text } from "react-native-paper";
import { p } from "../theme/constants";
import renderUserInput from "./renderUserInput";
import { StyleSheet } from "react-native";
import SectionErrorMessage from "../components/functional/user_input_components/SectionErrorMessage";

export default function renderQuestionItem({ item }) {
  if (item.type === "error") {
    return <SectionErrorMessage message={item.text} />;
  }

  return (
    <>
      {(item.type === "choice" || item.type === "display") && (
        <Text style={styles.text} variant={p}>
          {item.text}
        </Text>
      )}
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
