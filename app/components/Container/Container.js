import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'

const Container = ({ children, backgroundColor }) => {
	const containerStyles = [styles.container]
	if (backgroundColor) {
		containerStyles.push({ backgroundColor })
	}
	return (
		<View style={containerStyles}>
			{children}
		</View>
	)
}

Container.propTypes = {
	children: PropTypes.any,
	backgroundColor: PropTypes.string
}

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		left: 0,
		right: 0
	}
})

export default Container
