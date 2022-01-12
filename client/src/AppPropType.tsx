import { Employee } from './types/storeTypes';
import {
  getEmployeesActionCreator,
  registerEmployeeActionCreator,
  setAlertActionCreator,
  removeAlertActionCreator,
} from './types/actionCreatorTypes';

interface AppPropType {
  employees: Employee[];
  getEmployees: getEmployeesActionCreator;
  registerEmployee: registerEmployeeActionCreator;
}

export default AppPropType;
