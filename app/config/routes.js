import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import CurrencyList from '../screens/CurrencyList'
import Options from '../screens/Options'
import Themes from '../screens/Themes'

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options'
    }
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: 'Themes'
    }
  }
}, {
  headerMode: 'screen' //NavBar comes and goes with a screen
})

const CurrencyListStack = StackNavigator({ // in order to keep headerTitle
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }
})

export default StackNavigator({
  Home: {
    screen: HomeStack
  },
  CurrencyList: {
    screen: CurrencyListStack,
  }
}, {
  mode: 'modal',
  headerMode: 'none' //no header for this Nav
})
