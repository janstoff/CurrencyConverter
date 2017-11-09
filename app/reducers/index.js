import { combineReducers } from 'redux'

import currencies from './currenciesReducer'
import theme from './themeReducer'
import nav from './navReducer'

export default combineReducers({
  currencies,
  theme,
  nav
})
