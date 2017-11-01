import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	KeyboardAvoidingView
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import DismissKeyboard from 'dismissKeyboard'
import { Logo, TextInputWithButton, ClearButton, LastConvertedText, Header } from '../components/Home'

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

	onOptionsPress() {
		console.log('options pressed')
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={() => DismissKeyboard()}>
				<View style={styles.container}>
					<Header onPress={() => onOptionsPress()} />
					<KeyboardAvoidingView behavior="padding">
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
					</KeyboardAvoidingView>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$blue',
		justifyContent: 'center',
		alignItems: 'center',
		left: 0,
		right: 0
	},
	text: {
		color: '$textColor'
	}
})
