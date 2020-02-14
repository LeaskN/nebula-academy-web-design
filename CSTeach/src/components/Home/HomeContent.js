import React, { Component } from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import CTLEImage from '../../assets/clteAlpha.png'

import './HomeContent.css';

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Gender__c:[],
            Ethnicity__c: [],
            show: false
        };
    }
render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} xl={4} className="introRow1Column1">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>There are 26k schools in the US and less than half teach Computer Science</h3>
                                    <Card.Text>
                                    Nebula Academy bridges the gap between academia and industry. We are a workforce accelerator that provides immersive training experience for school districts and teachers that want to not only provide their teachers with the skills necessary to educate the next generation of students, but also want to ensure the investment in training carries over into the classroom.The program provides teachers with the skills and tools to engage with the modern classroom of dynamic learning styles, and to leverage technology as a tool engaging the classroom in project-based experiential learning.
                                    </Card.Text>
                                    {/* <div id="spacer" ></div> */}
                                    {/* <Button className="bottom contentCentered"  href="/application" variant="primary">Apply Now</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={6} xl={4} className="introRow1Column2">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>Don't just take our word for it!</h3>
                                        <ul>
                                            <blockquote>"Technology also has the power to transform teaching by ushering in a new model of connected teaching. This model links teachers to their students and to professional content, resources, and systems to help them improve their own instruction and personalize learning."</blockquote>
                                        </ul>
                                        <ul>Source: <a href="https://www.ed.gov/oii-news/use-technology-teaching-and-learning" className="linkLight">U.S. Department of Education </a></ul>  
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={12} xl={4} className="introRow1Column3">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>Let us help you build your capacity</h3>
                                    <Card.Text>
                                    Our model helps to ensure that schools remain current and competitive with industry needs, and so students can leverage core skills in computational thinking for any career path they choose. We support schools and teachers incorporate technology and STEAM-related curriculum in the classrooms, as well as incorporate STEAM programs, such as summer camps, to ensure students and teachers stay up-to-date with the latest content. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={12} xl={8} className="introRow2Tile1">
                            <Row>
                                <Col xl={6}>
                                    <Card className="introRowTile">
                                        <Card.Body>
                                            <h3>Employment Statistics</h3>
                                            <blockquote>"Only six states have strategic plans for K-12 computer science."</blockquote>
                                            <blockquote>"Only 22 states have K-12 computer science standards."</blockquote>
                                            <p>Source: <a href="https://code.org/files/2018_state_of_cs.pdf" className="linkLight">Code.org </a></p>
                                            <blockquote>"I can say at the K-12 level there's a dramatic shortage of computer science teachers."</blockquote>
                                            <p>Source: <b>Jake Baskin, executive director of the Computer Science Teachers Association (CSTA). </b></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6}>
                                    <Card className="introRowTile">
                                        <Card.Body>
                                            <h3>CTLE</h3>
                                            <Card.Text>
                                            As a New York state-approved provider of Continuing Teacher and Leader Education (CTLE) hours, Nebula Academy can support your professional development and training needs. 
                                            </Card.Text>
                                            <a href="/careers" className="linkLight">Click here to read more about job readiness.</a>
                                            <div className="contentCentered" style={{padding: '20px', width:'100%'}}>
                                                <img src={CTLEImage} style={{height: '150px', filter:'invert(100%)' }} alt="ctle"></img>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col  xs={12} lg={12} xl={4}>
                            <Card className="bg-dark text-white">
                                <Card className="purpleBackground" style={{padding:'10px'}}>
                                    <br/>
                                    <h5 className="centralText">As the world becomes increasingly more digital, a strong understanding of computation, networking, and systems interactions (hardware and software) becomes that much more important to students in future opportunities.</h5>
                                    <p className="centralText">Source: <a className="linkLight" target="empty" href="https://medium.com/@andrewjjulian/my-school-added-a-k-12-computer-science-curriculum-your-school-should-too-bfac54f10129">&nbsp; Median</a></p>
                                    <h5 className="centralText">The U.S. Bureau of Labor Statistics predicts that the number of jobs will increase by 4% for high school teachers and 4% for postsecondary computer science teachers between 2018 and 2028.</h5>
                                    <p className="centralText">Source:<a className="linkLight" target="empty" href="https://www.indeed.com/career/software-engineer/salaries">&nbsp; Bureau of Labor Statistics</a></p>
                                    <br/>
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="introRow1Column1">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>Scholarships</h3>
                                    <p>Scholarships to our programs will be available soon. Check back soon to learn more details on how you can apply and be eligible for scholarships!</p>
                                    <p>Learn more about Scholarship opportunities:</p>
                                    <div id="spacer" ></div>
                                    <Button className="bottom contentCentered" href="/scholarships" variant="primary">Scholarships</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6}  className="introRow1Column2">
                            <Card className="introRowTile">
                                <Card.Body>
                                    <h3>More Info</h3>
                                    <p>As you navigate our website we have included details regarding our various programs, what to expect from our curriculum, the certifications we offer, and how we will support your continued success in implementing computer science technology in the classroom. If you have additional questions that we have not answered please reach out to our team at succeed@nebulaacademyny.com</p> 
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>      
            </React.Fragment>
        )
    }
};

export default HomeContent;