import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";
import { Icon } from "native-base";
import { Button } from "react-native-elements";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";

export default class TopHeader extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../src/StrangerThings.png")}
        style={styles.container}
      >
        <View
          style={{
            flexDirection: "row",
            width: Dimensions.get("window").width
          }}
        >
          <TopContainer />
        </View>

        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0
          }}
        >
          <BottomContainer />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageLogo: {
    height: 50,
    width: 27
  },
  container: {
    // flex: 1,
    flexDirection: "column",
    height: 500,
    alignItems: "flex-start",
    marginBottom: 50
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
