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
    handleClick = (e) => {
        e.preventDefault()
        let targetTitle = e.target.innerHTML.split(' ').join('').toLowerCase();
        for(let i = 0; i < e.target.parentElement.children.length; i++){
            e.target.parentElement.children[i].style.backgroundColor = 'transparent';
            e.target.parentElement.children[i].style.backgroundColor = 'transparent'
            e.target.parentElement.children[i].style.border = '3px solid #8E5EA5';
            e.target.parentElement.children[i].style.color = 'black';
            e.target.style.boxShadow = `0px 0px 10px 3px transparent`;

        }
        this.setState({
            clicked: targetTitle,
            justClicked: true,
        })
        e.target.style.backgroundColor = this.state[targetTitle].color;
        e.target.style.border = '3px solid white';
        e.target.style.color = 'white';
    }
    mouseOver = (e) => {
        let targetTitle = e.target.innerHTML.split(' ').join('').toLowerCase();
        e.target.style.backgroundColor = this.state[targetTitle].color;
        e.target.style.border = '3px solid white';
        e.target.style.boxShadow = `0px 0px 10px 3px ${e.target.style.backgroundColor}`;
        e.target.style.color = 'white';
    }
    mouseAway = (e) => {
        if(this.state.justClicked){
            this.setState({
                justClicked: false,
            })
        } else {
            e.target.style.backgroundColor = 'transparent'
            e.target.style.border = '3px solid #8E5EA5';
            e.target.style.color = 'black';
            e.target.style.boxShadow = `0px 0px 10px 3px transparent`;
        }
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