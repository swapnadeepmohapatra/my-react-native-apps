import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import * as firebase from "firebase";
import SettingsScreen from "./screens/SettingsScreen";

var firebaseConfig = {
  apiKey: "AIzaSyDTH-Cu-ddpSpd_r7XvlHtyqHgmDrfxiHE",
  authDomain: "mywallpaperapp-804a5.firebaseapp.com",
  databaseURL: "https://mywallpaperapp-804a5.firebaseio.com",
  projectId: "mywallpaperapp-804a5",
  storageBucket: "mywallpaperapp-804a5.appspot.com",
  messagingSenderId: "414016736685",
  appId: "1:414016736685:web:6969604ba1d82306"
};

firebase.initializeApp(firebaseConfig);

const MainNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    defaultNavigationOptions: {}
  }
);

const App = createAppContainer(MainNavigator);
export default App;
