import {
  getEmployeesActionCreator,
  getEmployeeActionCreator,
  registerEmployeeActionCreator,
  updateEmployeeActionCreator,
  setAlertActionCreator,
  removeAlertActionCreator,
  deleteEmployeeActionCreator,
} from '../types/actionCreatorTypes';

export const setAlert: setAlertActionCreator = (alert) => {
  return {
    type: 'SETALERT',
    payload: alert,
  };
};

export const removeAlert: removeAlertActionCreator = (id) => {
  return {
    type: 'REMOVEALERT',
    payload: id,
  };
};

export const getEmployees: getEmployeesActionCreator = () => {
  return {
    type: 'GET_EMPLOYEES',
  };
};

export const getEmployee: getEmployeeActionCreator = (id) => {
  return {
    type: 'GET_EMPLOYEE',
    payload: id,
  };
};

export const registerEmployee: registerEmployeeActionCreator = (employee) => {
  return {
    type: 'REGISTER_EMPLOYEE',
    payload: employee,
  };
};

export const updateEmployee: updateEmployeeActionCreator = (employee) => {
  return {
    type: 'UPDATE_EMPLOYEE',
    payload: employee,
  };
};

export const deleteEmployee: deleteEmployeeActionCreator = (id) => {
  return {
    type: 'DELETE_EMPLOYEE',
    payload: id,
  };
};

// import { ActionTypes } from './types';

// export type Alert = {
//   id: string;
//   msg: string;
// };

// interface SetAlertAction {
//   type: ActionTypes.SETALERT;
//   payload: Alert;
// }

// interface RemoveAlertAction {
//   type: ActionTypes.REMOVEALERT;
//   payload: string;
// }

// export type Action = SetAlertAction | RemoveAlertAction;
