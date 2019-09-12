import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
});

const App = createAppContainer(MainNavigator);
export default App;
