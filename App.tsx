import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeView from './views/HomeView'
import SearchView from './views/SearchView'
import ProfileView from './views/ProfileView'

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeView
  },
  Search: {
    screen: SearchView
  },
  Profile: {
    screen: ProfileView
  }
});

export default createAppContainer(AppNavigator);