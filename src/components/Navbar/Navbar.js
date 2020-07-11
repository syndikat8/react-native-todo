import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../theme/theme";

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: THEME.MAIN_COLOR,
    height: 60,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
