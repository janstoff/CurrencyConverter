import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: blue
	}
})
