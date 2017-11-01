import React from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'

const Icon = ({ checkmark, visible, iconBackground }) => {
	const iconStyles = [styles.icon]
	if (visible) {
		iconStyles.push(styles.iconVisible)
	}
	if(iconBackground) {
		iconStyles.push({ backgroundColor: iconBackground })
	}

	return (
		<View style={iconStyles}>
			{checkmark ? (
				<Image
					source={require('../../assets/images/check.png')}
					style={styles.iconChecked}
					resizeMode="contain"
				/>
			) : null}
		</View>
	)
}

Icon.propTypes = {
	checkmark: PropTypes.bool,
	visible: PropTypes.bool,
	iconBackground: PropTypes.string
}

const styles = EStyleSheet.create({
	icon: {
		backgroundColor: 'transparent',
		width: 30,
		height: 30,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center'
	},
	iconVisible: {
		backgroundColor: '$themeColor'
	},
	iconChecked: {
		width: 18
	}
})

export default Icon
