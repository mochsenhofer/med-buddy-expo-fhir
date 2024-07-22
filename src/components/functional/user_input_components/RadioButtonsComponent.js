import React, { useState } from "react";
import { Button } from "react-native-paper";

function RadioButton({ text, selected, onSelect }) {
  return (
    <Button onPress={onSelect} mode={selected ? "contained-tonal" : "outlined"}>
      {text}
    </Button>
  );
}

export default function RadioButtons() {
  const [selected, setSelected] = useState(false);
  return (
    <RadioButton
      text={"Hallo"}
      selected={selected}
      onSelect={() => setSelected(true)}
    />
  );
}
