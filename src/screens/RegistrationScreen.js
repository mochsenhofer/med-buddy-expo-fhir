import React, { useRef } from "react";
import BasicLayout from "../components/common/BasicLayout";
import { previewScreenRoute } from "../navigation/Navigation";
import renderQuestionItem from "../utils/renderQuestionItem";

export default function RegistrationScreen() {
  const lastNameRef = useRef(null);
  const insuranceNumberRef = useRef(null);
  const dobRef = useRef(null);

  const registrationScreenData = [
    {
      title: "Please provide your personal information: ",
      data: [
        {
          linkId: "p.1",
          text: "First Name",
          value: "",
          type: "string",
          onChangeText: (text) => console.log(text),
          onSubmitEditing: () => lastNameRef.current.focus(),
          autoFocus: true,
        },
        {
          linkId: "p.2",
          text: "Last Name",
          value: "",
          type: "string",
          ref: lastNameRef,
          onSubmitEditing: () => insuranceNumberRef.current.focus(),
          onChangeText: (text) => console.log(text),
        },
        {
          linkId: "p.3",
          text: "Insurance Number",
          value: "",
          type: "integer",
          ref: insuranceNumberRef,
          maxLength: 10,
          onChangeText: (text) => console.log(text),
        },
        {
          linkId: "p.4",
          text: "Date of Birth",
          value: "",
          type: "date",
        },
        {
          linkId: "p.5",
          text: "Gender",
          value: "",
          type: "choice",
        },
      ],
    },
  ];

  return (
    <BasicLayout
      title={"Registration"}
      sections={registrationScreenData}
      renderItem={renderQuestionItem}
      navigateTo={previewScreenRoute}
    />
  );
}
