import { takeEvery, put, call, take, StrictEffect } from 'redux-saga/effects';
import {
  ActionTypes,
  getEmployeesSucess,
  getEmployeeSucess,
  getEmployeeAction,
  registerEmployeeAction,
  registerEmployeeSuccess,
  updateEmployeeAction,
  updateEmployeeSuccess,
  deleteEmployeeAction,
  deleteEmployeeSuccess,
} from '../types/actionTypes';
import axios, { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { setAlert, registerEmployee } from '../actions';
import { setAlertWorker } from './alertSaga';

//watchers
function* employeeSaga(): Generator<StrictEffect> {
  // yield takeEvery(ActionTypes.GET_EMPLOYEES, getEmployeesWorker);
  // yield takeEvery(ActionTypes.REGISTER_EMPLOYEE, registerEmployeeWorker);
}

//workers

export function* getEmployeesWorker() {
  try {
    const res: AxiosResponse = yield call(axios.get, '/api/employees');
    const data: getEmployeesSucess = {
      type: 'GET_EMPLOYEES_SUCCESS',
      payload: res.data,
    };
    yield put(data);
  } catch (err: any) {
    const errors = err.response.data.errors;
    console.log(errors);
  }
}

export function* getEmployeeWorker({ payload }: getEmployeeAction) {
  try {
    const res: AxiosResponse = yield call(
      axios.get,
      `/api/employees/${payload}`
    );
    const data: getEmployeeSucess = {
      type: 'GET_EMPLOYEE_SUCCESS',
      payload: res.data,
    };
    yield put(data);
  } catch (err: any) {
    const errors = err.response.data.errors;
    console.log(errors);
  }
}

export function* registerEmployeeWorker({ payload }: registerEmployeeAction) {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res: AxiosResponse = yield call(
      axios.post,
      '/api/employees',
      payload
    );
    const data: registerEmployeeSuccess = {
      type: 'REGISTER_EMPLOYEE_SUCCESS',
      payload: res.data,
    };
    yield put(data);

    yield setAlertWorker({
      type: 'SETALERT',
      payload: {
        msg: 'Employee registered successfully.',
        alertType: 'success',
      },
    });
  } catch (err: any) {
    const errors = err.response.data.errors;
    if (errors) {
      for (let index = 0; index < errors.length; index++) {
        const error = errors[index];

        yield setAlertWorker({
          type: 'SETALERT',
          payload: { msg: error.msg, alertType: 'error' },
        });
      }
    }
  }
}

export function* updateEmployeeWorker({ payload }: updateEmployeeAction) {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res: AxiosResponse = yield call(
      axios.put,
      `/api/employees/${payload._id}`,
      payload
    );
    const data: updateEmployeeSuccess = {
      type: 'UPDATE_EMPLOYEE_SUCCESS',
      payload: res.data,
    };
    yield put(data);

    yield setAlertWorker({
      type: 'SETALERT',
      payload: {
        msg: 'Employee updated successfully.',
        alertType: 'success',
      },
    });
  } catch (err: any) {
    const errors = err.response.data.errors;
    if (errors) {
      for (let index = 0; index < errors.length; index++) {
        const error = errors[index];

        yield setAlertWorker({
          type: 'SETALERT',
          payload: { msg: error.msg, alertType: 'error' },
        });
      }
    }
  }
}

export function* deleteEmployeeWorker({ payload }: deleteEmployeeAction) {
  try {
    const res: AxiosResponse = yield call(
      axios.delete,
      `/api/employees/${payload}`
    );
    const data: deleteEmployeeSuccess = {
      type: 'DELETE_EMPLOYEE_SUCCESS',
      payload: res.data,
    };
    yield put(data);
  } catch (err: any) {
    const errors = err.response.data.errors;
    console.log(errors);
  }
}

export default employeeSaga;
