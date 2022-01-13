import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Hero from './components/Hero';
import Employees from './components/employees/Employees';
import AddEmployee from './components/employees/AddEmployee';
import UpdateEmployee from './components/employees/UpdateEmployee';
import StyledHero from './components/styles/Hero.styled';
import AppWrapper from './components/styles/App.styled';
import Alert from './components/Alert';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Alert />
        <AppWrapper>
          <StyledHero>
            <Hero />
          </StyledHero>
          <Switch>
            <Route exact={true} path='/' component={Employees} />
            <Route exact={true} path='/add' component={AddEmployee} />
            <Route exact={true} path='/update/:id' component={UpdateEmployee} />
          </Switch>
        </AppWrapper>
      </Router>
    </>
  );
};

export default connect()(App);
