import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Moment from 'moment';

import {
  Input,
  Label,
  RadioButtonLabel,
  RadioButtonInput,
  FormGroup,
  Options,
  ButtonInput,
  Button,
  Flex,
} from '../styles/Components.styled';
import StyledRegister from '../styles/AddEmployee.styled';

import {
  getEmployeeActionCreator,
  updateEmployeeActionCreator,
} from '../../types/actionCreatorTypes';
import { updateEmployee, getEmployee } from '../../actions';
import storeType, { Employee, Alert } from '../../types/storeTypes';
import Spinner from '../Spinner';

interface Props extends RouteComponentProps<any> {
  alert: Alert[];
  getEmployee: getEmployeeActionCreator;
  updateEmployee: updateEmployeeActionCreator;
  employee: storeType['employee'];
}

const UpdateEmployee: React.FC<Props> = ({
  alert,
  employee: { loading, employee },
  getEmployee,
  updateEmployee,
  match,
}) => {
  const [values, setValues] = useState<Employee>({
    name: employee?.name,
    birthDate: Moment(employee?.birthDate).format('YYYY-MM-DD').slice(0, 10),
    gender: employee?.gender,
    salary: employee?.salary && employee.salary,
  });

  useEffect(() => {
    if (alert.length === 1 && alert[0].alertType === 'success') resetForm();
  }, [alert]);

  useEffect(() => {
    getEmployee(match.params.id);
  }, [getEmployee, match.params.id]);

  useEffect(() => {
    setValues({
      name: employee?.name,
      birthDate: Moment(employee?.birthDate).format('YYYY-MM-DD').slice(0, 10),
      gender: employee?.gender,
      salary: employee?.salary,
    });
  }, [employee]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const updatedEmployee: Employee = {
      _id: employee?._id,
      name: values.name,
      birthDate: values.birthDate,
      gender: values.gender,
      salary: values.salary,
    };

    updateEmployee(updatedEmployee);
  };

  const resetForm = (): void => {
    setValues({ name: '', birthDate: '', gender: '', salary: 0 });
  };

  return (
    <>
      <StyledRegister>
        <h1>Update</h1>
        <h4> Manage all your employees effectively</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          numquam nostrum, ipsa officia, saepe aspernatur id inventore
        </p>
        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor='name'>Full Name</Label>
              <Input
                id='name'
                name='name'
                placeholder='Full Name'
                value={values.name ? values.name : ''}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='birthDate'>Date of birth</Label>
              <Input
                id='birthDate'
                name='birthDate'
                type='date'
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Gender</Label>
              <Options>
                <RadioButtonInput
                  type='radio'
                  id='male'
                  name='gender'
                  value='male'
                  checked={values.gender === 'male'}
                  onChange={handleChange}
                />
                  <RadioButtonLabel htmlFor='male'>Male</RadioButtonLabel>
              </Options>
              <Options>
                <RadioButtonInput
                  type='radio'
                  id='female'
                  name='gender'
                  value='female'
                  checked={values.gender === 'female'}
                  onChange={handleChange}
                />
                  <RadioButtonLabel htmlFor='female'>Female</RadioButtonLabel>
                <br />
              </Options>
            </FormGroup>
            <FormGroup>
              <Label htmlFor='name'>Salary</Label>
              <Input
                type='number'
                id='salary'
                name='salary'
                placeholder='Salary'
                value={values.salary ? values.salary : ''}
                onChange={handleChange}
              />
            </FormGroup>
            <Flex>
              <ButtonInput type='submit' value='Update Employee' />
              <Button variant='none'>
                <Link to='/'>Cancel</Link>
              </Button>
            </Flex>
          </form>
        )}
      </StyledRegister>
    </>
  );
};

const mapStateToProps = (state: storeType) => ({
  alert: state.alert,
  employee: state.employee,
});

export default connect(mapStateToProps, { getEmployee, updateEmployee })(
  UpdateEmployee
);
