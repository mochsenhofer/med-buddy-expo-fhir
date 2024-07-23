export default function useQuestionnaireData() {
  const Questionnaire = {
    resourceType: "Questionnaire",
    id: "123",
    status: "active",
    item: [
      {
        linkId: "information",
        type: "group",
        readOnly: true,
        item: [
          {
            linkId: "i.1",
            text: "Information Title 1",
            type: "group",
            item: [
              { linkId: "i.1.1", text: "Information 1.1", type: "display" },
            ],
          },
          {
            linkId: "i.2",
            text: "Information Title 2",
            type: "group",
            item: [
              { linkId: "i.2.1", text: "Information 2.1", type: "display" },
            ],
          },
          {
            linkId: "i.3",
            text: "Information Title 3",
            type: "group",
            item: [
              { linkId: "i.3.1", text: "Information 3.1", type: "display" },
            ],
          },
          {
            linkId: "i.4",
            text: "Information Title 4",
            type: "group",
            item: [
              { linkId: "i.4.1", text: "Information 4.1", type: "display" },
            ],
          },
          {
            linkId: "i.5",
            text: "Information Title 5",
            type: "group",
            item: [
              { linkId: "i.5.1", text: "Information 5.1", type: "display" },
            ],
          },
          {
            linkId: "i.6",
            text: "Information Title 6",
            type: "group",
            item: [
              { linkId: "i.6.1", text: "Information 6.1", type: "display" },
            ],
          },
          {
            linkId: "i.7",
            text: "Information Title 7",
            type: "group",
            item: [
              { linkId: "i.7.1", text: "Information 7.1", type: "display" },
            ],
          },
          {
            linkId: "i.8",
            text: "Information Title 8",
            type: "group",
            item: [
              { linkId: "i.8.1", text: "Information 8.1", type: "display" },
            ],
          },
        ],
      },
      {
        linkId: "questionnaire",
        type: "group",
        item: [
          {
            linkId: "q.1",
            text: "Question 1",
            type: "group",
            item: [
              { linkId: "q.1.1", text: "Question 1.1", type: "string" },
              { linkId: "q.1.2", text: "Question 1.2", type: "string" },
              { linkId: "q.1.3", text: "Question 1.3", type: "string" },
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
            text: "Consent",
            type: "group",
            item: [{ linkId: "c.1.1", text: "Consent 1.1", type: "display" }],
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
    questionnaireSections,
    consentSections,
  };
}
