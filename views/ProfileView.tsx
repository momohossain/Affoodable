import React, { Component } from 'react';
import { View, Text, StyleSheet,  AppRegistry, FlatList, Image, ScrollView, SafeAreaView } from 'react-native';
import { Avatar, Card, Button, Icon, Rating, AirbnbRating } from 'react-native-elements';
import styles from "../styles/ProfileView";

class ProfileView extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.container}>
            <View style={styles.centered}>
              <Avatar rounded
                size="medium"
                title="AF"
              />
            </View>
            <View style={styles.account}>
              <Text>30 Reviews</Text>
              <Text>50 Following</Text>
            </View>
            <FlatList
              data={[
                {key: 'My Deals'},
                {key: 'Notification Settings'},
                {key: 'Privacy Settings'},
                {key: 'Logout'},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ProfileView;