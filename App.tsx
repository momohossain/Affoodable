import React, { Component } from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import MainNavigator from "./components/MainNavigator";

const AppNavigator = createAppContainer(MainNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [
        {
          title: "Kendall House of Pizza",
          img: require("./img/kendall.png"),
          hours: "9:00PM",
          timestamp: "5 minutes ago"
        },
        {
          title: "Aceituna Grill",
          img: require("./img/aceituna.png"),
          hours: "8:00PM",
          timestamp: "10 minutes ago"
        },
        {
          title: "Tatte Bakery & Cafe",
          img: require("./img/tatte.png"),
          hours: "8:00PM",
          timestamp: "15 minutes ago"
        },
        {
          title: "Panda Express",
          img: require("./img/panda.png"),
          hours: "9:00PM",
          timestamp: "20 minutes ago"
        }
      ]
    };
  }
  render() {
    return (
      <AppNavigator
        screenProps={{
          restaurants: this.state.restaurants
        }}
      />
    );
  }
}
