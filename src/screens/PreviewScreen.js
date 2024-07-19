import React from "react";
import { Text } from "react-native-paper";
import BasicLayout from "../components/common/BasicLayout";
import { questionnaireScreenRoute } from "../navigation/Navigation";

export default function PreviewScreen() {
  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

  const renderItem = ({ item }) => <Text>{item}</Text>;

  return (
    <BasicLayout
      title={"Preview Screen"}
      sections={DATA}
      renderItem={renderItem}
      navigateTo={questionnaireScreenRoute}
    />
  );
}
