import { createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import * as firebase from "firebase";
import LoadingScreen from "./screens/LoadingScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import DetailsScreen from "./screens/DetailsScreen";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBbjYM2o_8uP8ERi3ygEVKDX-gqEQVnF_8",
  authDomain: "e-farming-9485d.firebaseapp.com",
  databaseURL: "https://e-farming-9485d.firebaseio.com",
  projectId: "e-farming-9485d",
  storageBucket: "",
  messagingSenderId: "554069679340",
  appId: "1:554069679340:web:5ea3c3ca069ce9df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Loading: { screen: LoadingScreen },
    Signin: { screen: SignInScreen },
    Signup: { screen: SignUpScreen },
    Details: { screen: DetailsScreen }
  },
  {
    initialRouteName: "Loading"
  }
);

const App = createAppContainer(MainNavigator);
export default App;
