import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen from "../screens/StartScreen";

const MedBuddyStack = createNativeStackNavigator();

export default function MedBuddyStackNavigation() {
  return (
    <NavigationContainer>
      <MedBuddyStack.Navigator>
        <MedBuddyStack.Screen name="Start" component={StartScreen} />
      </MedBuddyStack.Navigator>
    </NavigationContainer>
  );
}
