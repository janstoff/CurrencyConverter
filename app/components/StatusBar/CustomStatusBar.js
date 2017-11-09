import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Constants } from 'expo'


class CustomStatusBar extends Component {
	static propTypes = {
		primaryColor: PropTypes.string,
		barStyle: PropTypes.string
	}

	render () {
		const { primaryColor, barStyle } = this.props

		return (
			<View style={{ backgroundColor: primaryColor, height: Constants.statusBarHeight }}>
				<StatusBar
					translucent
					backgroundColor={primaryColor}
					barStyle={barStyle}
				 />
			</View>
		)
	}
}

const mapStateToProps = state => ({
	primaryColor: state.theme.primaryColor
})

export default connect(mapStateToProps)(CustomStatusBar)
