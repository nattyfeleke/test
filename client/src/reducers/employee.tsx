import {
  getEmployeeSucess,
  getEmployeesSucess,
  registerEmployeeSuccess,
  updateEmployeeSuccess,
  deleteEmployeeSuccess,
} from '../types/actionTypes';

import storeTypes, { Employee } from '../types/storeTypes';

const initialState: storeTypes['employee'] = {
  employees: [],
  employee: null,
  loading: true,
};

const employee = (
  state: storeTypes['employee'] = initialState,
  action: any
  // action:
  //   | registerEmployeeSuccess
  //   | updateEmployeeSuccess
  //   | getEmployeeSucess
  //   | getEmployeesSucess
  //   | deleteEmployeeSuccess
) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_EMPLOYEES_SUCCESS':
      return {
        ...state,
        employees: payload,
        employee: null,
        loading: false,
      };
    case 'GET_EMPLOYEE_SUCCESS':
      return {
        ...state,
        employee: payload,
        loading: false,
      };
    case 'REGISTER_EMPLOYEE_SUCCESS':
      return {
        ...state,
        employees: [...state.employees, payload],
        loading: false,
      };
    case 'UPDATE_EMPLOYEE_SUCCESS':
      return {
        ...state,
        employees: state.employees.map((emp) => {
          if (emp._id === payload._id) return payload;
          return emp;
        }),
        loading: false,
      };
    case 'DELETE_EMPLOYEE_SUCCESS':
      return {
        ...state,
        employees: state.employees.filter((emp) => emp._id !== payload._id),
        loading: false,
      };

    default:
      return state;
  }
};

export default employee;
