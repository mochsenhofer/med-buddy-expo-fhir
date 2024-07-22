import React, { useState } from "react";
import { Button } from "react-native-paper";
import { FlatList } from "react-native";
import { useTheme } from "react-native-paper";

function RadioButton({ text, selected, onSelect }) {
  const theme = useTheme();
  return (
    <Button
      style={styles.radioButtonStyle}
      onPress={onSelect}
      mode={selected ? "contained" : "outlined"}
      buttonColor={selected ? theme.colors.tertiary : null}
      labelStyle={{ fontSize: 20 }}
    >
      {text}
    </Button>
  );
}

export default function RadioButtons({ options, onSelect }) {
  const [selected, setSelected] = useState(false);

  function handleSelect(value) {
    setSelected(value);
    onSelect(value);
  }
  return (
    <FlatList
      style={styles.radioButtonFlatList}
      data={options}
      numColumns={3}
      keyExtractor={(item) => item.valueCoding.code}
      renderItem={({ item }) => (
        <RadioButton
          text={item.valueCoding.text}
          selected={selected === item.valueCoding.code}
          onSelect={() => handleSelect(item.valueCoding.code)}
        />
      )}
    />
  );
}

const styles = {
  radioButtonFlatList: {
    width: "100%",
    alignItems: "space-between",
  },
  radioButtonStyle: {
    width: "32%",
    marginHorizontal: 5,
    borderWidth: 2,
    height: 45,
  },
};
