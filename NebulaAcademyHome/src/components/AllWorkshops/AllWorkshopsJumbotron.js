import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import './AllWorkshopsJumbotron.css'

export const AllWorkshopsJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="noMargin AllWorkshopsJumbo">
      <Container>
      <h1 className="contentCentered">AllWorkshops</h1>
      <p>Nebula Academy is a social enterprise institution. We aspire to help our community and world by giving back. Below are some programs from our not-for-profit, We Connect The Dots (<a href="https://wctd.org" className="link">WCTD.org</a>), that you can help support by funding our scholarships, sponsoring, donating, or volunteering. With your support, we can help underserved and underrepresented communities with students, ages 7-18, and adults locally, nationally and globally, through our programs. </p>
      <Button variant='info' href="https://wctd.org" target="blank">We Connect the Dots</Button>
      </Container>
    </Jumbotron>
  </React.Fragment>
)