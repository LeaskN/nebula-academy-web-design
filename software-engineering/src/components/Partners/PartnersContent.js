import React from 'react';
import { Container, Row, Col, 
  // Card 
} from 'react-bootstrap';
import Iframe from 'react-iframe';

import './PartnersContent.css'

export const PartnersContent = () => (
  <React.Fragment>
    <Container>
      <p>We look forward to the opportunity to support you. Either take the first step to engage with our team by completing our <a href="#application">partner application below</a> or read on for more information.</p>
      <p>Employment of computer and information technology occupations is projected to grow 21 percent from 2018 to 2028, much faster than the average for all occupations. These occupations are projected to add about 546,200 new jobs. Demand for these workers will stem from greater emphasis on cloud computing, the collection and storage of big data, and information security. Nebula Academy is helping companies prepare for the future of work. Let us help you with you recruitment needs, as we develop the talent to grow your business. </p>
      <p>We invite you to sign up for our partner program and engage with our team to build capacity for your growing resource needs.  As a new program we are offering this opportunity at no cost to your business.  It really is a WIN WIN WIN all around! The first group of participants will complete the training in July 2020.</p>
      <h3>WIN for Partners:</h3>
      <ul>
        <li>
        Access to a talent pipeline trained and skilled on the latest developer platforms, DevOps, and AWS Certified.
        </li>
        <li>
        Experience the talent on your projects without incurring a cost to support or manage the resources, think of it as a try before you hire.
        </li>
        <li>
        A team of industry experts with over 30 years of experience in the IT training field, who understand your technical resource needs and your business growth needs.
        </li>
        <li>
        Upon graduation our participants are not only skilled and ready to support your needs technically, but they have the soft skills necessary for today’s workforce.
        </li>
      </ul>
      <h3>WIN for Participants:</h3>
      <ul>
        <li>
        Through our partnership with We Connect The Dots participants can apply for full and partial scholarships to our program.
        </li>
        <li>
        Participants are not just learning, they are building both the soft skills and the technical skills necessary for successful employment.
        </li>
        <li>
        Upon graduation participants have real-world problem solving and industry skills to give employers value from day 1 on the job.
        </li>
      </ul>
      <h3>WIN for Nebula Academy:</h3>
      <ul>
        <li>
        Our mission as a social enterprise is to build both diversity and capacity within the growing field of information technology. 
        </li>
        <li>
        Through our training programs we will change lives in a positive way by enabling underrepresented populations the opportunity to realize their full potential.
        </li>
        <li>
        Through continued growth of partnerships with businesses we will grow our own capacity to develop high quality resources resulting from our training programs.
        </li>
      </ul>
      <p id="application">The NYS Governor’s office and the NYS Department of Labor understand how important our program is to businesses. Check out the <a href="https://tinyurl.com/wctdgrant" target="empty">recent grant award</a> in partnership with We Connect The dots that will support our success together. We look forward to taking this first step with you, once you complete the application. Upon completion of the application you can expect engagement from our team outlining the full details of the partner program.</p>
      <h2>Partner Application:</h2>
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