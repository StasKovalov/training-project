import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { basic, zIndexPro } from '../../constants/styles';

const Layout = ({ children }) => (
  <Container>
    <Sticky>
      <Header />
    </Sticky>

    <Content>{children}</Content>
  </Container>
);

export default Layout;

const Container = styled.section`
  position: absolute;
  min-height: 100vh;
  padding: 20px;
`;

const Sticky = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: 15px 0px;
  top: 0;
  z-index: ${zIndexPro};
  background: ${basic};
`;

const Content = styled.div``;
