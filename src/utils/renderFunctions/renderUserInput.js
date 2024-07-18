import React, { useState } from "react";
import { Text, TextInput, useTheme } from "react-native-paper";
import { userInputStyles } from "../../theme/styles";
import { View } from "react-native";
import { DatePickerInput } from "react-native-paper-dates";

export default function renderUserInput({ item }) {
  console.log("item", item.type);
  const [inputDate, setInputDate] = useState(
    item.value ? new Date(item.value) : null
  );
  const theme = useTheme();

  // Helper function to adjust date to avoid timezone issues
  const adjustDate = (date) => {
    const adjustedDate = new Date(date);
    adjustedDate.setHours(12, 0, 0, 0); // Set time to noon
    return adjustedDate;
  };

  switch (item.type) {
    case "display":
      return <View style={userInputStyles.displayText} />;
    case "integer":
      return (
        <TextInput
          label={item.placeholder}
          placeholder={item.question}
          mode="outlined"
          style={userInputStyles.textInput}
          onChangeText={item.onChangeText}
          ref={item.ref}
          autoFocus={item.autoFocus}
          textColor="black"
          maxLength={item.maxLength}
          keyboardType={item.keyboardType}
          onSubmitEditing={item.onSubmit}
        />
      );
    case "choice":
      return <Text>RadioButtons</Text>;
    case "string":
      return (
        <TextInput
          label={item.placeholder}
          placeholder={item.question}
          mode="outlined"
          style={userInputStyles.textInput}
          onChangeText={item.onChangeText}
          ref={item.ref}
          autoFocus={item.autoFocus}
          textColor="black"
          maxLength={item.maxLength}
          keyboardType={item.keyboardType}
          onSubmitEditing={item.onSubmit}
          iconColor={theme.colors.primary}
          value={item.value}
        />
      );
    case "date":
      return (
        <DatePickerInput
          locale={item.locale}
          style={userInputStyles.textInput}
          label={item.placeholder}
          value={inputDate}
          onChange={(date) => {
            const adjustedDate = adjustDate(date);
            setInputDate(adjustedDate);
            item.onChangeText(adjustedDate.toISOString().split("T")[0]);
          }}
          mode="outlined"
          validRange={{ startDate: new Date(1900, 0, 1), endDate: new Date() }}
        />
      );
    default:
      return <Text variant="titleSmall">UserInput</Text>;
  }
}
