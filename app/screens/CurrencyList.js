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
		navigation: PropTypes.object,
		baseCurrency: PropTypes.string,
		quoteCurrency: PropTypes.string,
		changeBaseCurrency: PropTypes.func,
		changeQuoteCurrency: PropTypes.func,
		primaryColor: PropTypes.string
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
		const { navigation, baseCurrency, quoteCurrency } = this.props

		let activeCurrency = baseCurrency
		if (navigation.state.params.type === 'quote') {
			activeCurrency = quoteCurrency
		}

		return (
			<View style={styles.container}>
				<FlatList
					data={currencies}
					renderItem={({ item }) => (
						<ListItem
							text={item}
							selected={item === activeCurrency} //i.e. true in case it they are equal
							onPress={() => this.onPress(item)}
              checkmark={true}
              visible={true}
							iconBackground={this.props.primaryColor}
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

const mapStateTopProps = (state) => {
	return {
		baseCurrency: state.currencies.baseCurrency,
		quoteCurrency: state.currencies.quoteCurrency,
		primaryColor: state.theme.primaryColor
	}
}


export default connect(mapStateTopProps, actions)(CurrencyList)
