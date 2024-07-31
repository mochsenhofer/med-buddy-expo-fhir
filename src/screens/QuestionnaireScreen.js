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
import { FIREBASE_DB } from "../firebase/firebase";
import { push, ref, set } from "firebase/database";
import { Alert } from "react-native";

import {
  updateValueInteger,
  updateValueString,
  updateValueCoding,
  updatePatient,
  updateQuestionnaire,
  updateQuestionnaireResponseStatus,
} from "../store/questionnaireResponseReducer";
import useLanguage from "../hooks/useLanguage";

export default function QuestionnaireScreen() {
  const navigation = useNavigation();
  const language = useLanguage();
  const [page, setPage] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [c11Error, setC11Error] = useState(false);
  const [c21Error, setC21Error] = useState(false);
  const { informationSections, Questionnaire } = useQuestionnaireData();
  const questionnaireSections = useQuestionnaireSections();
  const overviewSections = useOverviewSections();
  const dispatch = useDispatch();
  const questionnaireResponseState = useSelector(
    (state) => state.questionnaireResponse
  );
  const registeredPatient = useSelector((state) => state.patient);

  const canvasRef = useRef(null);

  function uploadQuestionnaireResponse() {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => uploadCompletedQuestionnaire() },
    ]);
  }

  async function uploadCompletedQuestionnaire() {
    try {
      const db = FIREBASE_DB;
      const questionnaireResponseRef = ref(db, "questionnaireResponses");
      const newQuestionnaireResponseRef = push(questionnaireResponseRef);

      await set(newQuestionnaireResponseRef, {
        ...questionnaireResponseState,
        id: newQuestionnaireResponseRef.key,
        questionnaire: language,
      });

      console.log("Data uploaded successfully");
    } catch (error) {
      console.error("Error adding document: ", error.message);
      Alert.alert("Upload Error", "Failed to upload data. Please try again.");
    } finally {
      navigation.navigate(overviewScreenRoute);
    }
  }

  const questionnaireText = texts[language].questionnaireScreen.questionnaire;
  const consentText = texts[language].questionnaireScreen.consent;

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
          onSelect: (value) => {
            dispatch(updateValueCoding({ linkId: "c.1.1", value }));
            setC11Error(false); // Reset error state on value change
          },
          answerOption: [
            { valueCoding: { code: "Y", display: questionnaireText["q.yes"] } },
            { valueCoding: { code: "N", display: questionnaireText["q.no"] } },
          ],
          error: c11Error,
          errorMessage: consentText.errors["c.1.1"],
        },
      ],
    },
    {
      title: consentText["c.2"],
      data: [
        {
          linkId: "c.2.1",
          text: consentText["c.2.1"],
          type: "string",
          ref: canvasRef,
          clear: () => canvasRef.current?.clear(),
          save: () => handleSaveSignature(),
          onPathsChange: () => setC21Error(false),
          error: c21Error,
          errorMessage: consentText.errors["c.2.1"],
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

  const renderItemFunctions = [
    renderQuestionItem,
    renderQuestionItem,
    renderOverviewItem,
    renderConsentItem,
  ];

  const sections = allSections[sectionIndex];
  const currentSection = sectionIndex === 2 ? sections : [sections[page]];

  function onNextButtonPress() {
    switch (sectionIndex) {
      case 0:
        if (page < informationSections.length - 1) {
          setPage(page + 1);
        } else {
          setSectionIndex(sectionIndex + 1);
          setPage(0);
        }
        break;
      case 1:
        if (page < questionnaireSections.length - 1) {
          setPage(page + 1);
        } else {
          setSectionIndex(sectionIndex + 1);
          setPage(0);
        }
        break;
      case 2:
        setSectionIndex(sectionIndex + 1);
        setPage(0);
        break;
      case 3:
        if (page < consentSections.length - 1) {
          // Validation for c.1.1
          const valueC11 = getValueByLinkId("valueCoding", "c.1.1");
          if (valueC11 !== "Y") {
            setC11Error(true);
          } else {
            setPage(page + 1);
          }
        } else {
          handleSaveSignature();
          uploadQuestionnaireResponse();
          console.log("Questionnaire Response", questionnaireResponseState);
        }

        break;

      default:
        break;
    }
  }

  async function handleSaveSignature() {
    const signature = await canvasRef.current?.getSvg();
    dispatch(updateValueString({ linkId: "c.2.1", value: signature }));
    dispatch(updatePatient(registeredPatient));
    dispatch(updateQuestionnaire(Questionnaire));
    dispatch(updateQuestionnaireResponseStatus("completed"));
  }

  function onBackButtonPress() {
    switch (sectionIndex) {
      case 0:
        if (page === 0) {
          navigation.goBack();
        } else {
          setPage(page - 1);
        }
        break;
      case 1:
        if (page === 0) {
          setSectionIndex(sectionIndex - 1);
          setPage(informationSections.length - 1);
        } else {
          setPage(page - 1);
        }
        break;
      case 2:
        setSectionIndex(sectionIndex - 1);
        setPage(questionnaireSections.length - 1);
        break;
      case 3:
        if (page === 0) {
          setSectionIndex(sectionIndex - 1);
          setPage(0);
        } else {
          setPage(page - 1);
        }
        break;
      default:
        break;
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
