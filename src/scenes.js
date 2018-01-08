/**
*This file defines all the scens/views for the app
*
*@flow
*/

import React from 'react'
import { View } from 'react-native'
import { Actions, Scene, Stack, Router } from 'react-native-router-flux'

import AddLocation from './AddLocation'
import List from './List'
import Map from './Map'
import SignupView from './MainPage/signup/index'
import LoginScreen from './MainPage/login/index'
import MapView from './Map/index'

const App = () => (
	<Router>
		<Stack key = "root">
			<Scene title="View Location" component={Map} onEnter={Map.onEnter}  key='map' />
			<Scene title="Navigation" component={List} onEnter={List.onEnter} initial key='list' />
			<Scene title="Add Location" component={AddLocation} onEnter={AddLocation.onEnter} key='addlocation' />
			{/*<Scene title="Sign Up" component={SignupView} onEnter={SignupView.onEnter} initial key='signup' />
			<Scene title="Log In" component={LoginScreen} onEnter={LoginScreen.onEnter} key='login' />*/}
			<Scene title="Map View" component={MapView} onEnter={MapView.onEnter} key='mapview' />
		</Stack>
	</Router>
)


export default App