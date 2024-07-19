import React from "react";
import BasicLayout from "../components/common/BasicLayout";
import { overviewScreenRoute } from "../navigation/Navigation";
import renderItem from "../utils/renderItem";

export default function QuestionnaireScreen() {
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

  return (
    <BasicLayout
      title={"QuestionnaireScreen"}
      sections={DATA}
      renderItem={renderItem}
      navigateTo={overviewScreenRoute}
    />
  );
}
