import { combineReducers } from 'redux'

import currencies from './currenciesReducer'
import theme from './themeReducer'

export default combineReducers({
  currencies,
  theme
})
