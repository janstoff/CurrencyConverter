import { CHANGE_PRIMARY_COLOR } from '../actions/themeActions'

initialState = {
  primaryColor: '#4F6D7A'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color
      }
    default:
      return state
  }
}

export default reducer
