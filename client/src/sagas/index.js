import { takeEvery } from 'redux-saga/effects'
import ACTIONS from '../actions'
import { createMessageSaga, getMessagesSaga } from './chatSagas'

export default function * rootSaga () {
  yield takeEvery(ACTIONS.GET_MESSAGES_REQUEST, getMessagesSaga)
  yield takeEvery(ACTIONS.CREATE_MESSAGE_REQUEST, createMessageSaga)
}
