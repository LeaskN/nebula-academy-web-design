import React from 'react';
import Container from 'react-bootstrap/container';

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)