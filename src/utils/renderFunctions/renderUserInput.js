import React from "react";
import { Text, TextInput } from "react-native-paper";
import { userInputStyles } from "../../theme/styles";
import { View } from "react-native";

export default function renderUserInput({ item }) {
  switch (item.type) {
    case "display":
      return <View style={userInputStyles.displayText} />;
    case "integer":
      return <Text variant="titleSmall">Integer</Text>;
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
        />
      );
    default:
      return <Text variant="titleSmall">UserInput</Text>;
  }
}
