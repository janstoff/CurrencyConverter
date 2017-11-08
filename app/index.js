import React from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'
import PropTypes from 'prop-types'

import store from './config/store'
import Navigator from './config/routes'
import { AlertProvider } from './components/Alert'
import Home from './screens/Home'
import CurrencyList from './screens/CurrencyList'
import Options from './screens/Options'
import Themes from './screens/Themes'

class App extends React.Component {
	static propTypes = {
		primaryColor: PropTypes.string
	}

	render() {
		return (
			<Provider store={store}>
				<AlertProvider>
						<Navigator />
				</AlertProvider>
			</Provider>
		)
	}
}

EStyleSheet.build({
	$themeColor: '$primaryBlue',
	//Theme colors
	$primaryBlue: '#4F6D7A',
	$primaryOrange: '#D57A66',
	$primaryGreen: '#008090',
	$primaryPurple: '#9E768F',
	//Functional colors
	$gray: '#757575',
	$lightGray: '#ded7d7',
	$veryLightGray: '#f4eded',
	$white: '#ffffff',
	$black: '#000000',
	$textColor: '#ffffff',
	$darkText: '#343434',

	// $outline: 1
})

const mapStateTopProps = state => {
	primaryColor: state.theme.primaryColor
}

export default App
