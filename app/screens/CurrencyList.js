import React, { Component } from 'react'
import { Text, View, FlatList, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'
import PropTypes from 'prop-types'

import { ListItem, Separator, TickIcon } from '../components/_SharedComponents'
import currencies from '../assets/currencies'
import * as actions from '../actions'


SCREEN_WIDTH = Dimensions.get('window').width

const TEMP_CURRENT_CURRENCY = 'CAD'

class CurrencyList extends Component {
	static propTypes = {
		navigation: PropTypes.object
	}

	onPress = (currency) => {
		const { type } = this.props.navigation.state.params
		const { navigation, changeBaseCurrency, changeQuoteCurrency } = this.props

		if (type === 'base') {
			changeBaseCurrency(currency)
		} else if (type === 'quote') {
			changeQuoteCurrency(currency)
		}

		navigation.goBack(null)
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
							onPress={() => this.onPress(item)}
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

// const mapStateTopProps = (state) => {
//
// }


export default connect(null, actions)(CurrencyList)
