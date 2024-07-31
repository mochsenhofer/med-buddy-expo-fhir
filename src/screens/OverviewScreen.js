import React from "react";
import { Text } from "react-native-paper";
import BasicLayout from "../components/common/BasicLayout";
import { useSelector } from "react-redux";
import { DevSettings } from "react-native";

export default function OverviewScreen() {
  const updatedQuestionnaireResponse = useSelector(
    (state) => state.questionnaireResponse
  );
  const DATA = [
    {
      data: [JSON.stringify(updatedQuestionnaireResponse, null, 2)],
    },
  ];

  const renderItem = ({ item }) => <Text>{item}</Text>;

  return (
    <BasicLayout
      title="Danke für Ihre Teilnahme!"
      sections={DATA}
      renderItem={renderItem}
      onNextButtonPress={() => DevSettings.reload()}
    />
  );
}
