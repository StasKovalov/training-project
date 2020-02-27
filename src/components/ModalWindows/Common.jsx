import React, { useState } from 'react';
import moment from 'moment';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import { Modal, message, Button } from 'antd';
import { Input } from 'formik-antd';

import { ErrorMsg } from '../../common/Message';
import { FULL_DATE_FORMAT } from '../../constants';
import { getMinError, getRequiredError } from '../../constants/validationError';
import { text } from '../../constants/styles';
import { updateRecipe } from '../../context/actions';
import { useRootContext } from '../../context';
import { successMessage } from '../../constants/messages';

const { TextArea } = Input;

const createDispatchObject = (
  prevRecipeVersion,
  editingHistory,
  { title, description },
) => ({
  recipe: {
    ...prevRecipeVersion,
    title,
    description,
  },
  editing_history: [prevRecipeVersion, ...editingHistory],
});

const recipeSchema = Yup.object().shape({
  title: Yup.string()
    .required(getRequiredError('Title'))
    .min(3, getMinError('Title', 3)),
  description: Yup.string()
    .required(getRequiredError('Description'))
    .min(70, getMinError('Description', 70)),
});

const Common = ({
  recipe,
  editing_history,
  initialValues,
  isVisible,
  hideModal,
}) => {
  const { dispatch } = useRootContext();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async values => {
    await setIsLoading(true);
    const dispatchObject = createDispatchObject(
      recipe,
      editing_history,
      values,
    );

    setTimeout(() => {
      message.success(successMessage);
    }, 800);

    setTimeout(() => {
      updateRecipe(dispatch, dispatchObject);
      setIsLoading(false);
      hideModal();
    }, 1000);
  };

  return (
    <Modal
      title={<ModalTitle>RECIPE EDITING</ModalTitle>}
      visible={isVisible}
      centered
      okButtonProps={{
        htmlType: 'submit',
      }}
      onCancel={hideModal}
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
        {({ isSubmitting, handleSubmit, handleChange }) => {
          return (
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
                <ErrorMessage
                  name='title'
                  render={msg => <ErrorMsg>{msg}</ErrorMsg>}
                />
              </MarginBottom>

              <MarginBottom>
                <TextMarginBottom>Description:</TextMarginBottom>
                <AntdTextArea
                  onChange={handleChange}
                  autoSize={{ maxRows: 7 }}
                  placeholder='Description'
                  name='description'
                  disabled={isSubmitting}
                />
                <ErrorMessage
                  name='description'
                  render={msg => <ErrorMsg>{msg}</ErrorMsg>}
                />
              </MarginBottom>
              <FlexEnd>
                <StyledButton>Cancel</StyledButton>
                <StyledButton htmlType='submit' type='primary'>
                  Update
                </StyledButton>
              </FlexEnd>
            </form>
          );
        }}
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
`;

const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
`;
