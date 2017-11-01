import React, { Component } from 'react'
import { Text, View, FlatList, Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import PropTypes from 'prop-types'

import { ListItem, Separator, TickIcon } from '../components/_SharedComponents'
import currencies from '../assets/currencies'

SCREEN_WIDTH = Dimensions.get('window').width

const TEMP_CURRENT_CURRENCY = 'CAD'

export default class CurrencyList extends Component {
	onPress = () => {
		console.log('row pressed')
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={currencies}
					renderItem={({ item }) => (
						<ListItem
							text={item}
							selected={item === TEMP_CURRENT_CURRENCY}
							onPress={this.onPress}
              checkmark={true}
              visible={true}
						/>
					)}
					keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
				/>
			</View>
		)
	}
}

const styles = EStyleSheet.create({
	container: {
    flex: 1
	}
})
