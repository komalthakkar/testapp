//import * as Actions from './actions'
import actions from '../actions/GetLocation';
import { AsyncStorage } from 'react-native';
import * as Actions from '../actions/GetLocation';

const defaultState = [{ date: new Date(), lat:19.1232, long: 12.1232}]


export default function (state = defaultState, action ) {
	console.log(state,action)
	switch(action.type) {
		case Actions.GET_ADD_LOCATION_SUCCESS:
		const l = state.location

		l.push(action.list)

		 return {
		 	...state,
		 	location: l
		 }
	}

	return state
}

// export default function(state){

// 	return {
// 		location : 'mum'
// 	}
// }