import React from "react";
import { StyleSheet } from "react-native";
import { TextInput, Text } from "react-native-paper";
import ErrorMessage from "./ErrorMessage";

export default function TextInputComponent({ item }) {
  return (
    <>
      <TextInput
        mode="outlined"
        label={item.text}
        onChangeText={item.onChangeText}
        inputMode={item.type === "integer" ? "numeric" : "text"}
        maxLength={item.maxLength}
        value={item.value}
        onSubmitEditing={item.onSubmitEditing}
        onEndEditing={item.onEndEditing}
        ref={item.ref}
        autoFocus={item.autoFocus}
        style={userInputStyles.textInput}
        error={item.error}
      />
      {item.error && <ErrorMessage message={item.errorMessage} />}
    </>
  );
}

export const userInputStyles = StyleSheet.create({
  textInput: {
    marginVertical: 5,
    height: 40,
    justifyContent: "center",
  },
});
