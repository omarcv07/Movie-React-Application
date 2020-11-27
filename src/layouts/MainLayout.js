import React from 'react';
import { Container } from 'react-bootstrap';

const MainWrapper = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default MainWrapper;