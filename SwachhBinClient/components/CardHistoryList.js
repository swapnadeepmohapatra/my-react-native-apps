import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default class CardHistoryList extends Component {
  getDate = () => {
    nowDate = this.dateMoney.props.cardDate;
    // for (var i = 0;i<nowDate.lenght; i++){
    //     if (nowDate.charAt(i) === '_'){
    //         nowDate.charAt(i) = ''
    //     }
    // }
    nowDate = nowDate.replace("_", "/");
    return nowDate;
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 50,
            width: Dimensions.get("screen").width - 30,
            backgroundColor: "#EAF0F1",
            borderRadius: 10,
            // elevation: 5,
            // marginTop: 10,
            flexDirection: "row",
            marginVertical: 10
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#42b883",
              marginStart: 10,
              marginTop: 5
            }}
          >
            +{this.props.dateMoney.cardNumber} Points
          </Text>
          <Text style={{ alignSelf: "flex-end", bottom: 0 }}>
            {this.props.dateMoney.cardDate.replace("_", "/")}
          </Text>
          <View
            style={{
              width: Dimensions.get("window").width - 50,
              height: 0.25,
              marginTop: 5,
              backgroundColor: "#EAF0F1",
              alignSelf: "center"
            }}
          />
        </View>
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
