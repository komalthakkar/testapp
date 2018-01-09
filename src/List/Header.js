import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		text: ''
	// 	};
	// }
	render() {
		return(
			<View style={{ flexDirection: 'row' }}>
			<View style={{ flexDirection: 'row' }}>
				<View style={{ flexDirection: 'row' }}>
					<Icon 
							name="location-searching"
							color="rgba(231,76,60,1)"
							size={30}
							style={{ marginTop: 10 }}
					/>
				</View>
				<TextInput
					style={{ flexDirection: 'row'}}
					

				/>
			</View>
			</View>
		);
	}
}



// <View style={{ flexDirection: 'row' }}>
// 				<View style={{ flex: 1 }}>
// 				<TextInput
				
// 					style={{height: 50, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
//         			onChangeText={(text) => this.setState({text})}
//         			value={this.state.text}>
// 						<Icon 
// 							name="location-searching"
// 							color="rgba(231,76,60,1)"
// 							size={30}
// 						/>
// 				</TextInput>
// 				</View>
// 			</View>