import React from "react";
import { KeyboardAvoidingView, SectionList, StyleSheet } from "react-native";
import renderSectionHeader from "../../utils/renderFunctions/renderSectionHeader";
import { sectionListStyles } from "../../theme/styles";

export default function CenteredSection({ sections, renderItem, numColumns }) {
  return (
    <KeyboardAvoidingView
      style={[
        sectionListStyles.sectionContainer,
        { justifyContent: "center", alignItems: "center" },
      ]}
      behavior="padding"
    >
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        scrollEnabled={false}
        numColumns={numColumns}
        style={sectionListStyles.sectionList}
      />
    </KeyboardAvoidingView>
  );
}
