import React from "react";
import { KeyboardAvoidingView, StyleSheet, SectionList } from "react-native";
import renderSectionHeader from "../../../utils/renderSectionHeader";

export default function SectionListComponent({ sections, renderItem }) {
  return (
    <KeyboardAvoidingView
      style={styles.sectionListContainer}
      behavior="padding"
    >
      <SectionList
        style={styles.sectionList}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  sectionListContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "75%",
  },
  sectionList: {
    flex: 1,
    width: "100%",
  },
});
