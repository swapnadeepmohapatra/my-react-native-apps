import React from "react";
import { Text, View, StatusBar } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import NewsPage from "./NewsPage";
import AllPage from "./AllPage";
import TechPage from "./TechPage";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "first", title: "ALL" },
        { key: "second", title: "TECH" },
        { key: "third", title: "SPACE" }
      ]
    };
    // self = this;
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: "#000000",
          flex: 1
        }}
      >
        <View
          backgroundColor="#000000"
          style={{
            height: StatusBar.currentHeight
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{ height: 50, justifyContent: "center", marginLeft: 20 }}
          >
            <Text
              style={{ color: "white", fontSize: 19, fontFamily: "Roboto" }}
            >
              Yo News
            </Text>
          </View>
        </View>
        <TabView
          style={{
            backgroundColor: "#1e1e1e"
            // backgroundColor: "#333333"
          }}
          navigationState={this.state}
          renderScene={SceneMap({
            first: AllPage,
            second: TechPage,
            third: NewsPage
          })}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{ backgroundColor: "#000000" }}
              indicatorStyle={{ backgroundColor: "#FACD03" }}
            />
          )}
          onIndexChange={index => this.setState({ index })}
        />
      </View>
    );
  }
}
