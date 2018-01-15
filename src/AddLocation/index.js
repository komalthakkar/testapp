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
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

import Footer from './Footer';
import Map from './Map';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex : 1 }}>
        <Map />
      </View>
    );
  }
}