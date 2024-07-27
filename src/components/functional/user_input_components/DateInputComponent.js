import React, { useState } from "react";
import { DatePickerInput } from "react-native-paper-dates";
import { userInputStyles } from "./TextInputComponent";
import ErrorMessage from "./ErrorMessage";

export default function DateInputComponent({ item }) {
  const [inputDate, setInputDate] = useState(
    item.value ? new Date(item.value) : null
  );
  function handleDateChange(date) {
    const adjustDate = (date) => {
      const adjustedDate = new Date(date);
      adjustedDate.setHours(12, 0, 0, 0); // Set time to noon
      return adjustedDate;
    };
    const adjustedDate = adjustDate(date);
    setInputDate(adjustedDate);
    item.onChangeText(adjustedDate.toISOString().split("T")[0]);
  }
  console.log(item.locale);
  return (
    <>
      <DatePickerInput
        mode="outlined"
        locale={item.locale}
        label={item.text}
        value={inputDate}
        onChange={handleDateChange}
        inputMode="start"
        style={userInputStyles.textInput}
        validRange={{ startDate: new Date(1900, 0, 1), endDate: new Date() }}
        hasError={item.error}
        error={item.error}
        onEndEditing={item.onEndEditing}
        errorText={item.error ? item.errorMessage : null}
      />
      {item.error && <ErrorMessage message={item.errorMessage} />}
    </>
  );
}
