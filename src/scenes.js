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


const App = () => (
	<Router>
		<Stack key = "root">
			<Scene title="View Location" component={Map} onEnter={Map.onEnter}  key='map' />
			<Scene title="Navigation" component={List} onEnter={List.onEnter} initial key='list' />
			<Scene title="Add Location" component={AddLocation} onEnter={AddLocation.onEnter} key='addlocation' />
		</Stack>
	</Router>
)


export default App