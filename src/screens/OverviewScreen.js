import React from "react";
import renderSectionListItem from "../utils/renderFunctions/renderSectionListItem";
import BasicScreenLayout from "../components/common/BasicScreenLayout";
import { consentScreenRoute } from "../navigation/MedBuddyStackNavigation";

export default function OverviewScreen() {
  const testData = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
  ];
  return (
    <BasicScreenLayout
      title={"OverviewScreen"}
      sections={testData}
      renderItem={renderSectionListItem}
      navigateTo={consentScreenRoute}
    />
  );
}
