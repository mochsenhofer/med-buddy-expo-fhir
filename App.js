import React from "react";
import { PaperProvider } from "react-native-paper";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import MedBuddyStackNavigation from "./src/navigation/Navigation";
import theme from "./src/theme/theme";
import { LogBox } from "react-native";

// LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <MedBuddyStackNavigation />
      </PaperProvider>
    </Provider>
  );
}
