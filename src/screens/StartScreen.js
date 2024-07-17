import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { selectLanguageScreenRoute } from "../navigation/MedBuddyStackNavigation";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(selectLanguageScreenRoute)}
      style={styles.startScreen}
    >
      <Image
        source={require("../assets/images/home-logo.png")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  startScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    width: "75%",
  },
});
