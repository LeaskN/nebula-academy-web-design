import React, { Component } from 'react';
import { Row, Col, Button, Carousel } from 'react-bootstrap';
import ShapeAndContent from '../Global/ShapeAndContent'
import AWSSlide1 from '../../assets/1_AWS_home.jpg';
import AWSSlide2 from '../../assets/1_AWS_home.jpg';
import AWSSlide3 from '../../assets/1_AWS_home.jpg';
import AWSSlide4 from '../../assets/1_AWS_home.jpg';
import AWSSlide5 from '../../assets/1_AWS_home.jpg';
import SESlide1 from '../../assets/1_AWS_home.jpg'
import SESlide2 from '../../assets/1_AWS_home.jpg'
import SESlide3 from '../../assets/1_AWS_home.jpg'

import './WorkforceDevelopmentContent.css';

class WorkforceDevelopment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'transparent',
            clicked: 'sciencebehindlearning',
            shape: 'square',
            softwareEngineeringCarouselItems: [{
                image: SESlide1,
                al: 'First slide',
                header: 'This is the first SE slide header',
                body: 'This is the first slide body',
            },{
                image: SESlide2,
                al: 'Second slide',
                header: 'This is the second SE slide header',
                body: 'This is the second slide body',
            },{
                image: SESlide3,
                al: 'Third slide',
                header: 'This is the third SE slide header',
                body: 'This is the third slide body',
            }],
            AWSCarouselItems: [{
                image: AWSSlide1,
                al: 'First slide',
                header: 'This is the first AWS slide header',
                body: 'This is the first slide body',
            },{
                image: AWSSlide2,
                al: 'Second slide',
                header: 'This is the second AWS slide header',
                body: 'This is the second slide body',
            },{
                image: AWSSlide3,
                al: 'Third slide',
                header: 'This is the third AWS slide header',
                body: 'This is the third slide body',
            },{
                image: AWSSlide4,
                al: 'Fourth slide',
                header: 'This is the fourth AWS slide header',
                body: 'This is the fourth slide body',
            },{
                image: AWSSlide5,
                al: 'Fifth slide',
                header: 'This is the fifth AWS slide header',
                body: 'This is the fifth slide body',
            }],
            elements : [
                { color: '#8E5EA5', header:"Try Coding", content: "Try before you buy! Want to learn to code? Thinking of joining a coding bootcamp but want to give it a try first? Give it a free 6 hour try with us! Participants will have the opportunity to try coding for free. We will build a simple and fun application to give our participants a coding experience. Any participants that decide on the day to sign up for our 6 month Software Engineering bootcamp will receive a $1000 discount. Any participants that attend and decide to sign up in the future will receive a $500 discount." },
                { color: '#993955', header:"Scholarships", content: `Scholarships are provided by We Connect The Dots, Inc., through government grants, and corporate and private donations. We Connect The Dots is able to provide a limited number of participants with full or partial scholarships. To learn more contact scholarships@wctd.org or call 631-468-7475 to speak with the WCTD program manager. The "Pathways to Success" program is currently offering 9 full scholarships to candidates who meet any of the populations outlined on this page. Applications are now being accepted for review for the March program.` }, 
                { color: '#138DFE', header:"Workforce Experience", content: "This is the Workforce Experience content" },
                { color: '#8FBFE0', header:"Guest Speakers", content: "This is the Guest Speakers content" },
                { color: '#9395D3', header:"Outcomes", content: "This is the Outcomes content" },
            ],
            'trycoding': { color: '#8E5EA5', header:"Try Coding", content: "Try before you buy!Want to learn to code? Thinking of joining a coding bootcamp but want to give it a try first? Give it a free 6 hour try with us! Participants will have the opportunity to try coding for free. We will build a simple and fun application to give our participants a coding experience. Any participants that decide on the day to sign up for our 6 month Software Engineering bootcamp will receive a $1000 discount. Any participants that attend and decide to sign up in the future will receive a $500 discount." },
            'scholarships': { color: '#993955', header:"Scholarships", content: `Scholarships are provided by We Connect The Dots, Inc., through government grants, and corporate and private donations. We Connect The Dots is able to provide a limited number of participants with full or partial scholarships. To learn more contact scholarships@wctd.org or call 631-468-7475 to speak with the WCTD program manager. The "Pathways to Success" program is currently offering 9 full scholarships to candidates who meet any of the populations outlined on this page. Applications are now being accepted for review for the March program.` }, 
            'workforceexperience': { color: '#138DFE', header:"Workforce Experience", content: "This is the Workforce Experience content" },
            'guestspeakers': { color: '#8FBFE0', header:"Guest Speakers", content: "This is the Guest Speakers content" },
            'outcomes': { color: '#9395D3', header:"Outcomes", content: "This is the Outcomes content" },
        };
    }
    createAWSSlides = () => {
        return (
            this.props.state.elements.map(element => (
                <div className={`${this.props.state.shape}`} key={element.header} style={{color:`black`}} onMouseEnter={ e => this.mouseOver(e)} onMouseLeave={ e => this.mouseAway(e)} onClick={e => this.handleClick(e)}>{element.header}</div>
            ))
        )
    }
    createAWSSlides = () => {
        return (
            this.state.AWSCarouselItems.map(element => (
                <Carousel.Item key={element.header}>
                    <img className="d-block w-100" alt={element.image} src={element.image} al={element.al}/>
                    <Carousel.Caption>
                        <h3>{element.header}</h3>
                        <p>{element.body}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))
            )
        }
        createSoftwareEngineeringSlides = () => {
            return (
                this.state.softwareEngineeringCarouselItems.map(element => (
                    <Carousel.Item key={element.header}>
                        <img className="d-block w-100" alt={element.image} src={element.image} al={element.al}/>
                        <Carousel.Caption>
                            <h3>{element.header}</h3>
                            <p>{element.body}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            )
        }
render() {
        return (
            <React.Fragment>
                <Row style={{marginLeft: '10vw', marginRight: '10vw'}}>
                        <Col className="WorkforceDevelopmentUrlCard" style={{borderColor: '#ff9900',  minWidth: '340px'}}>
                            <h1>AWS</h1>
                            <Carousel>
                                {this.createAWSSlides()}
                            </Carousel>
                            <div id="spacer"></div>
                            <Button className='bottom' href="https://aws.nebulaacademy.com" target="blank" variant="warning">AWS</Button>
                        </Col>
                        <Col className="WorkforceDevelopmentUrlCard" style={{ minWidth: '340px'}}>
                            <h1>Software Engineering</h1>
                            <Carousel>
                                {this.createSoftwareEngineeringSlides()}
                            </Carousel>
                            <div id="spacer"></div>
                            <Button className='bottom' href="https://code.nebulaacademy.com" target="blank" variant="secondary">Bootcamp</Button>
                        </Col>
                    </Row>
                    <ShapeAndContent state={this.state}/>
            </React.Fragment>
        )
    }
};

export default WorkforceDevelopment;