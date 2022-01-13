import React from 'react';
import { Link } from 'react-router-dom';
import StyledNav from './styles/Navbar.styled';

const Navbar: React.FC = () => {
  return (
    <>
      <StyledNav>
        <Link to='/'>Employees</Link>
      </StyledNav>
    </>
  );
};

export default Navbar;
