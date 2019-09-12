import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import TopHeader from "./components/TopHeader";
import BotomBar from "./components/BotomBar";
import FilmyCard from "./components/FilmyCard";
import ContentOne from "./components/ContentOne";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ marginBottom: 50 }}>
          <TopHeader />
          <ContentOne />
        </ScrollView>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            backgroundColor: "#000",
            paddingVertical: 10
          }}
        >
          <BotomBar />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  }
});
