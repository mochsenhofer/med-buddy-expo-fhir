import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import theme from "./src/theme/theme";
import MedBuddyStackNavigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.appContainer}>
        <MedBuddyStackNavigation />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
