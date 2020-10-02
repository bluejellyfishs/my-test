import { all } from 'redux-saga/effects';

import productsSagas from './products/sagas';

function* rootSaga() {
  yield all([...productsSagas]);
}

export default rootSaga;
