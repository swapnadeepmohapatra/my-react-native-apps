import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { Icon } from "native-base";
import { Button } from "react-native-elements";

export default class TopContainer extends Component {
  render() {
    return (
      <View style={styles.containerTop}>
        <Image source={require("../src/logo.png")} style={styles.imageLogo} />
        <Text style={styles.text}>Series</Text>
        <Text style={styles.text}>Films</Text>
        <Text style={styles.text}>My List</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageLogo: {
    height: 40,
    width: 23,
    marginTop: 2
  },
  container: {
    // flex: 1,
    flexDirection: "row",
    // justifyContent: "space-around",
    height: 500,
    alignItems: "flex-start"
  },
  text: {
    color: "white",
    fontSize: 17
  },
  containerTop: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    marginTop: 30
  },
  containerBottom: { position: "absolute" }
});
