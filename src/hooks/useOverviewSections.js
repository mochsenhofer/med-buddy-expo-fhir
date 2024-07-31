// useOverviewSections.js
import { useSelector } from "react-redux";
import { texts } from "../languages/texts";
import useQuestionnaireData from "./useQuestionnaireData";
import useQuestionnaireSections from "./useQuestionnaireSections";
import useLanguage from "./useLanguage";

export default function useOverviewSections() {
  const questionnaireResponseState = useSelector(
    (state) => state.questionnaireResponse
  );
  const registeredPatient = useSelector((state) => state.patient);

  const language = useLanguage();

  const patientText = texts[language].registrationScreen;
  const gender = patientText[registeredPatient.gender];
  const questionnaireText = texts[language].questionnaireScreen.questionnaire;
  const overviewText =
    texts[language].questionnaireScreen.overview.overviewSectionHeadings;

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
          switch (answer.valueCoding.code) {
            case "ASKU":
              return questionnaireText["q.idk"];
            case "Y":
              return questionnaireText["q.yes"];
            case "N":
              return questionnaireText["q.no"];
          }
        default:
          return null;
      }
    }
    return null;
  }

  const overviewSections = [
    {
      title: overviewText["oSH.1"],
      data: [
        {
          linkId: "p.1",
          text: patientText["p.1"],
          value: registeredPatient.name[0].given[0],
        },
        {
          linkId: "p.2",
          text: patientText["p.2"],
          value: registeredPatient.name[0].family,
        },
        {
          linkId: "p.3",
          text: patientText["p.3"],
          value: registeredPatient.identifier[0].value,
        },
        {
          linkId: "p.4",
          text: patientText["p.4"],
          value: registeredPatient.birthDate,
        },
        {
          linkId: "p.5",
          text: patientText["p.5"],
          value: gender,
        },
        {
          linkId: "q.1.1",
          text: questionnaireText["q.1.1"],
          value: getValueByLinkId("valueInteger", "q.1.1"),
        },
        {
          linkId: "q.1.2",
          text: questionnaireText["q.1.2"],
          value: getValueByLinkId("valueInteger", "q.1.2"),
        },
        {
          linkId: "q.1.3",
          text: questionnaireText["q.1.3"],
          value: getValueByLinkId("valueCoding", "q.1.3"),
        },
      ],
    },
    {
      title: overviewText["oSH.2"],
      data: [
        {
          linkId: "q.2.1",
          text: questionnaireText["q.2.1"],
          value: getValueByLinkId("valueCoding", "q.2.1"),
        },
        {
          linkId: "q.2.2",
          text: questionnaireText["q.2.2"],
          value: getValueByLinkId("valueCoding", "q.2.2"),
        },
        {
          linkId: "q.2.3",
          text: questionnaireText["q.2.3"],
          value: getValueByLinkId("valueCoding", "q.2.3"),
        },
        {
          linkId: "q.2.4",
          text: questionnaireText["q.2.4"],
          value: getValueByLinkId("valueCoding", "q.2.4"),
        },
      ],
    },
    {
      title: overviewText["oSH.3"],
      data: [
        {
          linkId: "q.3.1",
          text: questionnaireText["q.3.1"],
          value: getValueByLinkId("valueCoding", "q.3.1"),
        },
        {
          linkId: "q.3.2",
          text: questionnaireText["q.3.2"],
          value: getValueByLinkId("valueCoding", "q.3.2"),
        },
        {
          linkId: "q.3.3",
          text: questionnaireText["q.3.3"],
          value: getValueByLinkId("valueCoding", "q.3.3"),
        },
        {
          linkId: "q.3.4",
          text: questionnaireText["q.3.4"],
          value: getValueByLinkId("valueCoding", "q.3.4"),
        },
        {
          linkId: "q.3.5",
          text: questionnaireText["q.3.5"],
          value: getValueByLinkId("valueCoding", "q.3.5"),
        },
      ],
    },
    {
      title: overviewText["oSH.4"],
      data: [
        {
          linkId: "q.4.1",
          text: questionnaireText["q.4.1"],
          value: getValueByLinkId("valueCoding", "q.4.1"),
        },
        {
          linkId: "q.4.2",
          text: questionnaireText["q.4.2"],
          value: getValueByLinkId("valueCoding", "q.4.2"),
        },
        {
          linkId: "q.4.3",
          text: questionnaireText["q.4.3"],
          value: getValueByLinkId("valueCoding", "q.4.3"),
        },
        {
          linkId: "q.4.4",
          text: questionnaireText["q.4.4"],
          value: getValueByLinkId("valueCoding", "q.4.4"),
        },
        {
          linkId: "q.4.5",
          text: questionnaireText["q.4.5"],
          value: getValueByLinkId("valueCoding", "q.4.5"),
        },
        {
          linkId: "q.4.6",
          text: questionnaireText["q.4.6"],
          value: getValueByLinkId("valueCoding", "q.4.6"),
        },
      ],
    },
    {
      title: overviewText["oSH.5"],
      data: [
        {
          linkId: "q.5.1",
          text: questionnaireText["q.5.1"],
          value: getValueByLinkId("valueString", "q.5.1"),
        },
        {
          linkId: "q.5.2",
          text: questionnaireText["q.5.2"],
          value: getValueByLinkId("valueCoding", "q.5.2"),
        },
      ],
    },
  ];

  return overviewSections;
}
