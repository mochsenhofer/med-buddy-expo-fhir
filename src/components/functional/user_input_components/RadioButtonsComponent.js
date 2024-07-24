import React, { useEffect, useState } from "react";
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
      {key}
    </Button>
  );
}

export default function RadioButtons({ options, onSelect, currentValue }) {
  const [selected, setSelected] = useState(currentValue);

  function handleSelect(value) {
    setSelected(value);
    onSelect(value);
  }

  useEffect(() => {
    setSelected(currentValue);
  }, [currentValue]);

  return (
    <FlatList
      style={styles.radioButtonFlatList}
      data={options}
      numColumns={3}
      keyExtractor={(item) => item.linkId}
      renderItem={({ item }) => (
        <RadioButton
          text={item.valueCoding.display}
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
    justifyContent: "space-between",
  },
  radioButtonStyle: {
    width: "30%",
    marginHorizontal: 10,
    borderWidth: 2,
    height: 40,
  },
};
