import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'

import TickIcon from './TickIcon'

const ListItem = ({
	text,
	onPress,
	selected = false,
	checkmark = true,
	visible = true,
	customIonicon = null,
	iconBackground
}) => (
	<TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
		<View style={styles.row}>
			<Text style={styles.text}>{text}</Text>
			{selected ? <TickIcon checkmark={checkmark} visible={visible} iconBackground={iconBackground} /> : <TickIcon />}
			{customIonicon /*renders nothing if set to null*/}
		</View>
	</TouchableHighlight>
)

ListItem.propTypes = {
	text: PropTypes.string,
	onPress: PropTypes.func,
	selected: PropTypes.bool,
	checkmark: PropTypes.bool,
	visible: PropTypes.bool,
	customIionicon: PropTypes.element, //valid react element
	iconBackground: PropTypes.string
}

const styles = EStyleSheet.create({
	$underlayColor: '$veryLightGray',
	row: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		paddingVertical: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '$white'
	},
	text: {
		fontSize: 20,
		color: '$darkText'
	}
})

export default ListItem
