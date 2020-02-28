import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import RecepieBookLogo from '../../assets/icons/logo.svg';
import { text, hover, transiton, logoText } from '../../constants/styles';
import { max } from '../../styles/MediaQueries';

const Header = () => (
  <>
    <Wrapper>
      <Flex>
        <HideWrapper>
          <Logo src={RecepieBookLogo} alt='logo img' />
          <LogoText>Coock Book</LogoText>
        </HideWrapper>

        <Container>
          <StyledNavLink
            activeStyle={{
              color: hover,
            }}
            to='/'
            exact
          >
            Recipes
          </StyledNavLink>
        </Container>
      </Flex>
    </Wrapper>
  </>
);

export default Header;

const Wrapper = styled.div`
  max-width: 1300px;
  flex-basis: 100%;
  margin: 0 auto;
  padding: 0px 20px;
`;

const Flex = styled.div`
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
  ${max.exSmall`
    height: 50px;
  `}
`;

const StyledNavLink = styled(NavLink)`
  color: ${text};
  text-transform: uppercase;
  transition: ${transiton};
  margin-right: 15px;
  font-size: 25px;
  &:hover {
    color: ${hover};
  }
  &:last-child {
    margin-right: 0;
  }

  ${max.exSmall`
    font-size:30px;
  `}
`;

const Logo = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  margin: 0px 15px;
`;

const LogoText = styled.div`
  font-size: 30px;
  color: ${logoText};
  font-weight: 600;
`;

const HideWrapper = styled.div`
  display: flex;
  align-items: center;
  ${max.exSmall`
    display: none;
  `}
`;
