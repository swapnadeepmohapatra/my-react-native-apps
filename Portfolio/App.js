import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScren";

const MainNvigator = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    defaultNavigationOptions: {
      headerTitle: "Nav",
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNvigator);
export default App;
