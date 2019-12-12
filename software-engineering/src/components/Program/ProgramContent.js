import React from 'react';
import { Row, Card, Col, Container } from 'react-bootstrap';
import './ProgramContent.css'

export const ProgramContent = () => (
  <React.Fragment>
    <Container>
        <h1>Learn to Code</h1>
        <p>You’ll be challenged in this immersive software engineering program. Taught by industry professionals, you’ll spend 5 days a week and 8 hours a day in learning sessions, coding time, and self-study. When you have finished our curriculum, you will have learned enough to launch a career in software development. We focus on holistic training, and part of our curriculum covers soft skills and personal development. Our curriculum covers everything you will need to know to be a full-stack developer, as well the opportunity to complete an industry certification from Amazon or Microsoft. From programming languages to industry best practices, you will get hands-on experience working with today’s web development tools.</p>
    </Container>
    <Row className="programContentRow">
        <Col xs={12} md={4}>
            <Card >
                <Card className="text-white subTile">
                    <Card.Img src={require('../../assets/NicLeaskPHOTO.jpg')} alt="Card image" />
                    <Card.ImgOverlay className="behindText">
                        <Card.Title>Elevate Yourself or Change Your Career</Card.Title>
                        <Card.Text>
                        Employment of computer and information technology occupations is projected to grow 21 percent from 2018 to 2028, much faster than the average for all occupations. These occupations are projected to add about 546,200 new jobs. Demand for these workers will stem from greater emphasis on cloud computing, the collection and storage of big data, and information security.  If you are in a current role that is being disrupted by innovation this is an opportunity to build a career that can sustain innovation growth.  Looking to change careers for whatever reason, Nebula Academy can support you in understanding the skills required to shift into new growing opportunities.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Card>
        </Col>
        <Col xs={12} md={4}>
            <Card className="row2Tile row2Tile2">
                <Card className="text-white subTile">
                    <Card.Img src={require('../../assets/NicLeaskPHOTO.jpg')} alt="Card image" />
                    <Card.ImgOverlay className="behindText">
                        <Card.Title>Career Preperation</Card.Title>
                        <Card.Text>
                        <p>It can be daunting to participate in an accelerated technology learning program, something that we at Nebula Academy understand well. Many of our participants are balancing school, work, home lives, and other responsibilities, on top of spending 30+ hours a week gaining critical tech skills through our boot camp programs.</p>
                        <p>We often hear that these learning experiences are the most challenging–and rewarding–of people’s lives. If you’ve decided to enroll in a Nebula Academy program, know that our team is dedicated to your success in gaining employment and building a sustainable career for you and your family.</p>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Card>
        </Col>
        <Col xs={12} md={4}>
            <Card className="row2Tile row2Tile2">
                <Card className="text-white subTile">
                    <Card.Img src={require('../../assets/NicLeaskPHOTO.jpg')} alt="Card image" />
                    <Card.ImgOverlay className="behindText">
                        <Card.Title>Coding Basics</Card.Title>
                        <Card.Text>
                        We believe in elevating students from passion and interest to full employment. What this means is that we do not require any coding experience. Many other programs will require students to learn on their own beforehand but we believe in teaching from the basics to full projects & deployment. However if you'd like to practice and get ahead of the crowd take a look at some of the following resources. 
                        </Card.Text>
                        <a className="linkLight" href="https://www.youtube.com/watch?v=bupWPZdXqIA">Starting up an HTML file.</a><br/>
                        <a className="linkLight" href="https://flexboxfroggy.com/">Structuring web pages game.</a><br/>
                        <a className="linkLight" href="https://www.w3schools.com/js/js_intro.asp">W3's introduction to JavaScript.</a><br/>
                        <a className="linkLight" href="https://www.youtube.com/watch?v=GTWrWM1UsnA">The Coding Train's JavaScript Tic Tac Toe.</a><br/>
                        <a className="linkLight" href="https://www.youtube.com/watch?v=Ukg_U3CnJWI">What is JavaScript?</a><br/>
                        <a className="linkLight" href="https://www.youtube.com/playlist?list=PLM_i0obccy3uiITMEb7PUlzgIFlxq9fvv">JavaScript for beginners.</a><br/>
                    </Card.ImgOverlay>
                </Card>
            </Card>
        </Col>
    </Row>
  </React.Fragment>
)

