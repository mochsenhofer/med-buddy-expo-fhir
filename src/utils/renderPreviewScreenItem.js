import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { p, h2 } from "../theme/constants";
import Entypo from "@expo/vector-icons/Entypo";

export default function renderPreviewScreenItem({ item }) {
  const theme = useTheme();
  return (
    <>
      <Text variant={p}>{item.text}</Text>
      <View style={styles.boxContainer}>
        <TouchableOpacity
          style={[styles.box, { borderColor: theme.colors.primary }]}
          elevation={2}
          onPress={item.onVideoClick}
        >
          <Text style={styles.boxHeading} variant={h2}>
            {item.videoTitle}
          </Text>
          <Entypo name="video" size={200} color={theme.colors.text} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, { borderColor: theme.colors.primary }]}
          elevation={2}
          onPress={item.onReadInfoClick}
        >
          <Text style={styles.boxHeading} variant={h2}>
            {item.readInfoTitle}
          </Text>
          <Entypo name="open-book" size={200} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  box: {
    flex: 1,
    width: 350,
    height: 350,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 25,
    borderWidth: 5,
    margin: 25,
  },
  boxHeading: {
    marginTop: 25,
    marginBottom: 25,
  },
});
