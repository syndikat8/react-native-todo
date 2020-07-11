import React from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "./Navbar/Navbar";
import { Todolist } from "./Todolist/Todolist";

export const Main = () => {
  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <Todolist />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    height: "90%",
  },
});
