import React from 'react';
import { Jumbotron, Container, Button} from 'react-bootstrap';
import './EducatorsJumbotron.css'

export const EducatorsJumbotron = () => (
  <React.Fragment>
    <Jumbotron className="noMargin" style={{padding:'15px'}}>
      <Container>
        <h1 className="contentCentered">Transforming Education by Empowering Educators</h1>
        <p> We are educators and technologists working together to better education through Computer Science and STEAM integration in and out of the classroom in partnership with industry. </p>
        <p>Nebula Academy offers immersive training experiences for school districts that want to not only provide their teachers with the skills necessary to educate the next generation of students, but also want to ensure the investment in training carries over into the classroom. We also provide teachers with the skills and tools to engage with the modern classroom of dynamic learning styles, and to leverage technology as a tool engaging the classroom in project based experiential learning. </p>
      <Button variant="secondary">CSTeach.nebulaacademy.com</Button>
      </Container>
    </Jumbotron>
  </React.Fragment>
)