import React from "react";
import renderSectionListItem from "../utils/renderFunctions/renderSectionListItem";
import BasicScreenLayout from "../components/common/BasicScreenLayout";
import { overviewScreenRoute } from "../navigation/MedBuddyStackNavigation";

export default function QuestionnaireScreen() {
  const testData = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
  ];
  return (
    <BasicScreenLayout
      title={"QuestionnaireScreen"}
      sections={testData}
      renderItem={renderSectionListItem}
      navigateTo={overviewScreenRoute}
    />
  );
}
