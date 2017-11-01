import React, { Component } from 'react'
import { ScrollView, Platform } from 'react-native'
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Ionicons } from '@expo/vector-icons'

import { ListItem, Separator } from '../components/_SharedComponents'

const IONICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'

class Options extends Component {
	onThemesPress = () => {
		console.log('themes pressed')
	}

	onSitePress = () => {
		console.log('site pressed')
	}

	render() {
		return (
			<ScrollView>
				<ListItem
					text="Themes"
					onPress={this.onThemesPress}
					customIonicon={
						<Ionicons
							name={`${IONICON_PREFIX}-arrow-forward`}
							color={styles.$iconColor}
							size={styles.$iconSize}
						/>
					}
				/>
				<Separator />
				<ListItem
					text="Fixer.io"
					onPress={this.onSitePress}
					customIonicon={
						<Ionicons
							name={`${IONICON_PREFIX}-link`}
							color={styles.$iconColor}
							size={styles.$iconSize}
						/>
					}
				/>
				<Separator />
			</ScrollView>
		)
	}
}

const styles = EStyleSheet.create({
	$iconColor: '$gray',
	$iconSize: 23,
	container: {}
})

export default Options
