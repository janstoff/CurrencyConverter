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
import { white, gray, lightGray, veryLightGray } from '../../assets/colors'

class TextInputWithButton extends Component {
	static propTypes = {
		onPress: PropTypes.func.isRequired,
		buttonText: PropTypes.string.isRequired,
		editable: PropTypes.bool.isRequired
	}
	static defaultProps = {
		editable: true
	}

	render() {
		const { onPress, buttonText, editable } = this.props

		const dynamicContainerStyles = [styles.container] //[] for array of multiple style props
		if (editable === false) {
			dynamicContainerStyles.push(styles.containerDisabled)
		}

		return (
			<View style={dynamicContainerStyles}>
				<TouchableHighlight
          style={styles.buttonContainer}
          onPress={onPress}
          underlayColor={veryLightGray}
        >
					<Text style={styles.buttonText}>{buttonText}</Text>
				</TouchableHighlight>
				<View style={styles.border} />
				<TextInput
					style={styles.input}
					editable={editable} /*or simply {...this.props}*/
					underlineColorAndroid="transparent"
				/>
			</View>
		)
	}
}

SCREEN_WIDTH = Dimensions.get('window').width
INPUT_HEIGHT = 48
BORDER_RADIUS = 4

const styles = StyleSheet.create({
	container: {
		backgroundColor: white,
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 11,
		width: SCREEN_WIDTH * 0.9,
		height: INPUT_HEIGHT,
		borderRadius: BORDER_RADIUS
	},
	containerDisabled: {
		backgroundColor: veryLightGray
	},
	buttonContainer: {
		height: INPUT_HEIGHT,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: white,
		borderTopLeftRadius: BORDER_RADIUS,
		borderBottomLeftRadius: BORDER_RADIUS
	},
	buttonText: {
		color: gray,
		fontSize: 20,
		fontWeight: '600',
		paddingHorizontal: 16
	},
	border: {
		height: INPUT_HEIGHT,
		width: StyleSheet.hairlineWidth,
		backgroundColor: lightGray
	},
	input: {
		flex: 1,
		fontSize: 18,
		paddingHorizontal: 8,
		color: gray
	},
	text: {
		color: 'white'
	}
})

export default TextInputWithButton
