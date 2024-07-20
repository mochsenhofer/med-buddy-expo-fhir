import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./basic_layout_components/Header";
import FlatListComponent from "./flatlist_layout_components/FlatListComponent";

export default function FlatListLayout({
  title,
  data,
  renderItem,
  numColumns,
}) {
  return (
    <View style={styles.container}>
      <Header title={title} />
      <FlatListComponent
        data={data}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
