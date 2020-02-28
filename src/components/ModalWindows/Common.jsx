import React, { useState } from 'react';
import moment from 'moment';
import uid from 'uid';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import { Modal, message, Button } from 'antd';
import { Input } from 'formik-antd';

import { ErrorMsg } from '../../common/Message';
import { FULL_DATE_FORMAT } from '../../constants';
import { getMinError, getRequiredError, getMaxError } from '../../constants/validationError';
import { text } from '../../constants/styles';
import { updateRecipe, addRecipe } from '../../context/actions';
import { useRootContext } from '../../context';
import { successMessage } from '../../constants/messages';

const { TextArea } = Input;

const createDispatchObject = (
  prevRecipeVersion,
  editingHistory,
  { title, description },
  modalType,
) => {
  if (modalType === 'edit') {
    return {
      recipe: {
        ...prevRecipeVersion,
        title,
        description,
      },
      editing_history: [prevRecipeVersion, ...editingHistory],
    };
  }
  return {
    recipe: {
      id: uid(),
      title,
      description,
      creation_time: moment().format(FULL_DATE_FORMAT),
    },
    editing_history: [],
  };
};

const recipeSchema = Yup.object().shape({
  title: Yup.string()
    .required(getRequiredError('Title'))
    .min(3, getMinError('Title', 3))
    .max(50, getMaxError('Title', 50)),
  description: Yup.string()
    .required(getRequiredError('Description'))
    .min(70, getMinError('Description', 70))
    .max(300, getMaxError('Description', 700)),
});

const Common = ({ recipe = {}, editing_history, type, isVisible, hideModal }) => {
  const { dispatch } = useRootContext();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    title: recipe.title || '',
    description: recipe.description || '',
  };

  const onSubmit = async values => {
    await setIsLoading(true);
    const dispatchObject = createDispatchObject(recipe, editing_history, values, type);
    setTimeout(() => {
      message.success(successMessage);
    }, 800);

    setTimeout(() => {
      if (type === 'add') addRecipe(dispatch, dispatchObject);
      else updateRecipe(dispatch, dispatchObject);
      setIsLoading(false);
      hideModal();
    }, 1000);
  };

  return (
    <Modal
      title={<ModalTitle>{`${type} recipe`}</ModalTitle>}
      visible={isVisible}
      onCancel={hideModal}
      centered
      footer={null}
      destroyOnClose
    >
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          await onSubmit(values);
          setSubmitting(false);
        }}
        validationSchema={recipeSchema}
      >
        {({ isSubmitting, errors, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <MarginBottom>
              <TextMarginBottom>Title:</TextMarginBottom>
              <Input
                onChange={handleChange}
                size='large'
                placeholder='Title'
                name='title'
                disabled={isSubmitting}
              />
              <ErrorMessage name='title' render={msg => <ErrorMsg>{msg}</ErrorMsg>} />
            </MarginBottom>

            <MarginBottom>
              <TextMarginBottom>Description:</TextMarginBottom>
              <AntdTextArea
                onChange={handleChange}
                autoSize={{ minRows: 3, maxRows: 7 }}
                placeholder='Description'
                name='description'
                disabled={isSubmitting}
              />
              <ErrorMessage name='description' render={msg => <ErrorMsg>{msg}</ErrorMsg>} />
            </MarginBottom>
            <FlexEnd>
              <StyledButton onClick={hideModal}>Cancel</StyledButton>
              <StyledButton
                disabled={Object.keys(errors).length}
                loading={isLoading}
                htmlType='submit'
                type='primary'
              >
                {type}
              </StyledButton>
            </FlexEnd>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default Common;

const AntdTextArea = styled(TextArea)`
  resize: none;
  font-size: 16px;
`;

const TextMarginBottom = styled.p`
  color: ${text};
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 700;
`;

const MarginBottom = styled.div`
  margin-bottom: 10px;
`;

const ModalTitle = styled.h1`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
  & > span::first-letter {
    text-transform: uppercase;
  }
  &:last-child {
    margin-right: 0px;
  }
`;
