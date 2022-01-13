import React from 'react';
import EmployeesImage from '../images/employees.png';
import { Container, Image } from './styles/Components.styled';
import LogoImg from '../images/logo.svg';
import Navbar from './Navbar';
import StyledHeader from './styles/Header.styled';

const Hero: React.FC = () => {
  return (
    <>
      <Container>
        <StyledHeader>
          <img src={LogoImg} alt='logo' height='50' />
          <Navbar />
        </StyledHeader>

        <div id='heroContent'>
          <h2>Managing employees becomes easy</h2>

          <Image src={EmployeesImage} alt='employees' />
        </div>
      </Container>
    </>
  );
};

export default Hero;
