import React, { Component } from 'react'
import { Text } from 'react-native'
import { white } from '../../assets/colors'
import moment from 'moment' //date formatting
import PropTypes from 'prop-types'


const LastConvertedText = ({ base, quote, conversionRate, date }) => ( //implicit return syntax
  <Text style={{ color: white }}>
    1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
  </Text>
)

LastConvertedText.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number
}

export default LastConvertedText
