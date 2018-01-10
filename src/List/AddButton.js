import React, { Component } from 'react';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';p
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import actions from '../actions/GetLocation';


export default class AddLocation extends Component<{}> {
	render() {
		return(
			<View style = {{flex: 1, backgroundColor: '#f3f3f3'}}>
				<ActionButton 
					buttonColor = "rgba(231,76,60,1)"
					onPress = {() => { Actions.addlocation()}} />
			</View>
		);
	}
}