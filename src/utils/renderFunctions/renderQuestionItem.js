import React from "react";
import { Text } from "react-native-paper";
import renderUserInput from "./renderUserInput";
import { paragraphText } from "../../theme/constants";

export default function renderQuestionItem({ item }) {
  return (
    <>
      {item.type !== "choice" && item.type !== "display" ? null : (
        <Text variant={paragraphText}>{item.question}</Text>
      )}
      {renderUserInput({ item })}
    </>
  );
}
