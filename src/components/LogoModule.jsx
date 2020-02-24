import React from 'react';
import styled from 'styled-components';

// import Logo from '../assets/logo-desktop@3x.png';
import Logo from '../assets/logo-desktop.svg';
import  {breakpoints} from '../styleUtils';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    img {
        height: 28px;
        width: 157px;
    }
    @media(min-width: ${breakpoints.desktop}) {
        img {
        height: 36px;
        width: 182px;
    }
    }
`;

const LogoModule = () => {
    return (
        <Container>
            <img src={Logo} alt="logo"/>
        </Container>
    )
}

export default LogoModule;
