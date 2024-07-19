import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import StartScreen from "../screens/StartScreen";
import LanguageSelectionScreen from "../screens/LanguageSelectionScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import PreviewScreen from "../screens/PreviewScreen";
import VideoScreen from "../screens/VideoScreen";
import QuestionnaireScreen from "../screens/QuestionnaireScreen";
import OverviewScreen from "../screens/OverviewScreen";
import ConsentScreen from "../screens/ConsentScreen";
import FaqScreen from "../screens/FaqScreen";

export const startScreenRoute = "StartScreen";
export const languageSelectionScreenRoute = "LanguageSelectionScreen";
export const registrationScreenRoute = "RegistrationScreen";
export const previewScreenRoute = "PreviewScreen";
export const videoScreenRoute = "VideoScreen";
export const questionnaireScreenRoute = "QuestionnaireScreen";
export const overviewScreenRoute = "OverviewScreen";
export const consentScreenRoute = "ConsentScreen";
export const faqScreenRoute = "FaqScreen";

const screens = [
  {
    route: startScreenRoute,
    component: StartScreen,
  },
  {
    route: languageSelectionScreenRoute,
    component: LanguageSelectionScreen,
  },
  {
    route: registrationScreenRoute,
    component: RegistrationScreen,
  },
  {
    route: previewScreenRoute,
    component: PreviewScreen,
  },
  {
    route: videoScreenRoute,
    component: VideoScreen,
  },
  {
    route: questionnaireScreenRoute,
    component: QuestionnaireScreen,
  },
  {
    route: overviewScreenRoute,
    component: OverviewScreen,
  },
  {
    route: consentScreenRoute,
    component: ConsentScreen,
  },
  {
    route: faqScreenRoute,
    component: FaqScreen,
  },
];

const Stack = createNativeStackNavigator();

function MedBuddyStackNavigation() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {screens.map((screen) => (
            <Stack.Screen
              key={screen.route}
              name={screen.route}
              component={screen.component}
            />
          ))}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default MedBuddyStackNavigation;
