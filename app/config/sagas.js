import {
	takeEvery, //allows to listen to every instance of the redux actions being dispatched
	select, //provides access to redux state
	call,
	put
} from 'redux-saga/effects'

import {
	GET_INITIAL_CONVERSION,
	SWAP_CURRENCY,
	CHANGE_BASE_CURRENCY,
	CONVERSION_RESULT,
	CONVERSION_ERROR
} from '../actions/currenciesActions'

const getLatestRate = currency =>
	fetch(`http://api.fixer.io/latest?base=${currency}`)

const fetchLatestConversionRates = function*(action) {
	try {
		let currency = action.currency //available in case of CHANGE_BASE_CURRENCY
		if (currency === undefined) {
			currency = yield select(state => state.currencies.baseCurrency) //for SWAP_CURRENCY actions
		}
		const response = yield call(getLatestRate, currency) //yield makes sure call is made only when response is ready
		const result = yield response.json() //yield makes sure the json conversion happens before assigning to const result
		if (result.error) {
			yield put({ type: CONVERSION_ERROR, error: result.error })
		} else {
			yield put({ type: CONVERSION_RESULT, result })
		}
	} catch (error) {
		yield put({ type: CONVERSION_ERROR, error: error.message })
	}
}

const rootSaga = function*() {
	yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates)
	yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates)
	yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates)
}

export default rootSaga
