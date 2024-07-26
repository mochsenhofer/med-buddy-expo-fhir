import React from "react";
import { Text } from "react-native-paper";
import BasicLayout from "../components/common/BasicLayout";
import { consentScreenRoute } from "../navigation/Navigation";
import { useSelector } from "react-redux";

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
      sections={DATA}
      renderItem={renderItem}
      navigateTo={consentScreenRoute}
    />
  );
}
