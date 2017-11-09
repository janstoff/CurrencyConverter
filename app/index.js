import React from 'react'
import { StyleSheet } from 'react-native'
import { Provider, connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'
import PropTypes from 'prop-types'
import { addNavigationHelpers } from 'react-navigation'

import store from './config/store'
import Navigator from './config/routes'
import { AlertProvider } from './components/Alert'
import Home from './screens/Home'
import CurrencyList from './screens/CurrencyList'
import Options from './screens/Options'
import Themes from './screens/Themes'



const AppNav = ({ dispatch, nav }) => (
	<Navigator
			navigation={addNavigationHelpers({
				dispatch,
				state: nav
			})}
		/>
)

const mapStateTopProps = state => ({
	nav: state.nav
})

const AppWithNavigation = connect(mapStateTopProps)(AppNav)


class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AlertProvider>
						<AppWithNavigation />
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

export default App
