import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touch}>
          <Icon name="home" size={27} color="#fff" style={styles.icons} />
          <Text style={styles.textActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <Icon
            name="whatshot"
            size={27}
            color="#c1c1c1"
            style={styles.icons}
          />
          <Text style={styles.text}>Hotlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <Icon
            name="library-music"
            size={27}
            color="#c1c1c1"
            style={styles.icons}
          />
          <Text style={styles.text}>Library</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1d1d1d",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  icons: {
    paddingHorizontal: 5
  },
  touch: {
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    paddingTop: 1,
    color: "#c1c1c1"
  },
  textActive: {
    fontSize: 12,
    textAlign: "center",
    paddingTop: 1,
    color: "#ffffff"
  }
});
