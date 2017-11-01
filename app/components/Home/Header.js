import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import PropTypes from 'prop-types'

SCREEN_WIDTH = Dimensions.get('window').width

export default class Header extends Component {
  static propTypes = {
    onPress: PropTypes.func
  }

	render() {
    const { onPress } = this.props

		return (
			<View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image source={require('../../assets/images/gear.png')} style={styles.icon} resizeMode="contain"/>
        </TouchableOpacity>
			</View>
		)
	}
}

const styles = EStyleSheet.create({
	container: {
    position: 'absolute',
		left: 0,
    right: 0,
    top: 0
	},
  button: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  icon: {
    width: 18,

  }
})
