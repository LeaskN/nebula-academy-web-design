import React from 'react';
import { Container, Col,
  // Row,  Card 
} from 'react-bootstrap';
import Iframe from 'react-iframe';
import './GuestSpeakerApplicationContent.css'

export const GuestSpeakerApplicationContent = () => (
  <React.Fragment>
    <Container>
      <p>The information technology field is vast and offers opportunities that span every industry.  At Nebula Academy we offer our participants the opportunity to hear and speak to industry experts from diverse communities across industries.  Participants will gain knowledge in areas such as DevOps, Network Management, Cybersecurity, IT Infrastructure, and much more.  Guest speakers are strategically blended into the overall program as instructors teaching their area of expertise, or as panelists for open discussions and career learning.</p>
      <p>If you work in the information technology field and would like to be considered to be a guest speaker for our programs, complete our application form:</p>
        <Col className="formContainer">
            <Iframe url="https://forms.office.com/Pages/ResponsePage.aspx?id=DYC-61190U-xMgLVy3lNnmhMOgtjMC5JhCXq1Gwz5J5UOFhSNkhaUVk5OFc2OFRRSElUTjFFSjI2QSQlQCN0PWcu"
                width="850px"
                height="800px"
                id="myId"
                className="form"
                display="initial"
                position="relative"
                />
        </Col>
    </Container>
  </React.Fragment>
)