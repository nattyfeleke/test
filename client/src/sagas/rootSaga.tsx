import { takeEvery, all } from 'redux-saga/effects';
import { ActionTypes } from '../types/actionTypes';
import { setAlertWorker, removeAlertWorker } from './alertSaga';
import {
  getEmployeesWorker,
  getEmployeeWorker,
  registerEmployeeWorker,
  updateEmployeeWorker,
  deleteEmployeeWorker,
} from './employeeSaga';

function* watchAll() {
  yield all([
    takeEvery(ActionTypes.SETALERT, setAlertWorker),
    takeEvery(ActionTypes.REMOVEALERT, removeAlertWorker),
    takeEvery(ActionTypes.GET_EMPLOYEES, getEmployeesWorker),
    takeEvery(ActionTypes.GET_EMPLOYEE, getEmployeeWorker),
    takeEvery(ActionTypes.REGISTER_EMPLOYEE, registerEmployeeWorker),
    takeEvery(ActionTypes.UPDATE_EMPLOYEE, updateEmployeeWorker),
    takeEvery(ActionTypes.DELETE_EMPLOYEE, deleteEmployeeWorker),
  ]);
}

export default watchAll;
