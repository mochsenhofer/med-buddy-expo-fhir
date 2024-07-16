import React from "react";
import renderSectionListItem from "../utils/renderFunctions/renderSectionListItem";
import BasicScreenLayout from "../components/common/BasicScreenLayout";
import { faqScreenRoute } from "../navigation/MedBuddyStackNavigation";

export default function ConsentScreen() {
  const testData = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
  ];
  return (
    <BasicScreenLayout
      title={"ConsentScreen"}
      sections={testData}
      renderItem={renderSectionListItem}
      navigateTo={faqScreenRoute}
    />
  );
}
