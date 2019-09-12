import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Platform
} from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import ExplorePage from "./ExplorePage";
import FeaturedPage from "./FeaturedPage";
import OrdersPage from "./OrdersPage";
import ProfilePage from "./ProfilePage";

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: FeaturedPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            size={30}
            name={
              Platform.OS === "ios"
                ? focused
                  ? "ios-home"
                  : "ios-home-outline"
                : "md-home"
            }
            style={{ color: tintColor }}
          />
        ),
        tabBarLabel: " "
      }
    },
    Explore: {
      screen: ExplorePage,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            size={30}
            name={
              Platform.OS === "ios"
                ? focused
                  ? "ios-map"
                  : "ios-map-outline"
                : "md-map"
            }
            style={{ color: tintColor }}
          />
        ),
        tabBarLabel: " "
      }
    },
    Cart: {
      screen: OrdersPage,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            size={30}
            name={
              Platform.OS === "ios"
                ? focused
                  ? "ios-cart"
                  : "ios-cart-outline"
                : "md-cart"
            }
            style={{ color: tintColor }}
          />
        ),
        tabBarLabel: " "
      }
    },
    Profile: {
      screen: ProfilePage,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            size={30}
            name={
              Platform.OS === "ios"
                ? focused
                  ? "ios-preson"
                  : "ios-person-outline"
                : "md-person"
            }
            style={{ color: tintColor }}
          />
        ),
        tabBarLabel: " "
      }
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "#FFDD00",
    inactiveColor: "#696464",
    barStyle: { backgroundColor: "#fff" }
  }
);

// export default class HomePage extends React.Component {
//   static navigationOptions = {
//     header: null
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View
//           backgroundColor="#f7b71d"
//           style={{
//             height: StatusBar.currentHeight
//           }}
//         />
//       </View>
//     );
//   }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "center"
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
