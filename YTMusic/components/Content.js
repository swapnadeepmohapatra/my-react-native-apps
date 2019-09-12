import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class Content extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          width: 155,
          marginHorizontal: 5,
          padding: 10
        }}
      >
        <Image
          source={this.props.src}
          style={{ height: 150, width: 150, borderRadius: 90 }}
        />
        <Text style={{ color: "#fff", marginTop: 5, fontSize: 18 }}>
          {this.props.text}
        </Text>
        <Text style={{ color: "#c1c1c1", marginTop: 3, fontSize: 14 }}>
          {this.props.textSnd}
        </Text>
      </View>
    );
  }
}
