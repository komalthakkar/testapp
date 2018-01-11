import _ from 'underscore';

export const GET_ADD_LOCATION = 'GET_ADD_LOCATION'
export function getAddLocation (list) {
	return {
		type: GET_ADD_LOCATION,
		list
	}
	//dispatch(action)
}

// export const GET_ADD_LOCATION_SUCCESS = 'GET_ADD_LOCATION_SUCCESS'
// export function getAddLocationSuccess (list) {
// 	return {
// 		type: GET_ADD_LOCATION_SUCCESS,
// 		list
// 	}

// 	dispatch(action)
// }


// // dispatch({
// // 		type: GET_ADD_LOCATION_SUCCESS,
// // 		list: 'blore'
// // 	})

// export const GET_ADD_LOCATION_ERROR = 'GET_ADD_LOCATION_ERROR'
// export function getAddLocationError (error) {
// 	return {
// 		type: GET_ADD_LOCATION_ERROR,
// 		error
// 	}
// }

// export function getLocation () {
// 	return function(dispatch) {
// 		dispatch(getAddLocation())

// 		AppRequest()
// 		.then( list =>{
// 			dispatch(getAddLocationSuccess(list))
// 		}
// 		)
// 		.catch( error =>
// 			dispatch(getAddLocationError(error))
// 		)
// 	}
// }