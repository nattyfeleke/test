import { Alert, Employee } from './storeTypes';
import { History } from 'history';

export interface setAlertAction {
  type: 'SETALERT';
  payload: Alert;
}
export interface setAlertSuccess {
  type: 'SETALERT_SUCCESS';
  payload: Alert;
}

export interface removeAlertAction {
  type: 'REMOVEALERT';
  payload: string | undefined;
}

export interface removeAlertSuccess {
  type: 'REMOVEALERT_SUCCESS';
  payload: string | undefined;
}

export interface getEmployeesAction {
  type: 'GET_EMPLOYEES';
}

export interface getEmployeesSucess {
  type: 'GET_EMPLOYEES_SUCCESS';
  payload: Employee;
}

export interface getEmployeeAction {
  type: 'GET_EMPLOYEE';
  payload: string;
}

export interface getEmployeeSucess {
  type: 'GET_EMPLOYEE_SUCCESS';
  payload: Employee;
}

export interface registerEmployeeAction {
  type: 'REGISTER_EMPLOYEE';
  payload: Employee;
  history: History;
}

export interface registerEmployeeSuccess {
  type: 'REGISTER_EMPLOYEE_SUCCESS';
  payload: Employee;
}

export interface updateEmployeeAction {
  type: 'UPDATE_EMPLOYEE';
  payload: Employee;
  history: History;
}

export interface updateEmployeeSuccess {
  type: 'UPDATE_EMPLOYEE_SUCCESS';
  payload: Employee;
}

export interface deleteEmployeeAction {
  type: 'DELETE_EMPLOYEE';
  payload: string | undefined;
}

export interface deleteEmployeeSuccess {
  type: 'DELETE_EMPLOYEE_SUCCESS';
  payload: string | undefined;
}

//Action Types
export enum ActionTypes {
  SETALERT = 'SETALERT',
  SETALERT_SUCCESS = 'SETALERT_SUCCESS',
  REMOVEALERT = 'REMOVEALERT',
  REMOVEALERT_SUCCESS = 'REMOVEALERT_SUCCESS',
  GET_EMPLOYEES = 'GET_EMPLOYEES',
  GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS',
  GET_EMPLOYEE = 'GET_EMPLOYEE',
  GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS',
  REGISTER_EMPLOYEE = 'REGISTER_EMPLOYEE',
  REGISTER_EMPLOYEE_SUCCESS = 'REGISTER_EMPLOYEE_SUCCESS',
  UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE',
  UPDATE_EMPLOYEE_SUCCESS = 'UPDATE_EMPLOYEE_SUCCESS',
  DELETE_EMPLOYEE = 'DELETE_EMPLOYEE',
  DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS',
  EMPLOYEE_ERROR = 'EMPLOYEE_ERROR',
}
