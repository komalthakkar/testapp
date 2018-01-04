import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default class List extends Component<{}> {
	render() {
		return(
			<View style = {{ flexDirection: 'row'}}>
				<View style = {styles.container}>
					

					<Text style = {styles.item}> DD/MM/YYYY </Text>
					
				</View>
				
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container:{
		padding: 10,
		marginTop: 20,
		flex: 1
	},

	item:{
		padding: 10
	}
})