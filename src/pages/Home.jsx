import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import RecepieCard from '../components/Home';
import { useRootContext } from '../context';
import Common from '../components/ModalWindows/Common';

const Home = () => {
  const {
    state: { recipes },
  } = useRootContext();

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Parent>
        <Container>
          {recipes.map(({ recipe, editing_history }) => (
            <RecepieCard
              key={recipe.id}
              recipe={recipe}
              editing_history={editing_history}
            />
          ))}
        </Container>
        <ButtonWrapper>
          <StyledButton
            onClick={() => setIsVisible(true)}
            size="large"
            type="primary"
          >
            ADD RECIPE
          </StyledButton>
        </ButtonWrapper>
      </Parent>
      <Common
        isVisible={isVisible}
        type="add"
        hideModal={() => setIsVisible(false)}
      />
    </>
  );
};

export default Home;

const Parent = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
  font-size: 20px;
  font-weight: 500;
  width: 175px;
  height: 50px;
  box-shadow: 2px 7px 31px 4px rgba(14, 93, 230, 0.43);
  border-radius: 20px;
`;

const ButtonWrapper = styled.div`
  position: sticky;
  padding-top: 40px;
  bottom: 15px;
  display: flex;
  justify-content: center;
`;
