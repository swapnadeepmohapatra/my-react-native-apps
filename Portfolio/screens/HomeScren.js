import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TypeWriter from "react-native-typewriter";

export default class HomeScren extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TypeWriter typing={1}>Hello World!</TypeWriter>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
