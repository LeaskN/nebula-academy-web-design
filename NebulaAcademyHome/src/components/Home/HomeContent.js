import React, { Component } from 'react';
import { Row, Carousel, Col, Button } from 'react-bootstrap';
import ShapeAndContent from '../Global/ShapeAndContent'
import slide1 from '../../assets/1_AWS_home.jpg'
import slide2 from '../../assets/1_AWS_home.jpg'
import slide3 from '../../assets/1_AWS_home.jpg'

import './HomeContent.css';

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'transparent',
            clicked: 'steamforkids',
            shape: 'circle',
            slides: [
                {
                    image: slide1,
                    al: 'First slide',
                    header: 'This is the first SE slide header',
                    body: 'This is the first slide body',
                },{
                    image: slide2,
                    al: 'Second slide',
                    header: 'This is the second SE slide header',
                    body: 'This is the second slide body',
                },{
                    image: slide3,
                    al: 'Third slide',
                    header: 'This is the third SE slide header',
                    body: 'This is the third slide body',
                }
            ],
            elements: [ 
                { color: '#8E5EA5', header:"STEAM for Kids", content: "This is the steamForKids content" },
                { color: '#993955', header:"Educators", content: "This is the educators content" }, 
                { color: '#138DFE', header:"Workforce Development", content: "This is the workforceDevelopment content" },
                { color: '#8FBFE0', header:"Universities", content: "This is the universities content" },
                { color: '#9395D3', header:"Philanthropy", content: "This is the philanthropy content" },
            ],
            'steamforkids': { color: '#8E5EA5', header:"STEAM for Kids", content: "This is the steamForKids content" },
            'educators': { color: '#993955', header:"Educators", content: "This is the educators content" }, 
            'workforcedevelopment': { color: '#138DFE', header:"Workforce Development", content: "This is the workforceDevelopment content" },
            'universities': { color: '#8FBFE0', header:"Universities", content: "This is the universities content" },
            'philanthropy': { color: '#9395D3', header:"Philanthropy", content: "This is the philanthropy content" },
        };
    }
    createSlides = () => {
        return (
            this.state.slides.map(slide => (
                <Carousel.Item>
                    <img className="d-block w-100" alt={slide.image} src={slide.image} al={slide.al}/>
                    <Carousel.Caption>
                        <h3>{slide.header}</h3>
                        <p>{slide.body}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))
        )
    }
render() {
        return (
            <React.Fragment>
                <Carousel >
                    {this.createSlides()}
                </Carousel>
                        <ShapeAndContent state={this.state} />
                    <Row style={{marginLeft: '10vw', marginRight: '10vw'}}>
                        <Col className="HomeUrlCard">
                            <h1>STEAM for Kids</h1>
                            <div id="spacer"></div>
                            <Button className='bottom' variant="secondary"> Test Button</Button>
                        </Col>
                        <Col className="HomeUrlCard">
                            <h1>Educators</h1>
                            <div id="spacer"></div>
                            <Button className='bottom' variant="secondary"> Test Button</Button>
                        </Col>
                        <Col className="HomeUrlCard">
                            <h1>Workforce Development</h1>
                            <div id="spacer"></div>
                            <Button className='bottom' variant="secondary"> Test Button</Button>
                        </Col>
                        <Col className="HomeUrlCard">
                            <h1>Universitites</h1>
                            <div id="spacer"></div>
                            <Button className='bottom' variant="secondary"> Test Button</Button>
                        </Col>
                        <Col className="HomeUrlCard">
                            <h1>Philanthropy</h1>
                            <div id="spacer"></div>
                            <Button className='bottom' variant="secondary"> Test Button</Button>
                        </Col>
                    </Row>
            </React.Fragment>
            )

    }
};

export default HomeContent;