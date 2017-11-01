import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Keyboard, Animated, Platform } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

 const SCREEN_WIDTH = Dimensions.get('window').width
 const imageWidth = SCREEN_WIDTH / 2

 const ANIMATION_DURATION = 250

export default class Logo extends Component {
	constructor(props) {
		super(props)

		this.logoOuterWidth = new Animated.Value(styles.$largeLogoOuter)
		this.logoInnerWidth = new Animated.Value(styles.$largeLogoInner)
	}

	componentDidMount() {
		let showListener = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow'
		let hideListener = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide'

		this.keyboardShowListener = Keyboard.addListener(showListener, this.onKeyboardShow)
		this.keyboardHideListener = Keyboard.addListener(hideListener, this.onKeyboardHide)
	}

	// IMPORTANT to remove listeners when you no longer need them!!!
	componentWillUnmount() {
		this.keyboardShowListener.remove()
		this.keyboardHideListener.remove()
	}

	onKeyboardShow = () => {
		Animated.parallel([
			Animated.timing(this.logoOuterWidth, {
				toValue: styles.$smallLogoOuter,
				duration: ANIMATION_DURATION
			}),
			Animated.timing(this.logoInnerWidth, {
				toValue: styles.$smallLogoInner,
				duration: ANIMATION_DURATION
			})
		]).start()
	}

	onKeyboardHide = () => {
		Animated.parallel([
			Animated.timing(this.logoOuterWidth, {
				toValue: styles.$largeLogoOuter,
				duration: ANIMATION_DURATION
			}),
			Animated.timing(this.logoInnerWidth, {
				toValue: styles.$largeLogoInner,
				duration: ANIMATION_DURATION
			})
		]).start()
	}

	render() {
		const animatedLogoOuter = [
			styles.logoOuter,
			{ width: this.logoOuterWidth, height: this.logoOuterWidth }
		]

		const animatedLogoInner = [
			styles.logoInner,
			{ width: this.logoInnerWidth, height: this.logoInnerWidth}
		]

		return (
			<View style={styles.container}>
				<Animated.Image
					resizeMode="contain"
					style={animatedLogoOuter}
					source={require('../../assets/images/background.png')}>
					<Animated.Image
						resizeMode="contain"
						style={animatedLogoInner}
						source={require('../../assets/images/logo.png')}
					/>
				</Animated.Image>
				<Text style={styles.text}>Currency Converter</Text>
			</View>
		)
	}
}

const styles = EStyleSheet.create({
	$largeLogoOuter: imageWidth,
	$largeLogoInner: imageWidth / 2,
	$smallLogoOuter: imageWidth/ 2,
	$smallLogoInner: imageWidth / 4,
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	logoOuter: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '$largeLogoOuter',
		height: '$largeLogoOuter'
	},
	logoInner: {
		width: '$largeLogoInner'
	},
	text: {
		color: '$textColor',
		fontSize: 20,
		fontWeight: '600',
		letterSpacing: -0.9,
		marginTop: 15
	}
})
