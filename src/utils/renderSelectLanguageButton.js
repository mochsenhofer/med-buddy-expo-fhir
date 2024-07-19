import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { registrationScreenRoute } from "../navigation/Navigation";
import { Image } from "react-native";

export default function renderSelectLanguageButton({ item }) {
  const navigation = useNavigation();
  function handleSelectLanguageButtonPress() {
    console.log(item.value);
    navigation.navigate(registrationScreenRoute);
  }
  return (
    <Button
      mode="outlined"
      style={styles.selectLanguageButton}
      onPress={handleSelectLanguageButtonPress}
      icon={() => (
        <Image
          style={styles.icon}
          source={require("../assets/adaptive-icon.png")}
        />
      )}
    >
      {item.label}
    </Button>
  );
}

const styles = StyleSheet.create({
  selectLanguageButton: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 1000,
    marginBottom: 10,
    width: "25%",
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 80,
  },
});
