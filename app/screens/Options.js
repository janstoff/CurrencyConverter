import React, { Component } from 'react'
import { ScrollView, Platform, Linking } from 'react-native'
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Ionicons } from '@expo/vector-icons'

import { ListItem, Separator } from '../components/_SharedComponents'
import { connectAlert } from '../components/Alert'

const IONICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'

class Options extends Component {
	static propTypes = {
		navigation: PropTypes.object,
		alertWithType: PropTypes.func
	}

	onThemesPress = () => {
		this.props.navigation.navigate('Themes')
	}

	onSitePress = () => {
		Linking.openURL('http://fixer.io').catch(() => this.props.alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now"))
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

export default connectAlert(Options)
