import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as firebase from "firebase";

export default class ProfilePage extends React.Component {
  static navigationOptions = {
    title: "Loading",
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>ProfilePage</Text>
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
