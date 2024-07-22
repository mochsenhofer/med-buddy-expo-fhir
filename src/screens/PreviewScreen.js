import React from "react";
import BasicLayoutNoFooterNavigation from "../components/common/BasicLayoutNoFooterNavigation";
import renderPreviewScreenItem from "../utils/renderPreviewScreenItem";
import { useNavigation } from "@react-navigation/native";
import {
  videoScreenRoute,
  questionnaireScreenRoute,
} from "../navigation/Navigation";

export default function PreviewScreen() {
  const navigation = useNavigation();
  const previewScreenData = [
    {
      title: "Preview",
      data: [
        {
          text: "Information",
          videoTitle: "Video",
          readInfoTitle: "Information",
          onVideoClick: () => navigation.navigate(videoScreenRoute),
          onReadInfoClick: () => navigation.navigate(questionnaireScreenRoute),
        },
      ],
    },
  ];

  return (
    <BasicLayoutNoFooterNavigation
      title={"Preview Screen"}
      sections={previewScreenData}
      renderItem={renderPreviewScreenItem}
      navigateTo={questionnaireScreenRoute}
    />
  );
}
