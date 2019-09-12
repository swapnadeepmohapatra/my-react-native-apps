import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as firebase from "firebase";

export default class LoadingScreen extends React.Component {
  componentDidMount() {
    if (firebase.auth().currentUser === null) {
      this.props.navigation.navigate("Login");
    } else {
      this.props.navigation.navigate("Home");
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
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
