import React, { Component } from 'react';
import { Row, Carousel, Col, Button } from 'react-bootstrap';
import ShapeAndContent from '../Global/ShapeAndContent'
import slide1 from '../../assets/1_AWS_home.jpg'
import slide2 from '../../assets/1_AWS_home.jpg'
import slide3 from '../../assets/1_AWS_home.jpg'

import './STEAMForKidsContent.css';

class STEAMForKids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'transparent',
            clicked: 'whyissteamforkidsimportant?',
            shape: 'square',
            elements : [
                { color: '#8E5EA5', header:"Why is STEAM for Kids Important?", content: "This is the whysteamforkids content" },
                { color: '#993955', header:"What do we teach?", content: "This is the whatdoweteach content" }, 
                { color: '#138DFE', header:"Teaching methodology", content: "This is the teachingmethodology content" },
                { color: '#8FBFE0', header:"What are the Technologies we use?", content: "This is the whatarethetechnologiesweuse content" },
                { color: '#9395D3', header:"Outcomes", content: "This is the outcomes content" },
            ],
            'whyissteamforkidsimportant?': { color: '#8E5EA5', header:"Why is STEAM for Kids Important?", content: "This is the whysteamforkids content" },
            'whatdoweteach?': { color: '#993955', header:"What do we teach?", content: "This is the whatdoweteach content" }, 
            'teachingmethodology': { color: '#138DFE', header:"Teaching methodology", content: "This is the teachingmethodology content" },
            'whatarethetechnologiesweuse?': { color: '#8FBFE0', header:"What are the Technologies we use?", content: "This is the whatarethetechnologiesweuse content" },
            'outcomes': { color: '#9395D3', header:"Outcomes", content: "This is the outcomes content" },
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

export default STEAMForKids;