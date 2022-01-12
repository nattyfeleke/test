export type Alert = {
  id?: string;
  msg: string;
  alertType: string;
};

export interface Employee {
  _id?: string | undefined;
  name: string | undefined;
  birthDate: string | undefined;
  gender: string | undefined;
  salary: number | undefined;
}

export interface employee {
  employees: Employee[];
  employee: Employee | null;
  loading: boolean;
}

export type Alerts = Alert[];

interface storeType {
  alert: Alert[];
  employee: employee;
}

export default storeType;
