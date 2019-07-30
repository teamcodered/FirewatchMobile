/* eslint-disable prettier/prettier */


import React, {Component} from 'react';
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


import NasaFirmFeed from '../services/Api.js'
import R from 'ramda';



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

class FireMap extends Component{

    constructor(props){
        this.state = {
            markers: []
        }
        // this.update();
    }

    update(){
        let $this = this;
        let mLens = R.lensProp('markers');
        // NasaFirmFeed.get()
        //     .then(R.prop('data'))
        //     .then(R.set(R.lensProp('marker'), R.__, $this.state))
        //     .then($this.setState);
    }

    render(){
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
                {this.state.markers.map(marker => (
                <Marker
                  key={marker.$uri}
                  coordinate={{
                    latitude: marker.longitude,
                    longitude: marker.latitude,
                  }}/>
                ))}
                 </MapView>
            </View>
        );
    };
}

export default FireMap;