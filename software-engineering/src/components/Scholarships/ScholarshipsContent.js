import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ScholarshipsContent.css' 
import WCTDIcon from '../../assets/We_Connect_The_Dots_logo_Large.png';

export const ScholarshipsContent = () => (
  <React.Fragment>
    <Container>
    <div style={{height:"100px", justifyContent:"center", display:"flex"}}>
      <a href="https://wctd.org" target="_blank" rel="noopener noreferrer">
        <img height="100px" alt="wctd.org" src={WCTDIcon}></img>
      </a>
    </div>
    <br/>
    <p>Scholarships are provided by <a href="https://wctd.org" target="_blank" rel="noopener noreferrer">We Connect The Dots, Inc.</a>, through government grants, and corporate and private donations. We Connect The Dots is able to provide a limited number of participants with full or partial scholarships. To learn more contact scholarships@wctd.org or call 631-468-7475 to speak with the WCTD program manager.</p>
    <p>The "Pathways to Success" program is currently offering 9 full scholarships to candidates who meet any of the populations outlined on this page.  Applications are now being accepted for review for the March program.</p>

    </Container>
    <br/>
    <Container className="">
      <Row>
        <Col xs={6}>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={require("../../assets/17_homemaker.png")} />
            <Card.Body>
              <Card.Title>Homemaker Returning to the Workforce:</Card.Title>
              <ul className="cardInformation">
                <li>Are you someone who has worked primarily at home providing services for the home and family and has not been paid?</li>
                <li>Have you been dependent on the income of another household member but are no longer receiving support?</li>
                <li>Are you a dependent spouse of a member of the Armed Services on active duty and whose income has been greatly reduced due to deployment, death or disability of the member?</li>
                <li>Are you a homemaker who has been on public assistance, but is no longer eligible for assistance?</li>
                <li>Do you have limited marketable skills and need assistance in upgrading your skills to compete in today’s workforce environment?</li>
              </ul>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={6}>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src={require("../../assets/18_LowIncome.jpg")} />
              <Card.Body>
                <Card.Title>Low Income Individuals:</Card.Title>
                <ul>
                  <li>Are you someone who has received assistance in the last 6 months or is a member of a family that is receiving assistance?</li>
                  <li>Have you been receiving assistance from any of the following programs?</li>
                  <li>SNAP (supplemental nutrition assistance program)</li>	
                  <li>TANF (temporary assistance for needy families)</li>
                  <li>SSI (supplemental security income</li>
                  <li>State or local income-based public assistance</li>
                  <li>Does your total family income not exceed the higher of;</li>
                  <li>The poverty line; or</li>
                  <li>70% of the Lower Living Standard Income Level; or</li>
                  <li>Is a homeless individual.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={require("../../assets/19_Disability.jpg")} />
            <Card.Body>
              <Card.Title>Individuals with Disability:</Card.Title>
              <ul className="cardInformation">
                <li>Are you an individual with a physical impairment who has had difficulty finding employment and needs assistance with developing marketable skills?</li>
                <li>Are you able to perform normal life activities for example using a keyboard, mouse and reading a computer?</li>
                <li>Do you have a record of the impairment?</li>
              </ul>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={6}>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src={require("../../assets/20_55+.jpg")} />
              <Card.Body>
                <Card.Title>Individuals 55 and Older:</Card.Title>
                <ul>
                  <li>Are you an individual who is 55 and older and is experiencing difficulty in obtaining employment and are looking to upgrade your skill set for better opportunities, but cannot afford to better your education or broaden your skills?</li>
                  <li>Have you recently or in the last 12 months lost your job and would like to be employed?</li>
                  <li>Do you feel you are behind on current technology or that your skills are outdated?</li>	
                </ul>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={require("../../assets/21_singleparent.jpg")} />
            <Card.Body>
              <Card.Title>Single Parent:</Card.Title>
              <ul className="cardInformation">
                <li>Are you single, separated, divorced or widowed and have primary responsibility for one or more dependent children under age 18?</li>
                <li>Are you someone who has worked primarily at home providing services for the home and family and has not been paid?</li>
                <li>Have you been dependent on the income of another household member but are no longer receiving support?</li>
                <li>Are you a homemaker who has been on public assistance, but is no longer eligible for assistance?</li>
                <li>Do you have limited marketable skills and need assistance in upgrading your skills to compete in today’s workforce environment?</li>
              </ul>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={6}>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src={require("../../assets/22_veterans.jpg")} />
              <Card.Body>
                <Card.Title>Veteran:</Card.Title>
                <ul>
                  <li>Have you served at least one day in active military, naval or air service or full-time duty in the National Guard or Reserves and who was honorably discharged?</li>
                  <li>Are you experiencing difficulty in obtaining employment and are looking to upgrade your skills for better opportunities in the workforce?</li>
                  <li>Do you feel you are not up to date on current technology or business experience?</li>	
                </ul>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={require("../../assets/22_JusticeSystem.jpg")} />
            <Card.Body>
              <Card.Title>Individuals formerly involved in the justice system?</Card.Title>
              <ul className="cardInformation">
                <li>Are you at least 18 years old?</li>
                <li>Have you been subject to any stage of the criminal justice process?</li>
                <li>Do you require assistance in overcoming barriers to employment because of your record of arrest or conviction?</li>
              </ul>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={6}>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src={require("../../assets/22_homeless.jpg")} />
              <Card.Body>
                <Card.Title>Homeless individuals:</Card.Title>
                <ul>
                  <li>Are you currently homeless with no fixed, regular nighttime residence?</li>
                  <li>Are you currently sharing housing with other people due to loss of housing or economic hardship?</li>
                  <li>Are you living in emergency, transitional shelter or alternative, inadequate accommodations?</li>	
                  <li>Do you require assistance in overcoming barriers to employment?</li>
                  <li>Are you experiencing difficulty in obtaining employment and are looking to upgrade your skills for better opportunities in the workforce?</li>
                  <li>State or local income-based public assistance</li>
                  <li>Does your total family income not exceed the higher of:</li>
                  <li>The poverty line; or</li>
                  <li>70% of the Lower Living Standard Income Level; or</li>
                  <li>Is a homeless individual.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={require("../../assets/22_NativeAmerican.jpg")} />
            <Card.Body>
              <Card.Title>Native American:</Card.Title>
              <ul className="cardInformation">
                <li>Do you have Native American tribal documentation?</li>
                <li>Are you experiencing difficulty in obtaining employment and are looking to upgrade your skills for better opportunities?</li>
                <li>Do you feel you are not up to date on technology or business experience?</li>
                <li>Have you been receiving assistance or does your total family income not exceed the higher of;</li>
                    <ul>
                      <li>The poverty line</li>
                      <li>70% of the Lower Living Standard Income Level</li>
                      <li>Is a homeless individual</li>

                    </ul>
              </ul>
            </Card.Body>
          </Card>
          </Col>
          <h4 style={{textAlign:"center", fontWeight: "bold"}}>If you answered yes to any of the above questions, you may be eligible for a program scholarship.</h4>
      </Row>
    </Container>
  </React.Fragment>
)