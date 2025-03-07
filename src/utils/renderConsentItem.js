import React, { useRef } from "react";
import { Text } from "react-native-paper";
import { p } from "../theme/constants";
import { Canvas } from "@benjeau/react-native-draw";
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
        <Canvas
          ref={item.ref}
          style={styles.signaturePad}
          width={500}
          height={250}
          roundPoints={true}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 5,
    fontSize: 20,
  },
  signaturePad: {
    backgroundColor: "white",
    flex: 1,
    width: 800,
    height: 250,
    borderRadius: 25,
    borderWidth: 5,
    marginBottom: 5,
    marginTop: 5,
  },
});
