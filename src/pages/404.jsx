import React from 'react';
import styled from 'styled-components';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
    const history = useHistory();
    return <Result
      status='404'
      title={<Title>404</Title>}
      subTitle={<SubTitle>Sorry, the page you visited does not exist.</SubTitle>}
      extra={
      <Button
        onClick={() => history.push('/')}
        style={{
        borderRadius: '10px'
    }}
        type='primary'
      >Back Home
      </Button>
}
    />;
};
    

    export default PageNotFound;

    const Title = styled.h1`
        font-size: 40px;
        font-weight: 600;
    `;

    const SubTitle = styled.h1`
        font-size: 20px;
    `;
