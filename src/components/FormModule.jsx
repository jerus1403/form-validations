import React from 'react';
import styled from 'styled-components';

import Form from './Form';
import { breakpoints, colors } from '../styleUtils';

const TextContainer = styled.div`
  font-size: 18px;
  width: 556px;
  margin: auto;
  line-height: 1.1;
  p {
    color: ${colors.label};
    line-height: 1,2;
    text-align: center;
  }
`;

const Container = styled.div`
  padding: 30px;
  text-align: center;
  color: ${colors.label};
  font-size: 14px;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 15px;
    ${TextContainer} {
      font-size: 14px;
      width: auto;
      line-height: 1.4;
    }
  }
`;

const FormModule = () => {
  return (
    <Container>
      <TextContainer>
        <p>
          Enter your information below for exclusive offers, promotions and
          savings
        </p>
      </TextContainer>
      <Form />
    </Container>
  );
};
export default FormModule;
