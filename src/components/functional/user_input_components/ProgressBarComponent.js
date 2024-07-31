import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProgressSteps, {
  Title,
  Content,
} from "@joaosousa/react-native-progress-steps";
import { medBuddyBlue } from "../../../theme/colors";
import useLanguage from "../../../hooks/useLanguage";
import { texts } from "../../../languages/texts";

export default function ProgressBarComponent({ currentStep }) {
  const language = useLanguage();
  const progressBarText = texts[language].questionnaireScreen.progressBar;
  return (
    <View style={styles.container}>
      <ProgressSteps
        currentStep={currentStep}
        orientation="horizontal"
        steps={[
          {
            title: (
              <Title>
                <Text>{progressBarText.information}</Text>
              </Title>
            ),
          },
          {
            title: (
              <Title>
                <Text>{progressBarText.questionnaire}</Text>
              </Title>
            ),
          },
          {
            title: (
              <Title>
                <Text>{progressBarText.overview}</Text>
              </Title>
            ),
          },
          {
            title: (
              <Title>
                <Text>{progressBarText.consent}</Text>
              </Title>
            ),
          },
        ]}
        colors={{
          title: {
            text: {
              normal: "lightgrey",
              active: medBuddyBlue,
              completed: medBuddyBlue,
            },
          },
          marker: {
            text: {
              normal: "grey",
              active: "#005f73",
              completed: "#f4f3ee",
            },
            line: {
              normal: "lightgrey",
              active: medBuddyBlue,
              completed: medBuddyBlue,
            },
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    flex: 1,
  },
});
