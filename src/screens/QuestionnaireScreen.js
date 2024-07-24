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
  const {
    informationSections,
    sectionWithLinkIdQuestionnaire,
    consentSections,
  } = useQuestionnaireData();
  const [page, setPage] = useState(0);
  const [sections, setSections] = useState(informationSections);

  function findQuestionnaireSectionTitle(linkId) {
    return sectionWithLinkIdQuestionnaire.item.find(
      (qItem) => qItem.linkId === linkId
    ).text;
  }

  function findItemByLinkId(linkId) {
    for (const item of sectionWithLinkIdQuestionnaire.item) {
      if (item.linkId === linkId) {
        return item;
      }
      if (item.item) {
        const found = findItemByLinkId(linkId, item.item);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  const questionnaireSections = [
    {
      title: findQuestionnaireSectionTitle("q.1"),
      data: [
        {
          linkId: "q.1.1",
          text: findItemByLinkId("q.1.1", sectionWithLinkIdQuestionnaire.item),
        },
      ],
    },
  ];

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

  function findItemByLinkId(linkId) {}

  return (
    <BasicLayoutProgressBar
      title={sectionTitles[sectionIndex]}
      sections={currentSection}
      renderItem={renderQuestionItem}
      onNextButtonPress={onNextButtonPress}
      onBackButtonPress={onBackButtonPress}
      currentStep={sectionIndex}
      page={page + 1 + "/" + sections.length}
    />
  );
}
