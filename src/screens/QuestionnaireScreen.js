import React from "react";
import { Text } from "react-native-paper";
import BasicLayout from "../components/common/BasicLayout";
import { overviewScreenRoute } from "../navigation/Navigation";
import { texts } from "../languages/texts";

export default function QuestionnaireScreen() {
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
          onSubmitEditing: () => lastNameRef.current.focus(),
          autoFocus: true,
        },
        {
          linkId: "q.1.2",
          text: questionnaireText["q.1.2"],
          value: "",
          type: "integer",
          maxLength: 3,
          onChangeText: (text) => console.log(text),
          onSubmitEditing: () => lastNameRef.current.focus(),
          autoFocus: true,
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
          onSubmitEditing: () => lastNameRef.current.focus(),
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

  const renderItem = ({ item }) => <Text>{item}</Text>;

  return (
    <BasicLayout
      title={"QuestionnaireScreen"}
      sections={questionnaireSections}
      renderItem={renderItem}
      navigateTo={overviewScreenRoute}
    />
  );
}
