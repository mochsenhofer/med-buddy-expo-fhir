import React from "react";
import { KeyboardAvoidingView, StyleSheet, FlatList } from "react-native";

export default function FlatListComponent({ data, renderItem, numColumns }) {
  return (
    <KeyboardAvoidingView style={styles.flatListContainer} behavior="padding">
      <FlatList
        style={styles.flatList}
        data={data}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 4,
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  flatList: {
    flex: 1,
    width: "100%",
  },
});
