import {
  takeEvery,
  put,
  fork,
  call,
  take,
  StrictEffect,
} from 'redux-saga/effects';
import {
  ActionTypes,
  setAlertAction,
  setAlertSuccess,
  removeAlertAction,
  removeAlertSuccess,
} from '../types/actionTypes';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

//watchers
function* alertSaga(): Generator<StrictEffect> {
  yield takeEvery(ActionTypes.SETALERT, setAlertWorker);
  yield takeEvery(ActionTypes.REMOVEALERT, removeAlertWorker);
}
//workers
export function* setAlertWorker({ payload }: setAlertAction) {
  const id = uuidv4();
  const alert = payload;

  const alertSuccess: setAlertSuccess = {
    type: 'SETALERT_SUCCESS',
    payload: {
      id,
      msg: alert.msg,
      alertType: alert.alertType,
    },
  };
  yield put(alertSuccess);
  yield delay(3000);

  // yield fork(removeAlertWorker, {
  //   type: 'REMOVEALERT',
  //   payload: id,
  // });
  yield removeAlertWorker({
    type: 'REMOVEALERT',
    payload: id,
  });
}
export function* removeAlertWorker({ payload }: removeAlertAction) {
  console.log(payload);

  const removingAlert: removeAlertSuccess = {
    type: 'REMOVEALERT_SUCCESS',
    payload,
  };
  yield put(removingAlert);
}

function delay(ms: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, ms)
  );
}
export default alertSaga;
