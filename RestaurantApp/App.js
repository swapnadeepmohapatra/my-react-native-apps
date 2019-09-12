import { createAppContainer, createStackNavigator } from "react-navigation";
import HomePage from "./screens/HomePage";
import LoadingPage from "./screens/LoadingPage";
import * as firebase from "firebase";
import SignInPage from "./screens/SignInPage";
import SignUpPage from "./screens/SignUpPage";

var firebaseConfig = {
  apiKey: "AIzaSyC0PKBySh9M_Mh_YR5zJI9jJcZ7dlZmDcc",
  authDomain: "restaurants-app-deep.firebaseapp.com",
  databaseURL: "https://restaurants-app-deep.firebaseio.com",
  projectId: "restaurants-app-deep",
  storageBucket: "restaurants-app-deep.appspot.com",
  messagingSenderId: "647322002491",
  appId: "1:647322002491:web:c9e9edae82dc0ac1"
};
firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomePage },
    Loading: { screen: LoadingPage },
    Signin: { screen: SignInPage },
    Signup: { screen: SignUpPage }
  },
  {
    initialRouteName: "Loading"
  }
);

const App = createAppContainer(MainNavigator);
export default App;
