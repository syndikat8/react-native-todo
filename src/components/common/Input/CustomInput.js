import React from "react";
import { StyleSheet, TextInput } from "react-native";

export const CustomInput = ({ ...props }) => {
  return (
    <TextInput
      maxLength={25}
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderBottomColor: "#2939ab",
    width: "75%",
    padding: 5,
    fontSize: 22,
  },
});
