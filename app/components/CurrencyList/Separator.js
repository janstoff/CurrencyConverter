import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'

const Separator = () => (<View style={styles.separator}/>)

const styles = EStyleSheet.create({
  separator: {
    marginLeft: 20,
    backgroundColor: '$veryLightGray',
    flex: 1,
    height: StyleSheet.hairlineWidth
  }
})


export default Separator
