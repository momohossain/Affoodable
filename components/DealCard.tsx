import styles from "../styles/RestaurantCard";
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

const DealCard = ({ title, img, description, updated, original }) => {
  return (
    <View style={styles.cardContainer}>
        <Card>
          <Text style={styles.title}>
            {"\n"}
            {title}
          </Text>
          <Image source={img} style={styles.images} />
          <Text>
            {description}
            {"\n"}
            $ {updated}
            {"\n"}
        </Text>
        <Text style={{ textDecorationLine: 'line-through' }}>
            $ {original}
        </Text>
        </Card>
    </View>
  );
};

export default DealCard;
