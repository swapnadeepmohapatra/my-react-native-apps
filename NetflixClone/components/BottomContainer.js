import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from "react-native-elements";

export default class BottomContainer extends Component {
  render() {
    return (
      <View style={styles.containerTop}>
        <TouchableOpacity
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <Icon name="add" style={{ fontSize: 30, color: "#c1c1c1" }} />
          <Text style={{ fontSize: 15, color: "#c1c1c1" }}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f1f1f1",
            padding: 7,
            paddingRight: 15
          }}
        >
          <Icon name="play-arrow" style={{ fontSize: 30, color: "#000" }} />
          <Text style={{ fontSize: 15, color: "#000", fontWeight: "700" }}>
            Play
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <Icon name="info" style={{ fontSize: 30, color: "#c1c1c1" }} />
          <Text style={{ fontSize: 15, color: "#a1a1a1" }}>Info</Text>
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
    marginTop: 30
  }
});
