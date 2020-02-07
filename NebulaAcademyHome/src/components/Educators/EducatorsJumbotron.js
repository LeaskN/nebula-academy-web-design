import React from 'react';
import { Jumbotron, Container, Button} from 'react-bootstrap';
import './EducatorsJumbotron.css'

export const EducatorsJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="EducatorsJumbo noMargin" style={{padding:'15px'}}>
      <Container>
        <h1 className="contentCentered">Transforming Education by Empowering Educators</h1>
        <p>We provide schools and teachers with the skills to engage with the modern classroom of dynamic learning styles by leveraging technology as a tool in project-based experiential learning.</p>
        <Button href="csteach.nebulaacademy.com" variant="secondary" target="empty" disabled>Educator Certifications</Button>
      </Container>
    </Jumbotron>
  </React.Fragment>
)