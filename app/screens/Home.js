import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	KeyboardAvoidingView
} from 'react-native'
import { connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'
import DismissKeyboard from 'dismissKeyboard'
import {
	Logo,
	TextInputWithButton,
	ClearButton,
	LastConvertedText,
	Header
} from '../components/Home'
import PropTypes from 'prop-types'
import * as actions from '../actions'


class Home extends Component {
	static propTypes = {
		navigation: PropTypes.object,
		dispatch: PropTypes.func,
		baseCurrency: PropTypes.string,
		quoteCurrency: PropTypes.string,
		amount: PropTypes.number,
		conversionRate: PropTypes.number,
		isFetching: PropTypes.bool,
		lastConvertedDate: PropTypes.object
	}

	onPressBaseCurrency = () => {
		this.props.navigation.navigate('CurrencyList', {
			title: 'Base Currency',
			type: 'base'
		})
	}

	onPressQuoteCurrency = () => {
		this.props.navigation.navigate('CurrencyList', {
			title: 'Quote Currency',
			type: 'quote'
		})
	}

	onAmountInput = amount => {
		this.props.changeCurrencyAmount(amount)
	}

	onCurrencySwap = () => {
		this.props.swapCurrency()
	}

	onOptionsPress = () => {
		this.props.navigation.navigate('Options')
	}

	render() {
		const {
			baseCurrency,
			quoteCurrency,
			amount,
			conversionRate,
			isFetching,
			lastConvertedDate
		} = this.props

		let quotePrice = '...'
		if (!isFetching) {
			quotePrice = (amount * conversionRate).toFixed(2)
		}

		return (
			<TouchableWithoutFeedback onPress={() => DismissKeyboard()}>
				<View style={styles.container}>
					<Header onPress={this.onOptionsPress} />
					<KeyboardAvoidingView behavior="padding">
						<Logo />
						<TextInputWithButton
							buttonText={baseCurrency}
							onPress={this.onPressBaseCurrency}
							defaultValue={amount.toString()} //cannot input number to text input
							keyboardType="numeric"
							onChangeText={this.onAmountInput}
						/>
						<TextInputWithButton
							buttonText={quoteCurrency}
							onPress={this.onPressQuoteCurrency}
							editable={false}
							value={quotePrice}
						/>
						<LastConvertedText
							base={baseCurrency}
							date={lastConvertedDate}
							quote={quoteCurrency}
							conversionRate={conversionRate}
						/>
						<ClearButton
							text="Reverse Currencies"
							onPress={this.onCurrencySwap}
						/>
					</KeyboardAvoidingView>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$themeColor',
		justifyContent: 'center',
		alignItems: 'center',
		left: 0,
		right: 0
	},
	text: {
		color: '$textColor'
	}
})

const mapStateTopProps = state => {
	const { baseCurrency, quoteCurrency, amount } = state.currencies

	const conversionSelector = state.currencies.conversions[baseCurrency] || {}
	const rates = conversionSelector.rates || {}
	const conversionRate = rates[quoteCurrency] || 0

	return {
		baseCurrency,
		quoteCurrency,
		amount,
		conversionRate,
		isFetching: conversionSelector.isFetching,
		lastConvertedDate: conversionSelector.date
			? new Date(conversionSelector.date)
			: new Date()
	}
}

export default connect(mapStateTopProps, actions)(Home)
