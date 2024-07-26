import React from "react";
import { Text } from "react-native-paper";
import { p } from "../theme/constants";
import RadioButtons from "../components/functional/user_input_components/RadioButtonsComponent";
import { StyleSheet } from "react-native";

export default function renderConsentItem({ item }) {
  return (
    <>
      <Text style={styles.text} variant={p}>
        {item.text}
      </Text>
      {item.type === "choice" ? (
        <RadioButtons
          options={item.answerOption}
          onSelect={item.onSelect}
          currentValue={item.value}
        />
      ) : (
        <Text>Signature Pad</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 5,
    fontSize: 20,
  },
});
