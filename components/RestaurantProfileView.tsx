import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

class RestaurantProfileView extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>
          {"\n"}
          {"\n"}
        </Text>

        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <MaterialCommunityIcons name="window-close" size={30} />
        </TouchableOpacity>
        <Text>This is a restaurant profile.</Text>
      </View>
    );
  }
}

export default RestaurantProfileView;
