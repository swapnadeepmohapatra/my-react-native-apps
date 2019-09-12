import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import FilmyCard from "./FilmyCard";

export default class ContentOne extends Component {
  render() {
    return (
      <View>
        <Text style={{ color: "white", padding: 10, fontSize: 20 }}>
          New Releases
        </Text>
        <ScrollView horizontal>
          <FilmyCard img={require("../src/film/sacredGames.jpg")} />
          <FilmyCard img={require("../src/film/strangerthings.jpg")} />
          <FilmyCard img={require("../src/film/13ReasonsWhy.jpg")} />
          <FilmyCard img={require("../src/film/barry.jpg")} />
        </ScrollView>
      </View>
    );
  }
}
