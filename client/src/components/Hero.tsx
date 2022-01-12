import React from 'react';
import EmployeesImage from '../images/employees.png';
import { Container, Image } from './styles/Components.styled';
import LogoImg from '../images/logo.svg';
import Navbar from './Navbar';

const Hero: React.FC = () => {
  return (
    <>
      <Container>
        <img src={LogoImg} alt='logo' height='50' />
        <h2>Managing employees becomes easy</h2>
        <Image src={EmployeesImage} alt='employees' />

        <Navbar />
      </Container>{' '}
    </>
  );
};

export default Hero;
