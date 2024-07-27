import { useNavigation } from "@react-navigation/native";
import React from "react";
import BasicLayoutNoFooterNavigation from "../components/common/BasicLayoutNoFooterNavigation";
import useLanguage from "../hooks/useLanguage";
import { texts } from "../languages/texts";
import {
  questionnaireScreenRoute,
  videoScreenRoute,
} from "../navigation/Navigation";
import renderPreviewScreenItem from "../utils/renderPreviewScreenItem";

export default function PreviewScreen() {
  const navigation = useNavigation();
  const language = useLanguage();
  const previewText = texts[language].previewScreen;
  const previewScreenData = [
    {
      title: previewText.title,
      data: [
        {
          text: previewText.description,
          videoTitle: previewText.watchVideo,
          readInfoTitle: previewText.readInformation,
          onVideoClick: () => navigation.navigate(videoScreenRoute),
          onReadInfoClick: () => navigation.navigate(questionnaireScreenRoute),
        },
      ],
    },
  ];

  return (
    <BasicLayoutNoFooterNavigation
      sections={previewScreenData}
      renderItem={renderPreviewScreenItem}
      navigateTo={questionnaireScreenRoute}
    />
  );
}
