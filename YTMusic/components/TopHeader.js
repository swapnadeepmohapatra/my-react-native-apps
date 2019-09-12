import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class TopHeader extends Component {
  openDia = () => {
    alert("done");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image
            style={styles.logo}
            source={require("../src/covers/logo.webp")}
          />
          <View style={styles.moveRight}>
            <TouchableOpacity>
              <Icon name="search" size={27} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="account-circle" size={27} style={styles.icons} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  navbar: {
    marginTop: 28,
    height: 55,
    backgroundColor: "#282828",
    elevation: 3,

    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    height: 37,
    width: 142,
    marginLeft: -20
  },
  moveRight: {
    flexDirection: "row"
  },
  icons: {
    paddingHorizontal: 5,
    marginLeft: 10,
    color: "#fff"
  }
});
