import React from 'react';
import { Jumbotron, Container, Button} from 'react-bootstrap';
import './EducatorsJumbotron.css'

export const EducatorsJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="noMargin">
      <Container>
      <h1 className="contentCentered">Educators</h1>
      <p>Educators Description</p>
      <Button variant="secondary">CSTeach.nebulaacademy.com</Button>
      </Container>
    </Jumbotron>
  </React.Fragment>
)