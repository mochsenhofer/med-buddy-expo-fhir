import React, { useRef, useState } from "react";
import BasicLayoutProgressbar from "../components/common/BasicLayoutProgressbar";
import { texts } from "../languages/texts";
import { overviewScreenRoute } from "../navigation/Navigation";
import renderQuestionItem from "../utils/renderQuestionItem";
import useQuestionnaireData from "../hooks/useQuestionnaireData";
import { useNavigation } from "@react-navigation/native";

export default function QuestionnaireScreen() {
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);
  const { informationSections } = useQuestionnaireData();

  const sizeRef = useRef(null);
  const weightRef = useRef(null);

  const questionnaireText = texts.en.questionnaireScreen.questionnaire;
  const questionnaireSections = [
    {
      title: questionnaireText["q.1"],
      data: [
        {
          linkId: "q.1.1",
          text: questionnaireText["q.1.1"],
          value: "",
          type: "integer",
          maxLength: 3,
          onChangeText: (text) => console.log(text),
          onSubmitEditing: () => weightRef.current.focus(),
          autoFocus: true,
          ref: sizeRef,
        },
        {
          linkId: "q.1.2",
          text: questionnaireText["q.1.2"],
          value: "",
          type: "integer",
          maxLength: 3,
          onChangeText: (text) => console.log(text),
          ref: weightRef,
        },
        {
          linkId: "q.1.3",
          text: questionnaireText["q.1.3"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
      ],
    },
    {
      title: questionnaireText["q.2"],
      data: [
        {
          linkId: "q.2.1",
          text: questionnaireText["q.2.1"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
        {
          linkId: "q.2.2",
          text: questionnaireText["q.2.2"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
        {
          linkId: "q.2.3",
          text: questionnaireText["q.2.3"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
        {
          linkId: "q.2.4",
          text: questionnaireText["q.2.4"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
      ],
    },
    {
      title: questionnaireText["q.3"],
      data: [
        {
          linkId: "q.3.1",
          text: questionnaireText["q.3.1"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
        {
          linkId: "q.3.2",
          text: questionnaireText["q.3.2"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
        {
          linkId: "q.3.3",
          text: questionnaireText["q.3.3"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
        {
          linkId: "q.3.4",
          text: questionnaireText["q.3.4"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
        {
          linkId: "q.3.5",
          text: questionnaireText["q.3.5"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
      ],
    },
    {
      title: questionnaireText["q.4"],
      data: [
        {
          linkId: "q.4.1",
          text: questionnaireText["q.4.1"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
        {
          linkId: "q.4.2",
          text: questionnaireText["q.4.2"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
        {
          linkId: "q.4.3",
          text: questionnaireText["q.4.3"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
        {
          linkId: "q.4.4",
          text: questionnaireText["q.4.4"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
        {
          linkId: "q.4.5",
          text: questionnaireText["q.4.5"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
        {
          linkId: "q.4.6",
          text: questionnaireText["q.4.6"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
      ],
    },
    {
      title: questionnaireText["q.5"],
      data: [
        {
          linkId: "q.5.1",
          text: questionnaireText["q.5.1"],
          value: "",
          type: "string",
          onChangeText: (text) => console.log(text),
          autoFocus: true,
        },
        {
          linkId: "q.5.2",
          text: questionnaireText["q.5.2"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
            {
              valueCoding: {
                code: "ASKU",
                display: questionnaireText["q.unknown"],
              },
            },
          ],
        },
      ],
    },
  ];

  const allSections = [informationSections, questionnaireSections];
  const sectionTitles = ["Information", "Questionnaire", "Overview", "Consent"];

  const sections = allSections[sectionIndex];
  const currentSection = [sections[page]];

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

  return (
    <BasicLayoutProgressbar
      title={sectionTitles[sectionIndex]}
      currentStep={sectionIndex}
      sections={currentSection}
      renderItem={renderQuestionItem}
      onNextButtonPress={onNextButtonPress}
      onBackButtonPress={onBackButtonPress}
    />
  );
}
