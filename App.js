import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import StartScreen from "./src/screens/StartScreen";
import theme from "./src/theme/theme";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.appContainer}>
        <StartScreen />
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
