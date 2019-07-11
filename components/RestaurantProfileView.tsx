import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { Avatar, Card, Button, Icon, Rating, AirbnbRating, Input } from 'react-native-elements';
import DealCard from "../components/DealCard";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/RestaurantProfileView";


class RestaurantProfileView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <MaterialCommunityIcons name="window-close" size={30} />
          </TouchableOpacity>
            {/* Main card for restuarants page */} 
            <Card
              image={require('../img/panda.png')}>
              <Text style={styles.restaurantTitle}>Restaurant A</Text>
              <View style={styles.rating}>
                <Rating
                  ratingCount={5}
                  readonly={true}
                  startingValue={5}
                  imageSize={25}
                />
                <Text style={styles.stars}>22 reviews</Text> 
              </View>
              <Text>American • $ • 1.0 miles</Text>
              <Text>Open until 9:00PM</Text>
            </Card>

            {/* Section for Current Deals */}
            {this.props.screenProps.deals.map((deal, index) => (
            <DealCard
              key={index}
              title={deal.title}
              img={deal.img}
              description={deal.description}
              updated={deal.updated}
              original={deal.original}
            />
            ))}

            {/* Section for Past Deals */}
            <Text style={styles.section}>Past Deals</Text>
            {this.props.screenProps.deals.map((deal, index) => (
            <DealCard
              key={index}
              title={deal.title}
              img={deal.img}
              description={deal.description}
              updated={deal.updated}
              original={deal.original}
            />
            ))}

            {/* Section for Reviews */}
            <Text style={styles.section}>Reviews</Text>
            <Input
              placeholder='Enter review here'
            />
            <Rating
              ratingCount={5}
              imageSize={25}
            />
            <Button
              title="Solid Button"
            />
          </ScrollView>
      </SafeAreaView>
    );
  }
}

export default RestaurantProfileView;
