import React, { useState } from "react";
import { DatePickerInput } from "react-native-paper-dates";
import { userInputStyles } from "./TextInputComponent";

export default function DateInputComponent({ item }) {
  const [inputDate, setInputDate] = useState(undefined);

  return (
    <DatePickerInput
      mode="outlined"
      locale="en"
      label={item.text}
      value={inputDate}
      onChange={(d) => setInputDate(d)}
      inputMode="start"
      style={userInputStyles.textInput}
    />
  );
}
