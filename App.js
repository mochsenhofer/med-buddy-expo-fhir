import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { PaperProvider } from "react-native-paper";
import Header from "./src/components/common/Header";
import Section from "./src/components/common/Section";
import Footer from "./src/components/common/Footer";
import theme from "./src/theme/theme";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.appContainer}>
        <Header />
        <Section />
        <Footer />
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
