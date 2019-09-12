import { createAppContainer, createStackNavigator } from "react-navigation";
import * as firebase from "firebase";
import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

var firebaseConfig = {
  apiKey: "AIzaSyCgTGl14dLHkf6i4YFVZt26F4roowg3piE",
  authDomain: "rn-firebaseauth-b57c2.firebaseapp.com",
  databaseURL: "https://rn-firebaseauth-b57c2.firebaseio.com",
  projectId: "rn-firebaseauth-b57c2",
  storageBucket: "",
  messagingSenderId: "721244262945",
  appId: "1:721244262945:web:1e47fb5adc56d496"
};
firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
    Loading: { screen: LoadingScreen },
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;
