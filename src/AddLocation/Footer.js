/*
for add location and cancel button
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Footer extends Component {
	static propTypes = {
		footer: PropTypes.string
	}

	

	render() {
		return(
			<View>
				{this.renderFooter()}
			</View>
		)
	}
}