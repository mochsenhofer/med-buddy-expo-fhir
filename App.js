import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/store/store";
import { PaperProvider } from "react-native-paper";
import MedBuddyStackNavigation from "./src/navigation/MedBuddyStackNavigation";
import theme from "./src/theme/theme";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <MedBuddyStackNavigation />
      </PaperProvider>
    </ReduxProvider>
  );
}
