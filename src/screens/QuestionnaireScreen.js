import React, { useState } from "react";
import BasicLayoutProgressBar from "../components/common/BasicLayoutProgressbar";
import renderQuestionnaireItem from "../utils/renderQuestionnaireItem";
import useQuestionnaireData from "../hooks/useQuestionnaireData";
import { useNavigation } from "@react-navigation/native";
import { overviewScreenRoute } from "../navigation/Navigation";
import { useSelector } from "react-redux";
import { Text } from "react-native-paper";

export default function QuestionnaireScreen() {
  const navigation = useNavigation();
  const questionnaireResponseState = useSelector(
    (state) => state.questionnaireResponse
  );
  const {
    informationSections,
    sectionWithLinkIdQuestionnaire,
    questionnaireSections,
    consentSections,
  } = useQuestionnaireData();
  const [page, setPage] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);

  const allSections = [
    informationSections,
    questionnaireSections,
    [{ title: "Overview", data: [{}] }],
    consentSections,
  ];

  const sectionTitles = ["Information", "Questionnaire", "Overview", "Consent"];

  const sections = allSections[sectionIndex];
  const currentSection = sections[page];

  function findQuestionnaireSectionTitle(linkId) {
    return sectionWithLinkIdQuestionnaire.item.find(
      (qItem) => qItem.linkId === linkId
    ).text;
  }

  function renderOverviewItem(item) {
    return <Text>Hallo</Text>;
  }

  function onNextButtonPress() {
    if (page < sections.length - 1) {
      setPage(page + 1);
    } else if (sectionIndex < allSections.length - 1) {
      setSectionIndex(sectionIndex + 1);
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
      setPage(allSections[sectionIndex - 1].length - 1);
    } else {
      navigation.goBack();
    }
  }

  function handleSelect(value, item) {
    console.log("clicked" + value);
  }

  return (
    <BasicLayoutProgressBar
      title={sectionTitles[sectionIndex]}
      sections={[currentSection]}
      renderItem={({ item }) =>
        renderQuestionnaireItem({ item, onSelect: handleSelect })
      }
      onNextButtonPress={onNextButtonPress}
      onBackButtonPress={onBackButtonPress}
      currentStep={sectionIndex}
      page={`${page + 1}/${sections.length}`}
    />
  );
}
