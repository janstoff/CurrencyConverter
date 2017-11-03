import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'

import { ListItem, Separator } from '../components/_SharedComponents'

class Themes extends Component {
	static propTypes = {
		navigation: PropTypes.object
	}

	onThemePress = (color) => {
		this.props.navigation.goBack(null)
	}

	render() {
		return (
			<ScrollView>
				<ListItem
					text="Blue"
					onPress={() => this.onThemePress(styles.$blue)}
					selected
					checkmark={false}
          iconBackground={styles.$blue}
				/>
				<Separator />
				<ListItem
					text="Orange"
					onPress={() => this.onThemePress(styles.$orange)}
					selected
					checkmark={false}
          iconBackground={styles.$orange}
				/>
				<Separator />
				<ListItem
					text="Green"
					onPress={() => this.onThemePress(styles.$green)}
					selected
					checkmark={false}
          iconBackground={styles.$green}
				/>
				<Separator />
				<ListItem
					text="Purple"
					onPress={() => this.onThemePress(styles.$purple)}
					selected
					checkmark={false}
          iconBackground={styles.$purple}
				/>
				<Separator />
			</ScrollView>
		)
	}
}

const styles = EStyleSheet.create({
	$blue: '$primaryBlue',
	$orange: '$primaryOrange',
	$green: '$primaryGreen',
	$purple: '$primaryPurple'
})

export default Themes
