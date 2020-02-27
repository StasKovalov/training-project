import React from 'react';
import styled from 'styled-components';
import RecepieCard from '../components/Home';
import { useRootContext } from '../context';

const Home = () => {
  const {
    state: { recipes },
  } = useRootContext();
  return (
    <Container>
      {recipes.map(({ recipe, editing_history }) => (
        <RecepieCard
          key={recipe.id}
          recipe={recipe}
          editing_history={editing_history}
        />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
