import React, { useRef, useState } from "react";
import BasicLayoutProgressbar from "../components/common/BasicLayoutProgressbar";
import { texts } from "../languages/texts";
import { overviewScreenRoute } from "../navigation/Navigation";
import renderQuestionItem from "../utils/renderQuestionItem";
import renderOverviewItem from "../utils/renderOverviewItem";
import renderConsentItem from "../utils/renderConsentItem";
import useQuestionnaireData from "../hooks/useQuestionnaireData";
import useQuestionnaireSections from "../hooks/useQuestionnaireSections";
import useOverviewSections from "../hooks/useOverviewSections";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import {
  updateValueInteger,
  updateValueString,
  updateValueCoding,
  updatePatient,
  updateQuestionnaire,
  updateQuestionnaireResponseStatus,
  updateQuestionnaireId,
  updateAuthor,
} from "../store/questionnaireResponseReducer";
import { View, Text } from "react-native";

export default function QuestionnaireScreen() {
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);
  const { informationSections } = useQuestionnaireData();
  const questionnaireSections = useQuestionnaireSections();
  const overviewSections = useOverviewSections();
  const dispatch = useDispatch();
  const questionnaireResponseState = useSelector(
    (state) => state.questionnaireResponse
  );
  const registeredPatient = useSelector((state) => state.patient);

  const sizeRef = useRef(null);
  const weightRef = useRef(null);
  const canvasRef = useRef(null);

  const patientText = texts.en.registrationScreen;
  const gender = patientText[registeredPatient.gender];
  const questionnaireText = texts.en.questionnaireScreen.questionnaire;
  const consentText = texts.en.questionnaireScreen.consent;
  const overviewText =
    texts.en.questionnaireScreen.overview.overviewSectionHeadings;

  function getValueByLinkId(type, linkId) {
    function findItemByLinkId(items, linkId) {
      for (let item of items) {
        if (item.linkId === linkId) {
          return item;
        }
        if (item.item) {
          const found = findItemByLinkId(item.item, linkId);
          if (found) {
            return found;
          }
        }
      }
      return null;
    }

    const item = findItemByLinkId(questionnaireResponseState.item, linkId);

    if (item && item.answer && item.answer.length > 0) {
      const answer = item.answer[0];
      switch (type) {
        case "valueInteger":
          return answer.valueInteger;
        case "valueString":
          return answer.valueString;
        case "valueCoding":
          return answer.valueCoding.code;
        default:
          return null;
      }
    }
    return null;
  }

  const consentSections = [
    {
      title: consentText["c.1"],
      data: [
        {
          linkId: "c.1.1",
          text: consentText["c.1.1"],
          value: getValueByLinkId("valueCoding", "c.1.1"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "c.1.1", value })),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
          ],
          error: false,
        },
      ],
    },
    {
      title: consentText["c.2"],
      data: [
        {
          linkId: "c.2.1",
          text: consentText["c.2.1"],
          value: "",
          type: "string",
          ref: canvasRef,
          clear: () => canvasRef.current?.clear(),
          save: () => handleSaveSignature(),
        },
      ],
    },
  ];

  const allSections = [
    informationSections,
    questionnaireSections,
    overviewSections,
    consentSections,
  ];
  const sectionTitles = ["", "", "Overview", ""];

  const renderItemFunctions = [
    renderQuestionItem,
    renderQuestionItem,
    renderOverviewItem,
    renderConsentItem,
  ];

  const sections = allSections[sectionIndex];
  const currentSection = sectionIndex === 2 ? sections : [sections[page]];
  console.log("sectionIndex" + sectionIndex);
  console.log("page" + page);

    if (sectionIndex === 2) {
      setSectionIndex(3);
      setPage(0);
    } else if (page < sections.length - 1) {
      setPage(page + 1);
    } else if (sectionIndex < allSections.length - 1) {
      setSectionIndex(sectionIndex + 1);
      setPage(0);
    } else {
      handleSaveSignature();

      navigation.navigate(overviewScreenRoute);
    }
  }

  function handleSaveSignature() {
    const signature = canvasRef.current?.getSvg();
    dispatch(updateValueString({ linkId: "c.2.1", value: signature }));
  }

  function onBackButtonPress() {
      setSectionIndex(sectionIndex - 1);
      setPage(allSections[1].length - 1);
    } else if (page > 0) {
      setPage(page - 1);
    } else if (sectionIndex > 0) {
      const previousSectionIndex = sectionIndex - 1;
      setSectionIndex(previousSectionIndex);
      setPage(allSections[previousSectionIndex].length - 1);
    } else {
      navigation.goBack();
    }
  }

  return (
    <BasicLayoutProgressbar
      currentStep={sectionIndex}
      sections={currentSection}
      renderItem={renderItemFunctions[sectionIndex]}
      onNextButtonPress={onNextButtonPress}
      onBackButtonPress={onBackButtonPress}
      page={sectionIndex === 2 ? null : `${page + 1}/${sections.length}`}
    />
  );
}
