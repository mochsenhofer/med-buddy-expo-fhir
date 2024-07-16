import React from "react";
import { KeyboardAvoidingView, SectionList, StyleSheet } from "react-native";
import renderSectionHeader from "../../utils/renderFunctions/renderSectionHeader";

export default function Section({ sections, renderItem }) {
  return (
    <KeyboardAvoidingView style={styles.sectionContainer} behavior="padding">
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        scrollEnabled={false}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "75%",
    backgroundColor: "yellow",
  },
  headerText: {
    color: "white",
    textAlign: "center",
  },
});
