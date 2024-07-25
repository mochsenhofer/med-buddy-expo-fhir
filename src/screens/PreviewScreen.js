import React from "react";
import BasicLayoutNoFooterNavigation from "../components/common/BasicLayoutNoFooterNavigation";
import renderPreviewScreenItem from "../utils/renderPreviewScreenItem";
import { useNavigation } from "@react-navigation/native";
import {
  videoScreenRoute,
  questionnaireScreenRoute,
} from "../navigation/Navigation";
import { useSelector } from "react-redux";

export default function PreviewScreen() {
  const navigation = useNavigation();
  const registeredPatient = useSelector((state) => state.patient);
  const previewScreenData = [
    {
      title: "Preview",
      data: [
        {
          text: registeredPatient.name[0].given[0],
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
