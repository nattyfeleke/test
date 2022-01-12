import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import storeTypes from '../../types/storeTypes';
import { getEmployees } from '../../actions';
import {
  getEmployeesActionCreator,
  registerEmployeeActionCreator,
  setAlertActionCreator,
  removeAlertActionCreator,
} from '../../types/actionCreatorTypes';
import Navbar from '../Navbar';
import EmployeeList from './Employee';
import Spinner from '../Spinner';
import StyledEmployees from '../styles/Employees.styled';
import { Button } from '../styles/Components.styled';
import { Link } from 'react-router-dom';

interface Props {
  employee: storeTypes['employee'];
  getEmployees: getEmployeesActionCreator;
}

const Employees: React.FC<Props> = ({
  employee: { employees, loading },
  getEmployees,
}) => {
  interface EmployeesState {
    employee: {
      name: string;
      birthDate: string;
      gender: string;
      salary: number;
    }[];
  }
  const [emps, setEmployees] = useState<EmployeesState['employee']>([
    {
      name: 'Natnael Feleke',
      birthDate: '22-01-12',
      gender: 'male',
      salary: 20000,
    },
    {
      name: 'Tinsae Feleke',
      birthDate: '22-01-12',
      gender: 'female',
      salary: 20000,
    },
  ]);

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  // console.log(employees);
  return (
    <>
      <StyledEmployees>
        <h1>Employee List</h1>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {employees.length > 0 ? (
              employees.map((emp, index) => (
                <EmployeeList emp={emp} key={index} />
              ))
            ) : (
              <>
                <p>No Employees registered yet!</p>
                <Link to='/add'> Click here to add</Link>{' '}
              </>
            )}
          </>
        )}
      </StyledEmployees>
    </>
  );
};

const mapStateToProps = (state: storeTypes) => ({
  alert: state.alert,
  employee: state.employee,
});

export default connect(mapStateToProps, { getEmployees })(Employees);
