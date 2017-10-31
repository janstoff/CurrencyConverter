import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { white } from '../../assets/colors'

SCREEN_WIDTH = Dimensions.get('window').width

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					resizeMode="contain"
					style={styles.logoOuter}
					source={require('../../assets/images/background.png')}>
					<Image
						resizeMode="contain"
						style={styles.logoInner}
						source={require('../../assets/images/logo.png')}
					/>
				</Image>
				<Text style={styles.text}>Currency Converter</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	logoOuter: {
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH / 2,
		height: SCREEN_WIDTH / 2
	},
	logoInner: {
		width: SCREEN_WIDTH / 4
	},
	text: {
		color: 'white',
		fontSize: 20,
		fontWeight: '600',
		letterSpacing: -0.9,
		marginTop: 15
	}
})
