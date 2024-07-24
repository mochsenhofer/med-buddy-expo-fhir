import React, { useRef, useState } from "react";
import BasicLayoutProgressbar from "../components/common/BasicLayoutProgressbar";
import { texts } from "../languages/texts";
import { overviewScreenRoute } from "../navigation/Navigation";
import renderQuestionItem from "../utils/renderQuestionItem";
import useQuestionnaireData from "../hooks/useQuestionnaireData";
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
  const dispatch = useDispatch();
  const questionnaireResponseState = useSelector(
    (state) => state.questionnaireResponse
  );

  const sizeRef = useRef(null);
  const weightRef = useRef(null);

  const questionnaireText = texts.en.questionnaireScreen.questionnaire;
  const consentText = texts.en.questionnaireScreen.consent;

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

  const questionnaireSections = [
    {
      title: questionnaireText["q.1"],
      linkId: "q.1",
      data: [
        {
          linkId: "q.1.1",
          text: questionnaireText["q.1.1"],
          value: getValueByLinkId("valueInteger", "q.1.1"),
          type: "integer",
          maxLength: 3,
          onChangeText: (text) =>
            dispatch(updateValueInteger({ linkId: "q.1.1", value: text })),
          onSubmitEditing: () => weightRef.current.focus(),
          autoFocus: true,
          ref: sizeRef,
        },
        {
          linkId: "q.1.2",
          text: questionnaireText["q.1.2"],
          value: getValueByLinkId("valueInteger", "q.1.2"),
          type: "integer",
          maxLength: 3,
          onChangeText: (text) =>
            dispatch(updateValueInteger({ linkId: "q.1.2", value: text })),
          ref: weightRef,
        },
        {
          linkId: "q.1.3",
          text: questionnaireText["q.1.3"],
          value: getValueByLinkId("valueCoding", "q.1.3"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.1.3", value })),
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
      linkId: "q.2",
      data: [
        {
          linkId: "q.2.1",
          text: questionnaireText["q.2.1"],
          value: getValueByLinkId("valueCoding", "q.2.1"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.2.1", value })),
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
          value: getValueByLinkId("valueCoding", "q.2.2"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.2.2", value })),
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
          value: getValueByLinkId("valueCoding", "q.2.3"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.2.3", value })),
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
          value: getValueByLinkId("valueCoding", "q.2.4"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.2.4", value })),
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
      linkId: "q.3",
      data: [
        {
          linkId: "q.3.1",
          text: questionnaireText["q.3.1"],
          value: getValueByLinkId("valueCoding", "q.3.1"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.3.1", value })),
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
          value: getValueByLinkId("valueCoding", "q.3.2"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.3.2", value })),
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
          value: getValueByLinkId("valueCoding", "q.3.3"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.3.3", value })),
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
          value: getValueByLinkId("valueCoding", "q.3.4"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.3.4", value })),
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
          value: getValueByLinkId("valueCoding", "q.3.5"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.3.5", value })),
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
          value: getValueByLinkId("valueCoding", "q.4.1"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.4.1", value })),
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
          value: getValueByLinkId("valueCoding", "q.4.2"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.4.2", value })),
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
          value: getValueByLinkId("valueCoding", "q.4.3"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.4.3", value })),
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
          value: getValueByLinkId("valueCoding", "q.4.4"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.4.4", value })),
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
          value: getValueByLinkId("valueCoding", "q.4.5"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.4.5", value })),
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
          value: getValueByLinkId("valueCoding", "q.4.6"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.4.6", value })),
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
          value: getValueByLinkId("valueString", "q.5.1"),
          type: "string",
          onChangeText: (text) =>
            dispatch(updateValueString({ linkId: "q.5.1", value: text })),
          autoFocus: true,
        },
        {
          linkId: "q.5.2",
          text: questionnaireText["q.5.2"],
          value: getValueByLinkId("valueCoding", "q.5.2"),
          type: "choice",
          onSelect: (value) =>
            dispatch(updateValueCoding({ linkId: "q.5.2", value })),
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

  const overviewSections = [
    {
      title: "Test",
      data: [
        {
          text: JSON.stringify(questionnaireResponseState, null, 2),
          type: "display",
        },
      ],
    },
  ];
  const consentSections = [
    {
      title: consentText["c.1"],
      data: [
        {
          linkId: "c.1.1",
          text: consentText["c.1.1"],
          value: "",
          type: "choice",
          onSelect: (value) => console.log(value),
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
          ],
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
          onChangeText: (text) => console.log(text),
          autoFocus: true,
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
  const sectionTitles = ["Information", "Questionnaire", "Overview", "Consent"];

  function renderOverviewItem({ item }) {
    return (
      <View>
        <Text>{item.text}</Text>
      </View>
    );
  }
  const renderItemFunctions = [
    renderQuestionItem,
    renderQuestionItem,
    renderOverviewItem,
    renderQuestionItem,
  ];

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
      renderItem={renderItemFunctions[sectionIndex]}
      onNextButtonPress={onNextButtonPress}
      onBackButtonPress={onBackButtonPress}
    />
  );
}
