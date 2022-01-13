import { Alert, Employee } from './storeTypes';
import {
  removeAlertAction,
  setAlertAction,
  getEmployeesAction,
  getEmployeeAction,
  registerEmployeeAction,
  updateEmployeeAction,
  deleteEmployeeAction,
} from './actionTypes';

import { History } from 'history';

export type setAlertActionCreator = (alert: Alert) => setAlertAction;

export type removeAlertActionCreator = (id: string) => removeAlertAction;

export type getEmployeeActionCreator = (id: string) => getEmployeeAction;
export type getEmployeesActionCreator = () => getEmployeesAction;

export type registerEmployeeActionCreator = (
  employee: Employee,
  history: History
) => registerEmployeeAction;

export type updateEmployeeActionCreator = (
  employee: Employee,
  history: History
) => updateEmployeeAction;

export type deleteEmployeeActionCreator = (
  id: string | undefined
) => deleteEmployeeAction;
