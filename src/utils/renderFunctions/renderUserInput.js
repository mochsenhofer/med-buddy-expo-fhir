import React, { useState } from "react";
import { Text, TextInput, useTheme } from "react-native-paper";
import { userInputStyles } from "../../theme/styles";
import { View } from "react-native";
import { DatePickerInput } from "react-native-paper-dates";

export default function renderUserInput({ item }) {
  const [inputDate, setInputDate] = useState(null);
  const theme = useTheme();
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
      return <Text variant="titleSmall">Choice</Text>;
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
        />
      );
    case "date":
      return (
        <DatePickerInput
          locale={item.locale}
          style={userInputStyles.textInput}
          label={item.placeholder}
          value={inputDate}
          onChange={setInputDate}
          mode="outlined"
          validRange={{ startDate: new Date(1900, 0, 1), endDate: new Date() }}
        />
      );
    default:
      return <Text variant="titleSmall">UserInput</Text>;
  }
}
