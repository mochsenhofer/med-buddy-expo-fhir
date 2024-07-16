import React from "react";
import renderSectionListItem from "../utils/renderFunctions/renderSectionListItem";
import BasicScreenLayout from "../components/common/BasicScreenLayout";
import { questionnaireScreenRoute } from "../navigation/MedBuddyStackNavigation";

export default function InformationScreen() {
  const testData = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
  ];
  return (
    <BasicScreenLayout
      title={"InformationScreen"}
      sections={testData}
      renderItem={renderSectionListItem}
      navigateTo={questionnaireScreenRoute}
    />
  );
}
