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
      style={headerStyles.cornerLogo}
    >
      <Image
        style={headerStyles.icon}
        source={require("../../../assets/images/logo.png")}
      />
    </TouchableOpacity>
  );
}

export default function Header({ title }) {
  return (
    <View style={[headerStyles.headerContainer]}>
      <MedBuddyCornerLogo />
      <Text variant={h1} style={headerStyles.headerText}>
        {title}
      </Text>
    </View>
  );
}

export const headerStyles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: marginScreenBorderComponents,
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
    marginTop: marginScreenBorderComponents * 2,
    marginBottom: marginScreenBorderComponents,
  },
});
