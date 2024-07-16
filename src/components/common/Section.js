import React from "react";
import { KeyboardAvoidingView, SectionList } from "react-native";
import { sectionListStyles } from "../../theme/styles";
import renderSectionHeader from "../../utils/renderFunctions/renderSectionHeader";

export default function Section({ sections, renderItem }) {
  return (
    <KeyboardAvoidingView
      style={sectionListStyles.sectionContainer}
      behavior="padding"
    >
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
        scrollEnabled={true}
        style={sectionListStyles.sectionList}
      />
    </KeyboardAvoidingView>
  );
}
