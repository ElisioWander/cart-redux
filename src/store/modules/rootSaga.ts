import { all } from 'redux-saga/effects'
import { cartSaga } from './cart/sagas'

export function* rootSaga(): any {
  return yield all([cartSaga])
}
