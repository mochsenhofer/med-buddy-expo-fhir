import React from "react";
import DateInputComponent from "../components/functional/user_input_components/DateInputComponent";
import RadioButtonsComponent from "../components/functional/user_input_components/RadioButtonsComponent";
import TextInputComponent from "../components/functional/user_input_components/TextInputComponent";

export default function renderQuestionnaireUserInput(item, onSelect) {
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
          onSelect={onSelect}
        />
      );
    default:
      return null;
  }
}
