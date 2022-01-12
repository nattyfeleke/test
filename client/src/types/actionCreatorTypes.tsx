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

export type setAlertActionCreator = (alert: Alert) => setAlertAction;

export type removeAlertActionCreator = (id: string) => removeAlertAction;

export type getEmployeeActionCreator = (id: string) => getEmployeeAction;
export type getEmployeesActionCreator = () => getEmployeesAction;

export type registerEmployeeActionCreator = (
  employee: Employee
) => registerEmployeeAction;

export type updateEmployeeActionCreator = (
  employee: Employee
) => updateEmployeeAction;

export type deleteEmployeeActionCreator = (
  id: string | undefined
) => deleteEmployeeAction;
