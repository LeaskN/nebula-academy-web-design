import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './WorkforceDevelopmentJumbotron.css'

export const WorkforceDevelopmentJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="noMargin">
      <Container>
      <h1 className="contentCentered">Workforce Development</h1>
      <p>Nebula Academy’s mission is to reignite the passion for learning in today’s continually disruptive workforce development industries. We achieve these objectives by leveraging tools and resources that support today’s modern learner, where technology is used as a tool for supporting more productive and engaging STEAM learning experiences.​</p>
      <p>We persevere to create social impact to support today’s modern workforce, a workforce continuously disrupted by technology innovation. Nebula Academy works within schools and businesses, providing professional development that incorporates coaching training, 21st Century Learning Design, Project-Based Learning, Computer Science and the integration of technology skills.</p>
      </Container>
    </Jumbotron>
  </React.Fragment>
)