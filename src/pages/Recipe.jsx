import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { bannerBackground, basic, text } from '../constants/styles';

const Recipe = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {

 }, []);
return <Container>
<BannerInfo>
  <CenterBlock>
    <Title>Title</Title>
    <Flex>
      CREATION TIME: <CreationTime>asdasdsads</CreationTime>
    </Flex>
  </CenterBlock>
</BannerInfo>

<Description>
<Subtitle>Recipe</Subtitle>
  asdasdsadsasdasdsadsasdasdsadsasdasdsadsasdasdsadsasdasdsadsasdasdsadsasdasdsadsasdas
  dsadsasdasdsadsasdasdsadsasdasdsadsasdasdsadsasdasdsadsasdasdsadsa
  sdasdsadsasdasdsadsasdasdsadsasdasdsadsasdasdsads
</Description>
<ChangeHistory>
<Subtitle>Change history:</Subtitle>
</ChangeHistory>

       </Container>;
};


export default Recipe;

const Container = styled.div`
  color: ${basic};
  `;

const BannerInfo = styled.div`
  background: ${bannerBackground};
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
  color:#cecece;
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
  margin-top: 20px;
  border: 1px solid red;
`;
