import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";

// import screens
import ConsentScreen from "../screens/ConsentScreen";
import FaqScreen from "../screens/FaqScreen";
import InformationScreen from "../screens/InformationScreen";
import OverviewScreen from "../screens/OverviewScreen";
import PreviewScreen from "../screens/PreviewScreen";
import QuestionnaireScreen from "../screens/QuestionnaireScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import SelectLanguageScreen from "../screens/SelectLanguageScreen";
import StartScreen from "../screens/StartScreen";
import VideoScreen from "../screens/VideoScreen";

// store the route names in variables
export const startScreenRoute = "StartScreen";
export const selectLanguageScreenRoute = "SelectLanguageScreen";
export const registrationScreenRoute = "RegistrationScreen";
export const previewScreenRoute = "PreviewScreen";
export const videoScreenRoute = "VideoScreen";
export const informationScreenRoute = "InformationScreen";
export const questionnaireScreenRoute = "QuestionnaireScreen";
export const overviewScreenRoute = "OverviewScreen";
export const consentScreenRoute = "ConsentScreen";
export const faqScreenRoute = "FaqScreen";

// create an array of screens
const screens = [
  { name: startScreenRoute, component: StartScreen },
  { name: selectLanguageScreenRoute, component: SelectLanguageScreen },
  { name: registrationScreenRoute, component: RegistrationScreen },
  { name: previewScreenRoute, component: PreviewScreen },
  { name: videoScreenRoute, component: VideoScreen },
  { name: informationScreenRoute, component: InformationScreen },
  { name: questionnaireScreenRoute, component: QuestionnaireScreen },
  { name: overviewScreenRoute, component: OverviewScreen },
  { name: consentScreenRoute, component: ConsentScreen },
  { name: faqScreenRoute, component: FaqScreen },
];

const Stack = createNativeStackNavigator();

export default function MedBuddyStackNavigation() {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <Stack.Navigator
          initialRouteName={startScreenRoute}
          screenOptions={{ headerShown: false }}
        >
          {screens.map((screen, index) => (
            <Stack.Screen
              key={index}
              name={screen.name}
              component={screen.component}
            />
          ))}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
