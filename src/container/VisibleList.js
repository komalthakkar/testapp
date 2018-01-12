// import React, { Component } from 'react-native';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// class VisibleList extends Component {
// 	render() {
// 		return(
// 			<
// 		);
// 	}
// }

import { connect } from 'react-redux';
import List from '../List/List';

const mapStateToProps = state => {
	return {
		list: state.locations
	}
}

const VisibleList = connect(mapStateToProps)(List)

export default VisibleList