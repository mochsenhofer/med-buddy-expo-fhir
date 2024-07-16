import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { registrationScreenRoute } from "../../navigation/MedBuddyStackNavigation";

export default function renderSelectLanguageButton({ item }) {
  const navigation = useNavigation();
  const chosenLanguage = item.key;

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
        <Text variant="titleLarge">{item.label}</Text>
        <Text variant="titleMedium">{item.description}</Text>
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
    width: "50%",
    minHeight: 120,
    padding: 20,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 1000,
  },
  textContainer: {
    flexDirection: "column",
  },
});
