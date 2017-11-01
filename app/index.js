import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import EStyleSheet from 'react-native-extended-stylesheet'
import Home from './screens/Home'
import CurrencyList from './screens/CurrencyList'
import Options from './screens/Options'
import Themes from './screens/Themes'


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
					backgroundColor={styles.$statusBarColor}
					barStyle="light-content"
				/>
				<Themes />
			</View>
		)
	}
}

EStyleSheet.build({
	$themeColor: '$primaryBlue',
	//Theme colors
	$primaryBlue: '#4F6D7A',
	$primaryOrange: '#D57A66',
	$primaryGreen: '#008090',
	$primaryPurple: '#9E768F',
	//Functional colors
	$gray: '#757575',
	$lightGray: '#ded7d7',
	$veryLightGray: '#f4eded',
	$white: '#ffffff',
	$black: '#000000',
	$textColor: '#ffffff',
	$darkText: '#343434',

	//$outline: 1,
})

const styles = EStyleSheet.create({
	$statusBarColor: '$themeColor',
	container: {
		flex: 1,
	}
})
