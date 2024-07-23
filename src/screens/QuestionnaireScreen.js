import React, { useState } from "react";
import BasicLayoutProgressBar from "../components/common/BasicLayoutProgressbar";
import renderQuestionItem from "../utils/renderQuestionItem";
import useQuestionnaireData from "../hooks/useQuestionnaireData";
import { useNavigation } from "@react-navigation/native";
import { overviewScreenRoute } from "../navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";

export default function QuestionnaireScreen() {
  const navigation = useNavigation();
  const questionnaireResponseState = useSelector(
    (state) => state.questionnaireResponse
  );
  console.log("questionnaireResponseState:", questionnaireResponseState);
  const { informationSections, questionnaireSections, consentSections } =
    useQuestionnaireData();
  const [page, setPage] = useState(0);
  const [sections, setSections] = useState(informationSections);
  const overviewSections = [
    {
      title: "Overview",
      data: [{}],
    },
  ];

  const allSections = [
    informationSections,
    questionnaireSections,
    overviewSections,
    consentSections,
  ];

  const sectionTitles = ["Information", "Questionnaire", "Overview", "Consent"];

  const [sectionIndex, setSectionIndex] = useState(0);

  const currentSection = [sections[page]];

  function onNextButtonPress() {
    if (page < sections.length - 1) {
      setPage(page + 1);
    } else if (sectionIndex < allSections.length - 1) {
      setSectionIndex(sectionIndex + 1);
      setSections(allSections[sectionIndex + 1]);
      setPage(0);
    } else {
      navigation.navigate(overviewScreenRoute);
    }
  }

  function onBackButtonPress() {
    if (page > 0) {
      setPage(page - 1);
    } else if (sectionIndex > 0) {
      setSectionIndex(sectionIndex - 1);
      setSections(allSections[sectionIndex - 1]);
      setPage(allSections[sectionIndex - 1].length - 1);
    } else {
      navigation.goBack();
    }
  }

  function handleSelect(option) {
    console.log("Selected option:", option);
    // Add your handling logic here
  }

  function handleTextChange(text) {
    console.log("Text changed:", text);
    // Add your handling
  }

  function findCurrentValueByLinkId(item) {
    console.log("item:", item);
  }

  return (
    <BasicLayoutProgressBar
      title={sectionTitles[sectionIndex]}
      sections={currentSection}
      renderItem={({ item }) =>
        renderQuestionItem({
          item,
          onSelect: handleSelect,
          onChangeText: handleTextChange,
          currentValue: findCurrentValueByLinkId(item),
        })
      }
      onNextButtonPress={onNextButtonPress}
      onBackButtonPress={onBackButtonPress}
      currentStep={sectionIndex}
      page={page + 1 + "/" + sections.length}
    />
  );
}
