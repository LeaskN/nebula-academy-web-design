import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './VideoJumbotron.css'

export const VideoJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="videoJumbo">
      <Container>
        <h1 className="homeJumboHeader contentCentered" style={{fontSize: '3em'}}>Videos</h1>
      </Container>
    </Jumbotron>
  </React.Fragment>
) 