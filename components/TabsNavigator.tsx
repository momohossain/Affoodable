import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import HomeView from "../views/HomeView";
import SearchView from "../views/SearchView";
import ProfileView from "../views/ProfileView";

const TabsNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeView,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../img/house-outline.png")}
          style={{ width: 15, height: 15, marginBottom: -10 }}
        />
      )
    }
  },
  Search: {
    screen: SearchView,
    navigationOptions: {
      tabBarLabel: "Search",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../img/search.png")}
          style={{ width: 15, height: 15, marginBottom: -10 }}
        />
      )
    }
  },
  Profile: {
    screen: ProfileView,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../img/avatar.png")}
          style={{ width: 15, height: 15, marginBottom: -10 }}
        />
      ),
      headerVisible: false
    }
  }
});

export default TabsNavigator;
