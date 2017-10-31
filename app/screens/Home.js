import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	KeyboardAvoidingView
} from 'react-native'
import DismissKeyboard from 'dismissKeyboard'
import Logo from '../components/Home/Logo'
import TextInputWithButton from '../components/Home/TextInputWithButton'
import ClearButton from '../components/Home/ClearButton'
import LastConvertedText from '../components/Home/LastConvertedText'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'EUR'
const TEMP_BASE_VALUE = '100'
const TEMP_QUOTE_VALUE = '85.92'
const TEMP_CONVERSION_RATE = 0.8592
const TEMP_CONVERSION_DATE = new Date()

export default class Home extends Component {
	onPressBaseCurrency() {
		console.log('pressed base')
	}

	onPressQuoteCurrency() {
		console.log('pressed quote')
	}

	onTextInput(text) {
		console.log('text changed', text)
	}

	onCurrencySwap() {
		console.log('currency swapped')
	}

	render() {
		return (
			<TouchableWithoutFeedback
				onPress={() => {
					DismissKeyboard()
				}}>
				<View style={styles.container}>
					<Logo />
					<TextInputWithButton
						buttonText={TEMP_BASE_CURRENCY}
						onPress={() => this.onPressBaseCurrency()}
						defaultValue={TEMP_BASE_VALUE}
						keyboardType="numeric"
						onChange={text => this.onTextInput(text)}
					/>
					<TextInputWithButton
						buttonText={TEMP_QUOTE_CURRENCY}
						onPress={() => this.onPressQuoteCurrency()}
						editable={false}
						value={TEMP_QUOTE_VALUE}
					/>
					<LastConvertedText
						base={TEMP_BASE_CURRENCY}
						date={TEMP_CONVERSION_DATE}
						quote={TEMP_QUOTE_CURRENCY}
						conversionRate={TEMP_CONVERSION_RATE}
					/>
					<ClearButton
						text="Reverse Currencies"
						onPress={() => this.onCurrencySwap()}
					/>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: 'white'
	}
})
