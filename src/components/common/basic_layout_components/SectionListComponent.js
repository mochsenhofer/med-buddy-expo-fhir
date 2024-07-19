import React from "react";
import { View, StyleSheet, SectionList } from "react-native";
import { Text } from "react-native-paper";

export default function SectionListComponent({ sections, renderItem }) {
  return (
    <View style={styles.sectionListContainer}>
      <SectionList
        style={styles.sectionList}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        )}
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
