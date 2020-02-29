import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Spin, Empty } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { bannerBackground, basic, text } from '../constants/styles';
import { useRootContext } from '../context';
import RecepieCard from '../components/Home';

const Recipe = ({ match }) => {
  const {
    state: { recipes },
  } = useRootContext();
  const [isLoading, setIsLoading] = useState(true);
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const recipeId = Number(match.params.id);
    const recipeObj = recipes.find(({ recipe }) => recipe.id === recipeId);

    setTimeout(() => {
      setRecipeData(recipeObj);
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <Loader>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 80 }} spin />} />
    </Loader>
  ) : (
    <Container>
      <BannerInfo>
        <CenterBlock>
          <Title>{recipeData.recipe.title}</Title>
          <Flex>
            CREATION TIME:{' '}
            <CreationTime>{recipeData.recipe.creation_time}</CreationTime>
          </Flex>
        </CenterBlock>
      </BannerInfo>

      <Description>
        <Subtitle>Recipe</Subtitle>
        {recipeData.recipe.description}
        <ChangeHistory>
          <Subtitle>Change history:</Subtitle>
          {recipeData.editing_history.length ? (
            <CardsWrapper>
              {recipeData.editing_history.map(recipe => (
                <RecepieCard key={recipe.id} recipe={recipe} />
              ))}
            </CardsWrapper>
          ) : (
            <Empty
              description={
                <span style={{ fontSize: '20px' }}>
                  Сhange history not found
                </span>
              }
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          )}
        </ChangeHistory>
      </Description>
    </Container>
  );
};

export default Recipe;

const Container = styled.div`
  color: ${basic};
`;

const BannerInfo = styled.div`
  background: ${bannerBackground};
  border-radius: 20px;
`;

const CenterBlock = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  font-weight: 600;
  font-size: 17px;
`;

const Title = styled.div`
  padding: 40px 0px;
  font-size: 45px;
  font-weight: 600;
`;

const CreationTime = styled.span`
  font-size: 17px;
  color: #cecece;
  margin-left: 5px;
`;

const Description = styled.div`
  padding-top: 40px;
  color: ${text};
  width: 80%;
  margin: 0 auto;
  font-size: 20px;
  word-wrap: break-word;
`;

const Subtitle = styled.div`
  color: ${text};
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 15px;
`;

const ChangeHistory = styled.div`
  margin-top: 40px;
`;

const Loader = styled.div`
  height: calc(100vh - 125px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
