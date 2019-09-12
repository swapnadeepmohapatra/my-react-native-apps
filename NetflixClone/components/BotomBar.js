import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Button } from "react-native-elements";

export default class BotomBar extends Component {
  render() {
    return (
      <View style={styles.containerTop}>
        <TouchableOpacity
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <Icon name="home" style={{ fontSize: 25, color: "#c1c1c1" }} />
          <Text style={{ fontSize: 10, color: "#c1c1c1" }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <Icon name="search" style={{ fontSize: 25, color: "#c1c1c1" }} />
          <Text style={{ fontSize: 10, color: "#c1c1c1" }}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <Icon name="youtube" style={{ fontSize: 25, color: "#c1c1c1" }} />
          <Text style={{ fontSize: 10, color: "#c1c1c1" }}>Commig Soon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <Icon name="arrow-down" style={{ fontSize: 25, color: "#c1c1c1" }} />
          <Text style={{ fontSize: 10, color: "#c1c1c1" }}>Downloads</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <Icon
            name="align-justify"
            style={{ fontSize: 25, color: "#c1c1c1" }}
          />
          <Text style={{ fontSize: 10, color: "#c1c1c1" }}>More</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerTop: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#000"
  }
});
