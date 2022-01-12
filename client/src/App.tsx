import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Hero from './components/Hero';
import Employees from './components/employees/Employees';
import AddEmployee from './components/employees/AddEmployee';
import UpdateEmployee from './components/employees/UpdateEmployee';
import StyledHero from './components/styles/Hero.styled';
import { Flex } from './components/styles/Components.styled';
import Alert from './components/Alert';

import storeType from './types/storeTypes';
import AppPropType from './AppPropType';

const App: React.FC<AppPropType | any> = ({
  employees,
  getEmployees,
  registerEmployee,
}) => {
  return (
    <>
      <Router>
        <Alert />
        <Flex>
          <StyledHero>
            <Hero />
          </StyledHero>
          <Switch>
            {/* <Route
              path='/'
              element={
                <StyledEmployees>
                <Employees />
                </StyledEmployees>
              }
            /> */}

            <Route exact={true} path='/' component={Employees} />
            <Route exact={true} path='/add' component={AddEmployee} />
            <Route exact={true} path='/update/:id' component={UpdateEmployee} />
          </Switch>

          {/* <Route
              path='/add'
              element={
                <StyledRegister>
                  <AddEmployee />
                </StyledRegister>
              }
            />
            <Route
              path='/update/:id'
              element={
                <StyledRegister>
                  <UpdateEmployee />
                </StyledRegister>
              }
            /> */}
        </Flex>
      </Router>
    </>
  );
};
const mapStateToProps = (state: storeType) => ({
  alert: state.alert,
  employee: state.employee,
});
export default connect()(App);
