import React from "react";
import { View, StyleSheet, SectionList } from "react-native";
import renderSectionHeader from "../../../utils/renderSectionHeader";

export default function SectionListComponent({ sections, renderItem }) {
  return (
    <View style={styles.sectionListContainer}>
      <SectionList
        style={styles.sectionList}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionListContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "75%",
    backgroundColor: "yellow",
  },
  sectionList: {
    flex: 1,
    width: "100%",
    backgroundColor: "green",
  },
});
