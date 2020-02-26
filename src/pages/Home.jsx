import React from 'react';
import styled from 'styled-components';
import RecepieCard from '../components/Home';

const Home = () => (
  <Container>
    {Array(40)
      .fill()
      .map(i => (
        <RecepieCard />
      ))}
  </Container>
);

export default Home;

const Container = styled.div`
  padding-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
