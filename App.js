import React from "react";
import { PaperProvider } from "react-native-paper";
import MedBuddyStackNavigation from "./src/navigation/MedBuddyStackNavigation";
import theme from "./src/theme/theme";

export default function App() {
  return (
    // add store here
    <PaperProvider theme={theme}>
      <MedBuddyStackNavigation />
    </PaperProvider>
  );
}
