import React from "react";
import renderSectionListItem from "../utils/renderFunctions/renderSectionListItem";
import BasicScreenLayout from "../components/common/BasicScreenLayout";
import { informationScreenRoute } from "../navigation/MedBuddyStackNavigation";

export default function PreviewScreen() {
  const testData = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
  ];
  return (
    <BasicScreenLayout
      title={"PreviewScreen"}
      sections={testData}
      renderItem={renderSectionListItem}
      navigateTo={informationScreenRoute}
    />
  );
}
