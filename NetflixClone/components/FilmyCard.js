import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class FilmyCard extends Component {
  render() {
    return (
      <View style={{ marginHorizontal: 5 }}>
        <Image source={this.props.img} style={{ height: 200, width: 140 }} />
      </View>
    );
  }
}
