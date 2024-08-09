import React from "react";
import { Text } from "react-native-paper";
import BasicLayout from "../components/common/BasicLayout";
import { useSelector } from "react-redux";
import { DevSettings } from "react-native";
import { FIREBASE_DB } from "../firebase/firebase";
import { push, ref, set } from "firebase/database";
import { Alert } from "react-native";

import useLanguage from "../hooks/useLanguage";

export default function OverviewScreen() {
  const updatedQuestionnaireResponse = useSelector(
    (state) => state.questionnaireResponse
  );
  const language = useLanguage();
  const DATA = [
    {
      data: [JSON.stringify(updatedQuestionnaireResponse, null, 2)],
    },
  ];

  async function uploadCompletedQuestionnaire() {
    try {
      const db = FIREBASE_DB;
      const questionnaireResponseRef = ref(db, "questionnaireResponses");
      const newQuestionnaireResponseRef = push(questionnaireResponseRef);

      await set(newQuestionnaireResponseRef, {
        ...updatedQuestionnaireResponse,
        id: newQuestionnaireResponseRef.key,
        questionnaire: language,
        hello: "world",
      });

      console.log("Data uploaded successfully");
    } catch (error) {
      console.error("Error adding document: ", error.message);
      Alert.alert("Upload Error", "Failed to upload data. Please try again.");
    } finally {
      DevSettings.reload();
    }
  }

  const renderItem = ({ item }) => <Text>{item}</Text>;

  return (
    <BasicLayout
      title="Danke für Ihre Teilnahme!"
      sections={DATA}
      renderItem={renderItem}
      onNextButtonPress={() => uploadCompletedQuestionnaire()}
    />
  );
}
