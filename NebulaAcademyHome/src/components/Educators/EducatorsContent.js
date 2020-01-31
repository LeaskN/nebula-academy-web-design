import React, { Component } from 'react';
import { Row, Carousel, Col, Button } from 'react-bootstrap';
import ShapeAndContent from '../Global/ShapeAndContent'
import slide1 from '../../assets/1_AWS_home.jpg'
import slide2 from '../../assets/1_AWS_home.jpg'
import slide3 from '../../assets/1_AWS_home.jpg'

import './EducatorsContent.css';

class Educators extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'transparent',
            clicked: 'sciencebehindlearning',
            shape: 'square',
            elements : [
                { color: '#8E5EA5', header:"Science behind learning", content: "This is the sbl content" },
                { color: '#993955', header:"CS Educator Capacity", content: "This is the CS Educator Capacity content" }, 
                { color: '#138DFE', header:"CS Certifications", content: "This is the CS Certifications content" },
                { color: '#8FBFE0', header:"Coding in the Classroom", content: "This is the whatarethetechnologiesweuse content" },
                { color: '#9395D3', header:"Technology Integration", content: "This is the Technology Integration content" },
            ],
            'sciencebehindlearning': { color: '#8E5EA5', header:"Science behind learning", content: "This is the sbl content" },
            'cseducatorcapacity': { color: '#993955', header:"CS Educator Capacity", content: "This is the CS Educator Capacity content" }, 
            'cscertifications': { color: '#138DFE', header:"CS Certifications", content: "This is the CS Certifications content" },
            'codingintheclassroom': { color: '#8FBFE0', header:"Coding in the Classroom", content: "This is the whatarethetechnologiesweuse content" },
            'technologyintegration': { color: '#9395D3', header:"Technology Integration", content: "This is the Technology Integration content" },
        };
    }
render() {
        return (
            <React.Fragment>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Carousel of each audience with a picture, quote, and clickthrough to their pre-website landing page</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Carousel of each audience with a picture, quote, and clickthrough to their pre-website landing page</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Carousel of each audience with a picture, quote, and clickthrough to their pre-website landing page</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    <ShapeAndContent state={this.state}/>
                    <Row style={{marginLeft: '10vw', marginRight: '10vw'}}>
                        <Col className="STEAMKidsUrlCard">
                            <h1>STEAM for Kids</h1>
                            <div id="spacer"></div>
                            <Button className='bottom' variant="secondary"> Test Button</Button>
                        </Col>
                        <Col className="STEAMKidsUrlCard">
                            <h1>What do We Teach?</h1>
                            <div id="spacer"></div>
                            <Button className='bottom' variant="secondary"> Test Button</Button>
                        </Col>
                        <Col className="STEAMKidsUrlCard">
                            <h1>Teaching Methodology </h1>
                            <div id="spacer"></div>
                            <Button className='bottom' variant="secondary"> Test Button</Button>
                        </Col>
                        <Col className="STEAMKidsUrlCard">
                            <h1>What are the Technologies We Use?</h1>
                            <div id="spacer"></div>
                            
                            <Button className='bottom' variant="secondary"> Test Button</Button>
                        </Col>
                        <Col className="STEAMKidsUrlCard">
                            <h1>Outcomes</h1>
                            <div id="spacer"></div>
                            <Button className='bottom' variant="secondary"> Test Button</Button>
                        </Col>
                    </Row>
            </React.Fragment>
            )

    }
};

export default Educators;