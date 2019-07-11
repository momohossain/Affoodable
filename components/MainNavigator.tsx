import { createStackNavigator } from "react-navigation";
import TabsNavigator from "./TabsNavigator";
import RestaurantProfileView from "./RestaurantProfileView";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: TabsNavigator
    },
    RestaurantProfileView: {
      screen: RestaurantProfileView
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default MainNavigator;
