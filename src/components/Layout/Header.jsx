import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import RecepieBookLogo from '../../assets/icons/logo.svg';
import { text, hover, transiton } from '../../constants/styles';

const Header = () => (
  <Wrapper>
    <Logo src={RecepieBookLogo} alt='logo img' />
    <Container>
      <StyledNavLink to='/'>Recepies</StyledNavLink>
      <StyledNavLink to='/add-recepies'>Add Recepie</StyledNavLink>
    </Container>
  </Wrapper>
);

export default Header;

const Wrapper = styled.div`
  max-width: 1300px;
  flex-basis: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

const StyledNavLink = styled(NavLink)`
  color: ${text};
  text-transform: uppercase;
  transition: ${transiton};
  margin-right: 15px;
  &:hover {
    color: ${hover};
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Logo = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  margin: 0px 15px;
`;
