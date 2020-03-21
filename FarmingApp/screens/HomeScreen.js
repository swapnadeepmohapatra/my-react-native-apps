import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import Icon from "react-native-vector-icons/MaterialIcons";
import ClimatePage from "./ClimatePage";
import CalcPage from "./CalcPage";
import ImagePage from "./ImagesPage";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Loading",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "first", title: "CLIMATE" },
        { key: "second", title: "CALCULATOR" },
        { key: "third", title: "IMAGES" }
      ]
    };
    // self = this;
  }

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  logout = () => {
    firebase.auth().signOut();
    this._menu.hide();
    this.props.navigation.navigate("Loading");
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: "#1287A5",
          flex: 1
        }}
      >
        <View
          backgroundColor="#2B2B52"
          style={{
            height: StatusBar.currentHeight
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{ height: 50, justifyContent: "center", marginLeft: 20 }}
          >
            <Text style={{ color: "white", fontSize: 19 }}>e-Farming</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Icon name="search" size={27} style={styles.icons} />
            </TouchableOpacity>
            <Menu
              ref={this.setMenuRef}
              button={
                <TouchableOpacity
                  onPress={() => {
                    this.showMenu();
                  }}
                >
                  <Icon name="more-vert" size={27} style={styles.icons} />
                </TouchableOpacity>
              }
            >
              <MenuItem onPress={this.logout}>Logout</MenuItem>
            </Menu>
          </View>
        </View>
        <TabView
          style={{
            backgroundColor: "#fff"
          }}
          navigationState={this.state}
          renderScene={SceneMap({
            first: ClimatePage,
            second: CalcPage,
            third: ImagePage
          })}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{ backgroundColor: "#1287A5" }}
              indicatorStyle={{ backgroundColor: "#fff" }}
            />
          )}
          onIndexChange={index => this.setState({ index })}
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
  },
  scene: {
    flex: 1
  },
  icons: {
    paddingHorizontal: 5,
    marginLeft: 10,
    color: "#fff",
    paddingVertical: 10
  }
});
