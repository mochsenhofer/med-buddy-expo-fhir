import React from "react";
import { Text } from "react-native-paper";
import { p } from "../theme/constants";
import renderUserInput from "./renderUserInput";
import { userInputStyles } from "../components/functional/user_input_components/TextInputComponent";

export default function renderQuestionItem({ item }) {
  return (
    <>
      {item.type === "choice" || item.type === "display" ? (
        <Text variant={p} style={userInputStyles.textInput}>
          {item.text}
        </Text>
      ) : null}

      {renderUserInput(item)}
    </>
  );
}
