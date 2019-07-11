import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class SearchView extends Component {
  render() {
    return (
      <SafeAreaView>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});

export default SearchView;