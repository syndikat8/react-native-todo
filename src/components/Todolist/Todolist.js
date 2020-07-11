import React from "react";
import { View} from "react-native";
import { TodolistTasks } from "./TodolistTasks/TodolistTasks";
import { TodolistHeader } from "./TodolistHeader/TodolistHeader";


export const Todolist = () => {
  return (
    <View>
      <TodolistHeader/>
      <TodolistTasks />
    </View>
  );
};
