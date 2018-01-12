import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

import reducers from '../reducers/GetLocation';


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

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 19.0760,
        longitude: 72.8777,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }
    };
  }
  render() {
    const { region } = this.props;
    //console.log(this.props);

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          // onRegionChagne
          region={this.state.region}
        >
        <MapView.Marker
          coordinate={this.state.region}
          title="region"
        />
        </MapView>
      </View>
    );
  }
}

// function mapStateToProp(state) {
//   console.log(state)
//   return {
//     location: state.location
//   }
// }

// export default connect(mapStateToProp)(MyApp)
export default MyApp