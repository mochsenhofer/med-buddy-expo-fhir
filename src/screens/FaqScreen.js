import React from "react";
import { Text } from "react-native-paper";
import BasicLayout from "../components/common/BasicLayout";
import { startScreenRoute } from "../navigation/Navigation";

export default function FaqScreen() {
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
      title={"FaqScreen"}
      sections={DATA}
      renderItem={renderItem}
      navigateTo={startScreenRoute}
    />
  );
}
