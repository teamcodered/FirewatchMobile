/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import R from 'ramda';

import Api from './services/Api.js';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'heya'
  };
  render() {
    return (
      <View></View>
    );
  };
};

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          key="chungus"
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
        }}
         title="mephistopheles"/>
         </MapView>
    </View>
  );
};

const MainNavigator = createDrawerNavigator({
  Map: {screen: MapScreen},
  Home: {screen: HomeScreen},
});
                      //we'll wait on this until post-mvp
const App = MapScreen //createAppContainer(MainNavigator);

Api.patch('/2', {phenomena: 'wildfire'});

Api.get()
   .then(R.prop('data'))
   .then(R.tap(console.log));

export default App;
