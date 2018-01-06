// // import React, { Component } from 'react';
// // import { View, Button } from 'react-native';
// // import ActionButton from 'react-native-action-button';
// // // import Icon from 'react-native-vector-icons/Ionicons';

// // export default class AddLocation extends Component<{}> {
// // 	render() {
// // 		return(
// // 			<View style = {{flex: 1, backgroundColor: '#f3f3f3'}}>
// // 				<Button title='Add Location'
// // 					onPress={this.addLocation}
// // 					label='Add Location' />

// // 				<Button title='Close'
// // 					onPress={this.onClose}
// // 					label='Close' />
// // 			</View>

// // 		);
// // 	}
// // }

// import React, { Component } from 'react'
// import Footer from './Footer'
import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

module.exports = class MyApp extends React.Component {
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    );
  }
}