import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { languageSelectionScreenRoute } from "../navigation/Navigation";

export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(languageSelectionScreenRoute)}
    >
      <Image
        style={styles.image}
        source={require("../assets/images/home-logo.png")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "75%",
    resizeMode: "contain",
  },
});
