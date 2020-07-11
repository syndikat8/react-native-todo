import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { Main } from "./src/components/Main";
import { store } from "./src/redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Main />
      </View>
    </Provider>
  );
};

export default App;
