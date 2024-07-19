import React from "react";
import { View, StyleSheet, SectionList } from "react-native";
import renderSectionHeader from "../../../utils/renderSectionHeader";

export default function CenteredSectionListComponent({
  sections,
  renderItem,
  numColumns,
}) {
  return (
    <View style={styles.sectionListContainer}>
      <SectionList
        style={styles.sectionList}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        numColumns={numColumns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionListContainer: {
    flex: 4,
    width: "75%",
    backgroundColor: "red",
  },
  sectionList: {
    flex: 1,
    width: "100%",
  },
});
