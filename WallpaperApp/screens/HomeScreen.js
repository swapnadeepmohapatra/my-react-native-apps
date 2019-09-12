import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
  YellowBox
} from "react-native";
import * as firebase from "firebase";
import { Entypo } from "@expo/vector-icons";
import { Card, ListItem, Button, Icon, Header } from "react-native-elements";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    self = this;
  }

  static navigationOptions = {
    title: "Categories",
    tabBarIcon: <Entypo name="news" size={20} />
  };

  componentWillMount() {
    this.getData();
    YellowBox.ignoreWarnings(["Require cycle:", "Setting a timer"]);
  }

  getData = () => {
    firebase
      .database()
      .ref()
      .child("categories")
      .on("value", dataSnapshot => {
        let catList = Object.values(dataSnapshot.val());
        this.setState({ data: catList });
      });
    this.forceUpdate();
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: "Categories", style: { color: "#fff" } }}
        />
        <FlatList
          data={this.state.data}
          numColumns={2}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => {
            return (
              <Card
                title={item.desc}
                containerStyle={{
                  padding: 0,
                  width: 150,
                  height: 200
                }}
                image={{ uri: item.thumbnail }}
              />
            );
          }}
        />
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
