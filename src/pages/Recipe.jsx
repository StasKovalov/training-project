import React from 'react';
import styled from 'styled-components';
import { bannerBackground, basic } from '../constants/styles';

const Recipe = () => (
  <Container>
    <BannerInfo>
      <CenterBlock>
        <Title>Title</Title>
        <Flex>
          CREATION TIME: <CreationTime>asdasdsads</CreationTime>
        </Flex>
      </CenterBlock>
    </BannerInfo>
  </Container>
);

export default Recipe;

const Container = styled.div``;

const BannerInfo = styled.div`
  background: ${bannerBackground};
`;

const CenterBlock = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  padding-bottom: 40px;
`;

const Title = styled.div`
  padding: 40px 0px;
  font-size: 40px;
  color: ${basic};
`;

const CreationTime = styled.span`
  font-size: 20px;
  color: grey;
  margin-left: 5px;
`;
