import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { registrationScreenRoute } from "../../navigation/MedBuddyStackNavigation";

export default function RenderSelectLanguageButton({ item }) {
  const navigation = useNavigation();
  chosenLanguage = item.key;

  function handleSelectedLanguageButtonPressed() {
    console.log(chosenLanguage);
    // add reducer to store chosen language
    navigation.navigate(registrationScreenRoute);
  }

  return (
    <Button
      style={styles.button}
      onPress={(chosenLanguage) =>
        handleSelectedLanguageButtonPressed(chosenLanguage)
      }
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text variant="titleMedium">{item.label}</Text>
        <Text variant="titleSmall">{item.description}</Text>
      </View>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: "black",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 1000,
  },
  textContainer: {
    flexDirection: "column",
  },
});
