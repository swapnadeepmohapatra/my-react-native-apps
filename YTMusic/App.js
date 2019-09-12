import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TopHeader from "./components/TopHeader";
import Content from "./components/Content";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import ChannelArt from "./components/ChannelArt";
import Navbar from "./components/Navbar";

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TopHeader />
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "bold",
              fontFamily: Font.Roboto,
              padding: 10
            }}
          >
            Your favorites
          </Text>
          <ScrollView horizontal>
            <ChannelArt
              src={require("./src/covers/mixtape.jpg")}
              text="Your Mixtape"
              textSnd="Endless personalized music"
            />
            <Content
              src={require("./src/covers/adele.jpg")}
              text="Adele"
              textSnd="19M subscribers"
            />
            <Content
              src={require("./src/covers/zyan.jpg")}
              text="Zyan Malik"
              textSnd="15M subscribers"
            />
          </ScrollView>
          <Text
            style={{
              color: "#c1c1c1",
              fontSize: 16,
              fontFamily: Font.Roboto,
              paddingLeft: 10,
              paddingTop: 10
            }}
          >
            SIMILAR TO
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "bold",
              fontFamily: Font.Roboto,
              paddingBottom: 10,
              paddingStart: 10
            }}
          >
            Adele
          </Text>
          <ScrollView horizontal>
            <Content
              src={require("./src/covers/zyan.jpg")}
              text="Zyan Malik"
              textSnd="15M subscribers"
            />
            <Content
              src={require("./src/covers/charliePuth.png")}
              text="Charlie Puth"
              textSnd="16M subscribers"
            />
            <Content
              src={require("./src/covers/nehaKakkar.jpg")}
              text="Neha Kakkar"
              textSnd="9M subscribers"
            />
            <Content
              src={require("./src/covers/demiLovato.jpg")}
              text="Demi Lovato"
              textSnd="2.4M subscribers"
            />
            <Content
              src={require("./src/covers/arijit.jpg")}
              text="Arijit Singh"
              textSnd="2M subscribers"
            />
            <Content
              src={require("./src/covers/arijit.jpg")}
              text="Arijit Singh"
              textSnd="2M subscribers"
            />
          </ScrollView>
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "bold",
              fontFamily: Font.Roboto,
              padding: 10
            }}
          >
            Relaxing
          </Text>
          <ScrollView horizontal>
            <ChannelArt
              src={require("./src/covers/lifeisgood.jpg")}
              text="Life is good"
              textSnd="Playlist • YouTube Music"
            />
            <ChannelArt
              src={require("./src/covers/happysongs.jpg")}
              text="Happy Songs"
              textSnd="Playlist • YouTube Music"
            />
            <ChannelArt
              src={require("./src/covers/pop.png")}
              text="Pop Serenades"
              textSnd="Playlist • YouTube Music"
            />
          </ScrollView>
        </ScrollView>
        <Navbar />
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
