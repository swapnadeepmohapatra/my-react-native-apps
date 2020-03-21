import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import DustbinNearMe from "./screens/DustbinNearMe";
import * as firebase from "firebase";
import LoadingScreen from "./screens/LoadingScreen";
import MyAccount from "./screens/MyAccount";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AnimatedViews from "./screens/AnimatedViews";
import HistoryScreen from "./screens/HistoryScreen";

var firebaseConfig = {
  apiKey: "AIzaSyBG510i9aGXHr7s3B_4JRIlqFj_CCYRc_8",
  authDomain: "iottest-89b28.firebaseapp.com",
  databaseURL: "https://iottest-89b28.firebaseio.com",
  projectId: "iottest-89b28",
  storageBucket: "iottest-89b28.appspot.com",
  messagingSenderId: "798965384427",
  appId: "1:798965384427:web:e61fd9fed805bfe3"
};
firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    NearMe: { screen: DustbinNearMe },
    Loading: { screen: LoadingScreen },
    Account: { screen: MyAccount },
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    MapView: { screen: AnimatedViews },
    History: { screen: HistoryScreen }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#1e1e1e"
        // backgroundColor: "#ECF1FF"
      }
    },
    initialRouteName: "Loading"
  }
);

const App = createAppContainer(MainNavigator);
export default App;
