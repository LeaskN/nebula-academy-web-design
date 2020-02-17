import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import './CertificationsJumbotron.css'

export const CertificationsJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="certificationsJumbotron">
      <div className="certificationsOverlay"></div>
      <Container>
          <h1 className="jumboText">Certifications</h1>
          <p>We offer 2 certifications: STEAM Coach Certification and Computer Science Teaching Certification.</p>
          <p>Learn more about our programs here!</p>
          <div className="contentCentered" style={{display:'flex' }}>
            <Button href="/STEAMCoach">STEAM Coach</Button>
            <Button href="/cstc">CS Teaching</Button>
          </div>
          <br/>
          <p style={{margin:'0px'}}>Participants who take our programs will also earn Certificate of completions for each program they complete and can also earn CTLE credits, if applicable.</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
)

