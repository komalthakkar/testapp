/*
for add location and cancel button
*/
import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class Footer extends Component {
	render() {
		return(
			<View style={{ flex:1, flexDirection: 'row', alignItems: 'flex-end' }}>
				<View style={{ width: 180, height: 35 }}>
					<Button
						title='Add Location'
						color='rgba(231,76,60,1)'
					/>
				</View>
				<View style={{ width: 180, height: 35 }}>
					<Button
						title='Close'
						color='#3f3f3f'
					/>
				</View>

				
			</View>
		);
	}
}



















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