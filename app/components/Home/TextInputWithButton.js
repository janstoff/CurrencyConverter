import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TextInput,
	Dimensions
} from 'react-native'
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'
import color from 'color'

class TextInputWithButton extends Component {
	static propTypes = {
		onPress: PropTypes.func,
		buttonText: PropTypes.string,
		editable: PropTypes.bool,
		onChange: PropTypes.func,
		keyboardType: PropTypes.string,
		textColor: PropTypes.string,
	}

	static defaultProps = {
		editable: true
	}

	render() {
		const { onPress, buttonText, editable, onChange, keyboardType } = this.props

		const underlayColor = color(styles.$buttonBGColorBase).darken(
			styles.$buttonBGColorModifier
		)

		const dynamicContainerStyles = [styles.container] //[] for array of multiple style props
		if (editable === false) {
			dynamicContainerStyles.push(styles.containerDisabled)
		}

		const buttonTextStyles = [styles.buttonText]
		if (this.props.textColor) {
			buttonTextStyles.push({ color: this.props.textColor })
		}

		return (
			<View style={dynamicContainerStyles}>
				<TouchableHighlight
					style={styles.buttonContainer}
					onPress={onPress}
					underlayColor={underlayColor}>
					<Text style={buttonTextStyles}>{buttonText}</Text>
				</TouchableHighlight>
				<View style={styles.border} />
				<TextInput
					style={styles.input}
					underlineColorAndroid="transparent"
					{...this.props}
				/>
			</View>
		)
	}
}

SCREEN_WIDTH = Dimensions.get('window').width
INPUT_HEIGHT = 48
BORDER_RADIUS = 4

const styles = EStyleSheet.create({
	$buttonBGColorBase: '$white',
	$buttonBGColorModifier: 0.1,

	container: {
		backgroundColor: '$white',
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 11,
		width: SCREEN_WIDTH * 0.9,
		height: INPUT_HEIGHT,
		borderRadius: BORDER_RADIUS
	},
	containerDisabled: {
		backgroundColor: '$veryLightGray'
	},
	buttonContainer: {
		height: INPUT_HEIGHT,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '$white',
		borderTopLeftRadius: BORDER_RADIUS,
		borderBottomLeftRadius: BORDER_RADIUS
	},
	buttonText: {
		color: '$gray',
		fontSize: 20,
		fontWeight: '600',
		paddingHorizontal: 16
	},
	border: {
		height: INPUT_HEIGHT,
		width: StyleSheet.hairlineWidth,
		backgroundColor: '$lightGray'
	},
	input: {
		flex: 1,
		fontSize: 18,
		paddingHorizontal: 8,
		color: '$gray'
	},
	text: {
		color: '$textColor'
	}
})

export default TextInputWithButton
