import React from "react";
import { Text } from "react-native-paper";
import TextInputComponent from "../components/functional/user_input_components/TextInputComponent";
import DateInputComponent from "../components/functional/user_input_components/DateInputComponent";
import RadioButtonsComponent from "../components/functional/user_input_components/RadioButtonsComponent";

export default function renderUserInput(item) {
  switch (item.type) {
    case "string":
      return <TextInputComponent item={item} />;
    case "date":
      return <DateInputComponent item={item} />;
    case "integer":
      return <TextInputComponent item={item} />;
    case "choice":
      return (
        <RadioButtonsComponent
          options={item.answerOption}
          onSelect={item.onSelect}
        />
      );
    default:
      return null;
  }
}
