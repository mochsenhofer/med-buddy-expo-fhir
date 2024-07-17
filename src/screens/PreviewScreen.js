import React from "react";
import renderSectionListItem from "../utils/renderFunctions/renderSectionListItem";
import BasicScreenLayout from "../components/common/BasicScreenLayout";
import { informationScreenRoute } from "../navigation/MedBuddyStackNavigation";
import { useSelector } from "react-redux";

export default function PreviewScreen() {
  const registeredPatient = useSelector((state) => state.patient);
  const testData = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
  ];
  return (
    <BasicScreenLayout
      title={registeredPatient.birthDate}
      sections={testData}
      renderItem={renderSectionListItem}
      navigateTo={informationScreenRoute}
    />
  );
}
