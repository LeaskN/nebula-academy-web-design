import React from 'react';
import { Container, Row, Col, 
  // Card 
} from 'react-bootstrap';
import Iframe from 'react-iframe';

import './PartnersContent.css'

export const PartnersContent = () => (
  <React.Fragment>
    <Container>
      <p>Employment of computer and information technology occupations is projected to grow 12 percent from 2018 to 2028, much faster than the average for all occupations. These occupations are projected to add about 546,200 new jobs. Demand for these workers will stem from greater emphasis on cloud computing, the collection and storage of big data, and information security.  Nebula Academy is helping companies prepare for the future of work.  Let us help you with you recruitment needs, as we develop the talent to grow your business. Sign up to become a partner with Nebula Academy and take our partner skills needs assessment to help ensure our programs align to the growing workforce of industry.</p>
      <p>To learn more about our Partner program and how you can benefit from our program participants complete this application form:</p>
    </Container>
    <Row>
        <Col className="formContainer">
            <Iframe url="https://forms.office.com/Pages/ResponsePage.aspx?id=DYC-61190U-xMgLVy3lNnmhMOgtjMC5JhCXq1Gwz5J5UNE1FNVZCUzJUSkUzRlpUNlJJSDdVREwxNiQlQCN0PWcu"
                width="850px"
                height="800px"
                id="myId"
                className="form"
                display="initial"
                position="relative"
                />
        </Col>
    </Row>
    {/* <Container className="partnersContainer">
      <Row>
        <Col className="partnersCard" xs={6} sm={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
        <Col className="partnersCard" xs={6} sm={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
        <Col className="partnersCard" xs={6} sm={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
        <Col className="partnersCard" xs={6} sm={3}>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
          <Card className="partnerCard">
            <Card.Img variant="top" src={require("../../assets/guestSpeaker.jpg")} />
          </Card>
        </Col>
      </Row>
    </Container> */}
  </React.Fragment>
)