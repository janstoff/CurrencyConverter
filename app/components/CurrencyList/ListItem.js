import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'

import Icon from './Icon'

const ListItem = ({
	text,
	onPress,
	selected = false,
	checkmark = true,
	visible = true
}) => (
	<TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
		<View style={styles.row}>
			<Text style={styles.text}>{text}</Text>
			{selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
		</View>
	</TouchableHighlight>
)

ListItem.propTypes = {
	text: PropTypes.string,
	onPress: PropTypes.func,
	selected: PropTypes.bool,
	checkmark: PropTypes.bool,
	visible: PropTypes.bool
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
