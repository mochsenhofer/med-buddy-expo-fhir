import React from "react";
import renderSectionListItem from "../utils/renderFunctions/renderSectionListItem";
import BasicScreenLayout from "../components/common/BasicScreenLayout";
import { startScreenRoute } from "../navigation/MedBuddyStackNavigation";

export default function FaqScreen() {
  const testData = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
  ];
  return (
    <BasicScreenLayout
      title={"StartScreen"}
      sections={testData}
      renderItem={renderSectionListItem}
      navigateTo={startScreenRoute}
    />
  );
}
