import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import PickupList from "./screens/PickupList";
import * as firebase from "firebase";

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
    MapScreen: { screen: MapScreen },
    PickupList: { screen: PickupList }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#000"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;
