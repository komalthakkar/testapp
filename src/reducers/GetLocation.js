//import * as Actions from './actions'
import actions from '../actions/GetLocation';
import { AsyncStorage } from 'react-native';
import * as Actions from '../actions/GetLocation';

const DEFAULT_LATITUDE = 0
const DEFAULT_LONGITUDE = 0
const DATE = new Date()


//const defaultState = [{ date: new Date(), lat:19.1232, long: 12.1232}]

const defaultState = {	
	current: {
		latitude: DEFAULT_LATITUDE,
		longitude: DEFAULT_LONGITUDE,
		date: DATE
	},

	locations: []	
}

export default function (state = defaultState, action ) {
	console.log(state,action)
	switch(action.type) {
		case Actions.GET_ADD_LOCATION:
		const locations = state.locations

		locations.push(action.list)
		//if (action.list == null) return state
		 
		return {
		 	...state,
		 	locations: locations,
		 	current: {
		 		latitude: action.list.latitude || DEFAULT_LATITUDE,
		 		longitude: action.list.longitude || DEFAULT_LONGITUDE,
		 		date: action.list.date || DATE
		 	}
		}
	}

	return state
}

// export default function(state){

// 	return {
// 		location : 'mum'
// 	}
// }