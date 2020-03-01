import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { Card, Icon, Popconfirm, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Common from '../ModalWindows/Common';

import { min, max } from '../../styles/MediaQueries';
import { transiton } from '../../constants/styles';
import { deleteRecipe } from '../../context/actions';
import { useRootContext } from '../../context';
import { successMessage } from '../../constants/messages';

const { Meta } = Card;

const RecepieCard = ({ recipe, editing_history }) => {
  const history = useHistory();
  const { dispatch } = useRootContext();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <StyledCard
        style={{ marginTop: 16 }}
        hoverable
        onClick={() => editing_history && history.push(`/recipe/${recipe.id}`)}
        actions={
          editing_history && [
            <Icon
              onClick={e => {
                e.stopPropagation();
                history.push(`/recipe/${recipe.id}`);
              }}
              type="login"
              key="login"
            />,
            <Icon
              onClick={e => {
                e.stopPropagation();
                setIsVisible(true);
              }}
              type="edit"
              key="edit"
            />,
            <Popconfirm
              title="Are you sure delete this recipe?"
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              okText="Yes"
              onConfirm={e => {
                e.stopPropagation();
                setTimeout(() => {
                  deleteRecipe(dispatch, recipe.id);
                  message.success(successMessage('delet'));
                }, 500);
              }}
              cancelText="No"
            >
              <Icon
                onClick={e => e.stopPropagation()}
                type="delete"
                key="delete"
              />
            </Popconfirm>,
          ]
        }
      >
        <form style={{ flexGrow: 1 }}>
          <Meta
            title={<Title>{recipe.title}</Title>}
            description={<Description>{recipe.description}</Description>}
          />
        </form>
        <Flex>
          {editing_history ? 'CREATION TIME:' : 'EDITING TIME:'}{' '}
          <Time>
            {editing_history ? recipe.creation_time : recipe.editing_time}
          </Time>
        </Flex>
      </StyledCard>
      <Common
        recipe={recipe}
        type="edit"
        editing_history={editing_history}
        isVisible={isVisible}
        hideModal={() => setIsVisible(false)}
      />
    </>
  );
};

export default RecepieCard;

const StyledCard = styled(Card)`
  transition: ${transiton};
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  .ant-card-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  margin: 4px;

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

const Description = styled.div`
  font-size: 16px;
  word-wrap: break-word;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 600;
  margin-top: 10px;
`;

const Time = styled.span`
  font-size: 14px;
  color: grey;
  margin-left: 5px;
`;
