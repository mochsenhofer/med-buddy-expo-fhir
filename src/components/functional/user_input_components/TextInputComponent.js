import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function TextInputComponent({ item, onChangeText }) {
  return (
    <TextInput
      mode="outlined"
      label={item.text}
      onChangeText={onChangeText}
      inputMode={item.type === "integer" ? "numeric" : "text"}
      maxLength={item.maxLength}
      value={item.value}
      onSubmitEditing={item.onSubmitEditing}
      ref={item.ref}
      autoFocus={item.autoFocus}
      style={userInputStyles.textInput}
    />
  );
}

export const userInputStyles = StyleSheet.create({
  textInput: {
    marginVertical: 5,
    height: 40,
    justifyContent: "center",
  },
});
