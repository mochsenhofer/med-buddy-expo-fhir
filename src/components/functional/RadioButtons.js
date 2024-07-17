import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default function RadioButton({ text, selected, onSelect }) {
  return (
    <Button
      mode={selected ? "outlined" : "contained-tonal"}
      style={{ margin: 5 }}
      onPress={onSelect}
    >
      {text}
    </Button>
  );
}

// export default function RadioButtons({ options, currentValue, onSelect }) {
//   const [selectedOption, setSelectedOption] = useState(currentValue);
//   const language = useSelector(
//     (state) => state.patient.communication[0].language.coding[0].code
//   );
//   const translatedPatientTexts =
//     textsInPatientsChosenLanguage[language].questionnaireScreen.questionnaire ||
//     textsInPatientsChosenLanguage["en"].questionnaireScreen.questionnaire;

//   useEffect(() => {
//     setSelectedOption(currentValue);
//   }, [currentValue]);

//   const handleSelect = (code) => {
//     setSelectedOption(code);
//     onSelect(code);
//   };

//   return (
//     <View style={questionnaireItemStyle.radioButtonView}>
//       {options.map((option) => {
//         if (option.valueCoding.code === "ASKU") {
//           option.valueCoding.display = translatedPatientTexts["q.idk"];
//         }
//         return (
//           <RadioButton
//             key={option.valueCoding.code}
//             text={option.valueCoding.display}
//             selected={option.valueCoding.code === selectedOption}
//             onSelect={() => handleSelect(option.valueCoding.code)}
//           />
//         );
//       })}
//     </View>
//   );
// }
