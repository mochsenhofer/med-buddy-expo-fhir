import React from "react";
import renderSectionListItem from "../utils/renderFunctions/renderSectionListItem";
import BasicScreenLayout from "../components/common/BasicScreenLayout";
import { previewScreenRoute } from "../navigation/MedBuddyStackNavigation";

export default function RegistrationScreen() {
  const testData = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
  ];
  return (
    <BasicScreenLayout
      title={"RegistrationScreen"}
      sections={testData}
      renderItem={renderSectionListItem}
      navigateTo={previewScreenRoute}
    />
  );
}
