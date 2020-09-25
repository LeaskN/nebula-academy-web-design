import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './OutcomesContent.css'
import OldOutcomesContent from '../OldOutcomes/OldOutcomesContent';

export const OutcomesContent = () => (
    <React.Fragment>
        <div className="oldOutcomesContainer"> 
            <OldOutcomesContent/> 
        </div>
        <div className="contentContainer outcomesQuotesBG "> 
            <Row className="overImage">
                <Col className="removePadding" lg={true}>
                    <Card className="introRowTile">
                        <Card.Body className="transPurple">
                            <Card.Title>Embedding “Stacking” Industry and Professional Certifications within Higher Education</Card.Title>
                            <Card.Text>
                                The top three benefits to embedding or stacking industry and professional certifications 
                                in higher education are:
                                <br/>
                                <br/>
                                1. Students can complete both academic credential and industry/professional-recognized 
                                certification.
                                <br/>
                                2. It helps keep college/university curriculum up-to-date with industry standards. 
                                <br/>
                                3. Employers get students trained to their specifications or their various tools.
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="removePadding" lg={true}>
                    <Card className="introRowTile">
                        <Card.Body className="transOrange">
                            <Card.Title>
                                Industry Certifications are the norm in the modern workforce
                            </Card.Title>
                            <Card.Text>
                                There is growing interest in the certifications awarded by industry and professional associations. 
                                Today some 3.3 million Americans between the ages of 25 and 64 hold a job-related certification as their 
                                highest post-secondary credential (Lumina Foundation Strategic Plan 2017-2020). These certifications are 
                                not typically tied to a specific educational program; rather, they are awarded through direct assessment 
                                and validation of skills in cooperation with a business, trade association or another industry group.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="removePadding" lg={true}>
                    <Card className="introRowTile">
                        <Card.Body className="transPurple">
                            <Card.Title>
                                Reducing the gap between Higher Education and Industry needs
                            </Card.Title>
                            <Card.Text>
                                Nebula Academy bridges the gap between industry and colleges and universities to embed or “stack” industry 
                                certifications within higher education courses and/or programs. Our model of embedding certifications in 
                                educational programs allows learners to simultaneously obtain one or more marketable industry/professional certifications, 
                                along with their degree at graduation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </React.Fragment>
);

export default OutcomesContent;
