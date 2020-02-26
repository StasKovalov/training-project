import React, { useState } from 'react';
import moment from 'moment';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import { Modal } from 'antd';
import { Input } from 'formik-antd';

import { ErrorMsg } from '../../common/Message';
import { FULL_DATE_FORMAT } from '../../constants';
import { getMinError, getRequiredError } from '../../constants/validationError';
import { text } from '../../constants/styles';

const { TextArea } = Input;

const updateRecepie = (
  prevRecepieVersion,
  editingHistory,
  { title, description },
) => {
  const updateRecepie = {
    recepie: {
      ...prevRecepieVersion,
      title,
      description,
      creation_time: moment().format(FULL_DATE_FORMAT),
    },
    editing_history: [prevRecepieVersion, ...editingHistory],
  };
};

const reciepSchema = Yup.object().shape({
  title: Yup.string()
    .required(getRequiredError('Title'))
    .min(3, getMinError('Title', 3)),
  description: Yup.string()
    .required(getRequiredError('Description'))
    .min(70, getMinError('Description', 70)),
});

const Editing = ({
  recepie,
  editing_history,
  initialValues,
  isVisible,
  hideModal,
  onSaveChanges,
}) => {
  return (
    <Modal
      title={<ModalTitle>RECIEP EDITING</ModalTitle>}
      visible={isVisible}
      onOk={onSaveChanges}
      onCancel={hideModal}
      destroyOnClose
    >
      <Formik initialValues={initialValues} validationSchema={reciepSchema}>
        {({ isSubmitting, handleChange }) => {
          return (
            <form onSubmit>
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
            </form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default Editing;

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
