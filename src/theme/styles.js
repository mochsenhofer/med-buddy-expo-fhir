import { configureStore } from "@reduxjs/toolkit";
import { StyleSheet } from "react-native";
import { patientReducer } from "../store/patientReducer";

export const userInputStyles = StyleSheet.create({
  textInput: {
    marginBottom: 10,
    width: "80%",
    height: 40,
  },
  displayText: {
    marginBottom: 10,
    width: "80%",
  },
});

export const sectionListStyles = StyleSheet.create({
  sectionContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "75%",
    backgroundColor: "yellow",
  },
  sectionList: {
    width: "100%",
  },
});
export const store = configureStore({
  reducer: {
    patient: patientReducer,
  },
});
