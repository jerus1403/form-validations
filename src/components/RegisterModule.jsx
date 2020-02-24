import React from 'react';
import styled from 'styled-components';

import {breakpoints, colors, fonts} from '../styleUtils';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    min-height: 130px;
    background: ${colors.registerBg};
    background: ${colors.registerBgGradient};
    color: ${colors.white};
    h1 {
        margin: auto;
        font-size: 30px;
        line-height: 1.1;
        font-family: '${fonts.bold}'
    }
    @media (min-width: ${breakpoints.desktop}) {
        min-height: 179px;
        h1 {
            font-size: 60px;
            line-height: 1.2;
        } 
    }
`;

const RegisterModule = () => {
    return (
        <Container>
            <h1>REGISTER</h1>
        </Container>
    )
};

export default RegisterModule;
