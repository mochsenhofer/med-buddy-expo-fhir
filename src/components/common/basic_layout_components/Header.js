import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { marginScreenBorderComponents } from "../../../theme/constants";
import { useNavigation } from "@react-navigation/native";
import { startScreenRoute } from "../../../navigation/Navigation";
import { h1 } from "../../../theme/constants";

function MedBuddyCornerLogo() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(startScreenRoute)}
      style={styles.cornerLogo}
    >
      <Image
        style={styles.icon}
        source={require("../../../assets/images/logo.png")}
      />
    </TouchableOpacity>
  );
}

export default function Header({ title }) {
  return (
    <View style={[styles.headerContainer]}>
      <MedBuddyCornerLogo />
      <Text variant={h1} style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    width: 80,
    height: 80,
  },
  cornerLogo: {
    position: "absolute",
    top: marginScreenBorderComponents,
    left: marginScreenBorderComponents,
  },
  headerText: {
    color: "black",
    textAlign: "center",
  },
});
