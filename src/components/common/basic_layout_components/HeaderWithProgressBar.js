import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { startScreenRoute } from "../../../navigation/Navigation";
import { h1 } from "../../../theme/constants";
import ProgressBarComponent from "../../functional/user_input_components/ProgressBarComponent";
import { headerStyles } from "./Header";

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

export default function HeaderWithProgressBar({ title, currentStep }) {
  return (
    <View style={[headerStyles.headerContainer]}>
      <MedBuddyCornerLogo />
      <Text variant={h1} style={headerStyles.headerText}>
        {title}
      </Text>
      <ProgressBarComponent currentStep={currentStep} />
    </View>
  );
}
