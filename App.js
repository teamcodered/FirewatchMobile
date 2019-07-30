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

import FireMap from './components/FireMap.js';

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
    <FireMap />
  );
};

const MainNavigator = createDrawerNavigator({
  Map: {screen: MapScreen},
  Home: {screen: HomeScreen},
});
                      //we'll wait on this until post-mvp
const App = MapScreen //createAppContainer(MainNavigator);

export default App;
