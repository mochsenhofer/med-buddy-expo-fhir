import React from "react";
import BasicLayout from "../components/common/BasicLayout";
import { languageSelectionScreenRoute } from "../navigation/Navigation";
import renderItem from "../utils/renderItem";

export default function StartScreen() {
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
      title={"Start"}
      sections={DATA}
      renderItem={renderItem}
      navigateTo={languageSelectionScreenRoute}
    />
  );
}
