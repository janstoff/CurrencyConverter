//1. Swap Currency
//2. Change Base Currency
//3. Upon initial app load

import { takeEvery } from 'redux-saga/effects' //allows to listen to every redux action

import { GET_INITIAL_CONVERSION, SWAP_CURRENCY, CHANGE_BASE_CURRENCY } from '../actions/currenciesActions'

const fetchLatestConversionRates = function*(action) {
  console.log(action)
  yield
}

const rootSaga = function*() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates)
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates)
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates)
}

export default rootSaga
