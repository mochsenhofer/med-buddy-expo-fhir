import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { FlatList } from "react-native";
import { useTheme } from "react-native-paper";
import { texts } from "../../../languages/texts";
import ErrorMessage from "./ErrorMessage";
import useLanguage from "../../../hooks/useLanguage";

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

export default function RadioButtons({
  item,
  options,
  onSelect,
  currentValue,
}) {
  const language = useLanguage();
  const text = texts[language].questionnaireScreen.questionnaire;
  const [selected, setSelected] = useState(currentValue);

  function handleSelect(value) {
    setSelected(value);
    onSelect(value);
  }

  useEffect(() => {
    setSelected(currentValue);
  }, [currentValue]);

  return (
    <>
      <FlatList
        style={styles.radioButtonFlatList}
        data={options}
        numColumns={3}
        keyExtractor={(item) => item.linkId}
        renderItem={({ item }) => {
          if (item.valueCoding.code === "ASKU") {
            item.valueCoding.display = text["q.idk"];
          }
          return (
            <RadioButton
              text={item.valueCoding.display}
              selected={selected === item.valueCoding.code}
              onSelect={() => handleSelect(item.valueCoding.code)}
            />
          );
        }}
      />
      {item.error && <ErrorMessage message={item.errorMessage} />}
    </>
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
