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
            shape: 'circle',
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
                { color: '#8E5EA5', header:"Try Coding", content: "We take the risk out of making an investment in your future by providing participants an opportunity to test drive our program through our Monthly Try Coding days.  This 6 hour in person session provides the opportunity to build confidence, and clarity on an investment towards your future." },
                { color: '#993955', header:"Scholarships", content: `As a social enterprise our mission is to inspire future innovators through building awareness and skills related to technology and computer science.  Our methodology, Computer Science Growth System, combined with our scholarship programs builds capacity from K-Career.` }, 
                { color: '#138DFE', header:"Workforce Experience", content: "This is the Workforce Experience content" },
                { color: '#8FBFE0', header:"Guest Speakers", content: "The career world of information technology is expansive and can feel overwhelming to those entering it or navigating it.  We help our participants not only build the necessary skills to succeed but introduce them to learn from others who have successfully built careers in a continuously evolving world." },
                { color: '#9395D3', header:"Measuring Success", content: "As a research focused social enterprise metrics are key to our long-term sustainability. Measuring what matters to our customers and our team to ensure continuous improvement as we shape and reshape our programs to align with industry needs and ensure our outcomes are creating the right results." },
            ],
            'trycoding': { color: '#8E5EA5', header:"Try Coding", content: "We take the risk out of making an investment in your future by providing participants an opportunity to test drive our program through our Monthly Try Coding days.  This 6 hour in person session provides the opportunity to build confidence, and clarity on an investment towards your future." },
            'scholarships': { color: '#993955', header:"Scholarships", content: `As a social enterprise our mission is to inspire future innovators through building awareness and skills related to technology and computer science.  Our methodology, Computer Science Growth System, combined with our scholarship programs builds capacity from K-Career.` }, 
            'workforceexperience': { color: '#138DFE', header:"Workforce Experience", content: "This is the Workforce Experience content" },
            'guestspeakers': { color: '#8FBFE0', header:"Guest Speakers", content: "The career world of information technology is expansive and can feel overwhelming to those entering it or navigating it.  We help our participants not only build the necessary skills to succeed but introduce them to learn from others who have successfully built careers in a continuously evolving world." },
            'measuringsuccess': { color: '#9395D3', header:"Measuring Success", content: "As a research focused social enterprise metrics are key to our long-term sustainability. Measuring what matters to our customers and our team to ensure continuous improvement as we shape and reshape our programs to align with industry needs and ensure our outcomes are creating the right results." },
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