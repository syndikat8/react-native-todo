import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { CustomButton } from "../../common/Button/CustomButton";
import { CustomInput } from "../../common/Input/CustomInput";
import { addTask } from "../../../redux/todoReducer";
import { useDispatch } from "react-redux";
import { THEME } from "../../../theme/theme";

export const TodolistHeader = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onButtonPress = () => {
    if (!value) {
      Alert.alert(
        "Error",
        "Sorry, but the title cannot be empty.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setValue("");
      dispatch(addTask(value));
    }
  };

  return (
    <View style={styles.todolistHeader}>
      <CustomInput
        value={value}
        onChangeText={setValue}
        placeholder="Enter the title"
      />
      <CustomButton
        title="add"
        onPress={onButtonPress}
        color={THEME.BLUE_COLOR_BUTTON}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todolistHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});
