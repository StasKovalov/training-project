import React from 'react';
import styled from 'styled-components';
import { Card, Icon } from 'antd';
import { min, max } from '../../styles/MediaQueries';
import { transiton } from '../../constants/styles';

const { Meta } = Card;

const RecepieCard = () => (
  <StyledCard
    style={{ marginTop: 16 }}
    actions={[
      <Icon type='login' key='login' />,
      <Icon type='edit' key='edit' />,
      <Icon type='delete' key='delete' />,
    ]}
  >
    <Meta title='Card title' description='This is the description' />
  </StyledCard>
);

export default RecepieCard;

const StyledCard = styled(Card)`
  transition: ${transiton};
  ${min.exLarge`
        width: 32%;
    `};
  ${max.exLarge`
        width: 48%;
    `};
`;
