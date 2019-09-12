import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as firebase from "firebase";
import { BackgroundCarousel } from "../components/BackgroundCarousel";

var images = [
  "https://firebasestorage.googleapis.com/v0/b/restaurants-app-deep.appspot.com/o/offer-1.png?alt=media&token=be254c1d-3ee7-48a8-b70b-74494625e441",
  "https://firebasestorage.googleapis.com/v0/b/restaurants-app-deep.appspot.com/o/offer1.png?alt=media&token=499ae821-b9ac-48bc-8636-5cee12af3cd9",
  "https://firebasestorage.googleapis.com/v0/b/restaurants-app-deep.appspot.com/o/offer3.png?alt=media&token=4c4c8fbd-ff88-4d91-8d3d-b1d647038d82",
  "https://firebasestorage.googleapis.com/v0/b/restaurants-app-deep.appspot.com/o/offer4.png?alt=media&token=17c13f52-c838-4c38-ba78-0bb53d72616c"
];
export default class FeaturedPage extends React.Component {
  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("offers")
      .on("value", dataSnapshot => {
        console.log(dataSnapshot);
      });
  }
  static navigationOptions = {
    title: "Loading",
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <BackgroundCarousel images={images} />
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
