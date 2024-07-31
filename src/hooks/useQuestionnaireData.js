import { texts } from "../languages/texts";
import useLanguage from "./useLanguage";

export default function useQuestionnaireData() {
  const language = useLanguage();

  const informationText = texts[language].questionnaireScreen.information; // change en to language
  const questionnaireText = texts[language].questionnaireScreen.questionnaire;
  const consentText = texts[language].questionnaireScreen.consent;

  const Questionnaire = {
    resourceType: "Questionnaire",
    id: language,
    status: "active",
    item: [
      {
        linkId: "information",
        type: "group",
        readOnly: true,
        item: [
          {
            linkId: "i.1",
            text: informationText["i.1"],
            type: "group",
            item: [
              {
                linkId: "i.1.1",
                text: informationText["i.1.1"],
                type: "display",
              },
            ],
          },
          {
            linkId: "i.2",
            text: informationText["i.2"],
            type: "group",
            item: [
              {
                linkId: "i.2.1",
                text: informationText["i.2.1"],
                type: "display",
              },
            ],
          },
          {
            linkId: "i.3",
            text: informationText["i.3"],
            type: "group",
            item: [
              {
                linkId: "i.3.1",
                text: informationText["i.3.1"],
                type: "display",
              },
            ],
          },
          {
            linkId: "i.4",
            text: informationText["i.4"],
            type: "group",
            item: [
              {
                linkId: "i.4.1",
                text: informationText["i.4.1"],
                type: "display",
              },
            ],
          },
          {
            linkId: "i.5",
            text: informationText["i.5"],
            type: "group",
            item: [
              {
                linkId: "i.5.1",
                text: informationText["i.5.1"],
                type: "display",
              },
            ],
          },
          {
            linkId: "i.6",
            text: informationText["i.6"],
            type: "group",
            item: [
              {
                linkId: "i.6.1",
                text: informationText["i.6.1"],
                type: "display",
              },
            ],
          },
          {
            linkId: "i.7",
            text: informationText["i.7"],
            type: "group",
            item: [
              {
                linkId: "i.7.1",
                text: informationText["i.7.1"],
                type: "display",
              },
              {
                linkId: "i.7.2",
                text: informationText["i.7.2"],
                type: "display",
              },
            ],
          },
        ],
      },
      {
        linkId: "questionnaire",
        type: "group",
        readOnly: false,
        item: [
          {
            linkId: "q.1",
            text: questionnaireText["q.1"],
            type: "group",
            item: [
              {
                linkId: "q.1.1",
                text: questionnaireText["q.1.1"],
                type: "integer",
                maxLength: 3,
              },
              {
                linkId: "q.1.2",
                text: questionnaireText["q.1.2"],
                type: "integer",
                maxLength: 3,
              },
              {
                linkId: "q.1.3",
                text: questionnaireText["q.1.3"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "q.2",
            text: questionnaireText["q.2"],
            type: "group",
            item: [
              {
                linkId: "q.2.1",
                text: questionnaireText["q.2.1"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.2.2",
                text: questionnaireText["q.2.2"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.2.3",
                text: questionnaireText["q.2.3"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.2.4",
                text: questionnaireText["q.2.4"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "q.3",
            text: questionnaireText["q.3"],
            type: "group",
            item: [
              {
                linkId: "q.3.1",
                text: questionnaireText["q.3.1"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.3.2",
                text: questionnaireText["q.3.2"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.3.3",
                text: questionnaireText["q.3.3"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.3.4",
                text: questionnaireText["q.3.4"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.3.5",
                text: questionnaireText["q.3.5"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "q.4",
            text: questionnaireText["q.4"],
            type: "group",
            item: [
              {
                linkId: "q.4.1",
                text: questionnaireText["q.4.1"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.4.2",
                text: questionnaireText["q.4.2"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.4.3",
                text: questionnaireText["q.4.3"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.4.4",
                text: questionnaireText["q.4.4"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.4.5",
                text: questionnaireText["q.4.5"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
              {
                linkId: "q.4.6",
                text: questionnaireText["q.4.6"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "q.5",
            text: questionnaireText["q.5"],
            type: "group",
            item: [
              {
                linkId: "q.5.1",
                text: questionnaireText["q.5.1"],
                type: "string",
              },
              {
                linkId: "q.5.2",
                text: questionnaireText["q.5.2"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "ASKU",
                      display: questionnaireText["q.unknown"],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        linkId: "consent",
        type: "group",
        item: [
          {
            linkId: "c.1",
            text: consentText["c.1"],
            type: "group",
            item: [
              {
                linkId: "c.1.1",
                text: consentText["c.1.1"],
                type: "choice",
                answerOption: [
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "Y",
                      display: questionnaireText["q.yes"],
                    },
                  },
                  {
                    valueCoding: {
                      system: "http://terminology.hl7.org/CodeSystem/v2-0532",
                      code: "N",
                      display: questionnaireText["q.no"],
                    },
                  },
                ],
              },
            ],
          },
          {
            linkId: "c.2",
            text: consentText["c.2"],
            type: "group",
            item: [
              {
                linkId: "c.2.1",
                text: consentText["c.2.1"],
                type: "string",
              },
            ],
          },
        ],
      },
    ],
  };

  const sectionWithLinkIdInformation = Questionnaire.item.find(
    (item) => item.linkId === "information"
  );

  const sectionWithLinkIdQuestionnaire = Questionnaire.item.find(
    (item) => item.linkId === "questionnaire"
  );

  const sectionWithLinkIdConsent = Questionnaire.item.find(
    (item) => item.linkId === "consent"
  );

  const informationSections = sectionWithLinkIdInformation.item.map(
    (iItem) => ({
      title: iItem.text, // Use 'text' as the title for the section
      linkId: iItem.linkId, // Use 'linkId' as the key for the section
      data: iItem.item ? iItem.item : [], // Pass the full item objects if they exist
    })
  );

  const questionnaireSections = sectionWithLinkIdQuestionnaire.item.map(
    (qItem) => ({
      title: qItem.text, // Use 'text' as the title for the section
      linkId: qItem.linkId, // Use 'linkId' as the key for the section
      data: qItem.item ? qItem.item : [], // Pass the full item objects if they exist
    })
  );

  const consentSections = sectionWithLinkIdConsent.item.map((cItem) => ({
    title: cItem.text, // Use 'text' as the title for the section
    linkId: cItem.linkId, // Use 'linkId' as the key for the section
    data: cItem.item ? cItem.item : [], // Pass the full item objects if they exist
  }));

  return {
    Questionnaire,
    informationSections,
  };
}
