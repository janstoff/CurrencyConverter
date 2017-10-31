import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import { white, gray, lightGray, veryLightGray } from '../../assets/colors'

SCREEN_WIDTH = Dimensions.get('window').width


export default class ClearButton extends Component {
  static propTypes = {
		onPress: PropTypes.func.isRequired,
		text: PropTypes.string.isRequired
	}

  render() {
    const { text, onPress } = this.props

    return(
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
          <Image source={require('../../assets/images/icon.png')} resizeMode="contain" style={styles.icon} />
          <Text style={styles.buttonText} >{text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginVertical: 11,
    marginTop: 20
	},
  wrapper: {
    flexDirection: 'row',
		alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH / 14,
		height: SCREEN_WIDTH / 14
  },
	buttonText: {
		color: white,
		fontSize: 14,
		fontWeight: '200',
		paddingHorizontal: 16
  }
})
