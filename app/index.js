import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import EStyleSheet from 'react-native-extended-stylesheet'
import { blue } from './assets/colors'
import Home from './screens/Home'

function CustomStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<CustomStatusBar
					backgroundColor={blue}
					barStyle="light-content"
				/>
				<Home />
			</View>
		)
	}
}

EStyleSheet.build({
	$gray: '#757575',
	$lightGray: '#ded7d7',
	$veryLightGray: '#f4eded',
	$white: '#ffffff',
	$black: '#000000',
	$orange: '#f26f28',
	$lightOrange: '#ffc2a1',
	$blue: '#4F6D7A',
	$lightBlue: '#8697b8',
	$pink: '#b93fb3',
	$textColor: '#ffffff',

	//$outline: 1,
})

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$blue'
	}
})
