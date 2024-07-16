import React from "react";
import CenteredScreenLayout from "../components/common/CenteredScreenLayout";
import renderSectionListItem from "../utils/renderFunctions/renderSectionListItem";

export default function SelectLanguageScreen() {
  const selectLanguageSections = [
    {
      title: "Select Language",
      data: ["English", "Spanish", "French"],
    },
  ];
  return (
    <CenteredScreenLayout
      title={"Select Language"}
      sections={selectLanguageSections}
      renderItem={renderSectionListItem}
    />
  );
}
