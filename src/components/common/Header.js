import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { edgeComponentMargins } from "../../theme/constants";

function MedBuddyCornerLogo() {
  return (
    <Image
      source={require("../../assets/images/logo.png")}
      style={styles.cornerLogo}
    />
  );
}

export default function Header({ title }) {
  const theme = useTheme();
  return (
    <View style={[styles.headerContainer]}>
      <MedBuddyCornerLogo />
      <Text variant="headlineSmall" style={styles.headerText}>
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
  cornerLogo: {
    position: "absolute",
    top: edgeComponentMargins,
    left: edgeComponentMargins,
    width: 80,
    height: 80,
  },
});
