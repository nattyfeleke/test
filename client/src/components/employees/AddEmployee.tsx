import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  Input,
  Label,
  RadioButtonLabel,
  RadioButtonInput,
  FormGroup,
  Options,
  ButtonInput,
} from '../styles/Components.styled';
import StyledRegister from '../styles/AddEmployee.styled';
import { connect } from 'react-redux';
import { registerEmployeeActionCreator } from '../../types/actionCreatorTypes';
import { registerEmployee } from '../../actions';
import storeType, { Employee, Alert } from '../../types/storeTypes';

interface Props extends RouteComponentProps<any> {
  alert: Alert[];
  registerEmployee: registerEmployeeActionCreator;
}

const AddEmployee: React.FC<Props> = ({ alert, registerEmployee, history }) => {
  const [values, setValues] = useState<Employee>({
    name: '',
    birthDate: '',
    gender: '',
    salary: 0,
  });

  useEffect(() => {
    if (alert.length === 1 && alert[0].alertType === 'success') resetForm();
  }, [alert]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    registerEmployee(values, history);
  };

  const resetForm = (): void => {
    setValues({ name: '', birthDate: '', gender: '', salary: 0 });
  };
  return (
    <>
      <StyledRegister>
        <h1>Register</h1>
        <h4> Manage all your employees effectively</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          numquam nostrum, ipsa officia, saepe aspernatur id inventore
        </p>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor='name'>Full Name</Label>
            <Input
              id='name'
              name='name'
              placeholder='Full Name'
              value={values.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='birthDate'>Date of birth</Label>
            <Input
              id='birthDate'
              name='birthDate'
              type='date'
              value={values.birthDate}
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
              value={values.salary}
              onChange={handleChange}
            />
          </FormGroup>
          <ButtonInput type='submit' value='Add Employee' />
        </form>
      </StyledRegister>
    </>
  );
};

const mapStateToProps = (state: storeType) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, { registerEmployee })(AddEmployee);
