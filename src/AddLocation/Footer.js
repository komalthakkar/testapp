/*
for add location and cancel button
*/
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {getAddLocation} from '../actions/GetLocation';
import { connect } from 'react-redux';

//import VisibleList from '../container/VisibleList';


class Footer extends Component {
	
	render() {
	const loc={
        latitude: 19.0760,
        longitude: 72.8777,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }
      console.log(getAddLocation)
      
		return(
			<View style={{ flex:1, flexDirection: 'row', alignItems: 'flex-end' }}>
				<View style={{ width: 180, height: 35 }}>
					<Button
						title='Add Location'
						color='rgba(231,76,60,1)'
						onPress={() => { this.props.addinglocation(loc)
							Actions.list() }}
					/>
				</View>
				<View style={{ width: 180, height: 35 }}>
					<Button
						title='Close'
						color='#3f3f3f'
						onPress={() => { Actions.list() }}
					/>
				</View>

				
			</View>
		);
	}
}

function mapDispatchToProps (dispatch) {
	return {
		 addinglocation: data => dispatch(getAddLocation(data))
		 
	}
}


export default connect(null, mapDispatchToProps)(Footer)














// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { Text, View } from 'react-native'
// import { Actions } from 'react-native-router-flux'

// export default class Footer extends Component {
// 	static propTypes = {
// 		footer: PropTypes.string
// 	}

	

// 	render() {
// 		return(
// 			<View>
// 				{this.renderFooter()}
// 			</View>
// 		)
// 	}
// }