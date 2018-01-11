import React, { Component } from 'react';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';p
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {getAddLocation} from '../reducers/GetLocation'

//import reducers from '../reducers/GetLocation';


class AddLocation extends Component<{}> {
	render() {
		return(
			<View style = {{flex: 1, backgroundColor: '#f3f3f3'}}>
				
				<ActionButton 
					buttonColor = "rgba(231,76,60,1)"
					onPress = {() => { {this.props.locations}
						Actions.addlocation()}} />
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		locations: getAddLocation(state.locations)
	}
}

// function mapStateToProps (state) {
// 	console.log(state)
// 	return {
// 		 isAdding: data => dispatch((data))
		 
// 	}
// }

export default connect(null, mapStateToProps)(AddLocation)