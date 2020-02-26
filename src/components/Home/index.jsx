import React, { useState } from 'react';
import styled from 'styled-components';

import { Card, Icon } from 'antd';
import Editing from '../ModalWindows/Editing';

import { min, max } from '../../styles/MediaQueries';
import { transiton } from '../../constants/styles';

const { Meta } = Card;

const RecepieCard = ({ recepie, editing_history }) => {
  const initialValues = {
    title: recepie.title,
    description: recepie.description,
  };
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <StyledCard
        style={{ marginTop: 16 }}
        hoverable
        actions={[
          <Icon type='login' key='login' />,
          <Icon onClick={() => setIsVisible(true)} type='edit' key='edit' />,
          <Icon type='delete' key='delete' />,
        ]}
      >
        <form style={{ flexGrow: 1 }}>
          <Meta
            title={<Title>{recepie.title}</Title>}
            description={<Description>{recepie.description}</Description>}
          />
        </form>
        <Flex>
          CREATION TIME: <CreationTime>{recepie.creation_time}</CreationTime>
        </Flex>
      </StyledCard>
      <Editing
        initialValues={initialValues}
        recepie={recepie}
        editing_history={editing_history}
        isVisible={isVisible}
        hideModal={() => setIsVisible(false)}
        onSaveChanges={() => console.log('work')}
      />
    </>
  );
};

export default RecepieCard;

const StyledCard = styled(Card)`
  transition: ${transiton};
  display: flex;
  flex-direction: column;
  .ant-card-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  ${min.exLarge`
        width: 32%;
    `};
  ${max.exLarge`
        width: 48%;
    `};

  ${max.small`
      width: 100%;
    `}
`;

const Title = styled.h4`
  font-size: 24px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.span`
  font-size: 16px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 600;
  margin-top: 10px;
`;

const CreationTime = styled.span`
  font-size: 14px;
  color: grey;
  margin-left: 5px;
`;
