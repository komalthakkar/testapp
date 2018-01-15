import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

//import VisibleList from '../container/VisibleList';


export default class List extends Component<{}> {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}

	onCancel() {
		console.log("CANCEL");
		this.setState({ visible: false});
	}

	onOpen() {
    	console.log("OPEN")
    	this.setState({visible:true});
  	}
	render() {

		console.log(this.props.list)
		let options = {
			title: "React Native",
      message: "Hola mundo",
      url: "http://facebook.github.io/react-native/",
      subject: "Share Link" //  for email
	};

	const { list } = this.props
	console.log(list)
	//const listTo = list[0] || {}
		return this.props.list.map((list,index) => {
			return(
			<View key={index} style = {{ flexDirection: 'row' }}>
			<View style={{ flexDirection: 'row'}}>
        			<View style={{width: 100,height: 50, marginTop: 10 }} >
        				<Text>{list.latitude}/{list.longitude}</Text>
        			</View>
        			<View style={{width: 100, height: 50, marginLeft: 70, marginTop: 10 }}>
        				<Icon 
        					name="share"
        					color="rgba(231,76,60,1)"
        					size={30}
                			onPress={()=>{
              				this.onCancel();
              				setTimeout(() => {
                			Share.open(options).catch((err) => { err && console.log(err); })
              				},300);
            			}}/>
        			</View>
        			<View style={{ width: 100, height: 50, marginTop: 10 }}>
        				<Icon
        					name="map"
        					size={30}
        					onPress={()=>{ Actions.mapview() }}
        				/>
        			</View>
        
      			</View>
			</View>

		);
		})
		
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

