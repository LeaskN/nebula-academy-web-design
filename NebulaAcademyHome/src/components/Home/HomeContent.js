import React, { Component } from 'react';
import { Row, Carousel, Container } from 'react-bootstrap';
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
            steamforkids: { color: '#8E5EA5', header:"STEAM for Kids", content: "This is the steamForKids content" },
            educators: { color: '#993955', header:"Educators", content: "This is the educators content" }, 
            workforcedevelopment: { color: '#138DFE', header:"Workforce Development", content: "This is the workforceDevelopment content" },
            universities: { color: '#8FBFE0', header:"Universities", content: "This is the universities content" },
            philanthropy: { color: '#9395D3', header:"Philanthropy", content: "This is the philanthropy content" },
        };
    }
    handleChange = (e) => {
        e.preventDefault()
        let targetTitle = e.target.innerHTML.split(' ').join('').toLowerCase();
        this.setState({
            clicked: targetTitle,
        })
    }
    mouseOver = (e) => {
        let targetTitle = e.target.innerHTML.split(' ').join('').toLowerCase();
        e.target.style.backgroundColor = this.state[targetTitle].color;
    }
    mouseAway = (e) => {
        e.target.style.backgroundColor = 'transparent'
    }
render() {
        return (
            <React.Fragment>
                    <br/>
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
                    <div className="circleLineContainer">
                        <Row className="circleContainer">
                            <div className="circle" style={{backgroundColor:`${this.state.backgroundColor}`, border:`3px solid ${this.state[this.state.clicked].color}`}} onMouseEnter={ e => this.mouseOver(e)} onMouseLeave={ e => this.mouseAway(e)} onClick={e => this.handleChange(e)}>STEAM for Kids</div>
                            <div className="circle" style={{backgroundColor:`${this.state.backgroundColor}`, border:`3px solid ${this.state[this.state.clicked].color}`}} onMouseEnter={ e => this.mouseOver(e)} onMouseLeave={ e => this.mouseAway(e)}onClick={e => this.handleChange(e)}>Educators</div>
                            <div className="circle" style={{backgroundColor:`${this.state.backgroundColor}`, border:`3px solid ${this.state[this.state.clicked].color}`}} onMouseEnter={ e => this.mouseOver(e)} onMouseLeave={ e => this.mouseAway(e)}onClick={e => this.handleChange(e)}>Workforce Development</div>
                            <div className="circle" style={{backgroundColor:`${this.state.backgroundColor}`, border:`3px solid ${this.state[this.state.clicked].color}`}} onMouseEnter={ e => this.mouseOver(e)} onMouseLeave={ e => this.mouseAway(e)}onClick={e => this.handleChange(e)}>Universities</div>
                            <div className="circle" style={{backgroundColor:`${this.state.backgroundColor}`, border:`3px solid ${this.state[this.state.clicked].color}`}} onMouseEnter={ e => this.mouseOver(e)} onMouseLeave={ e => this.mouseAway(e)}onClick={e => this.handleChange(e)}>Philanthropy</div>
                        </Row>
                        <Row className="lineContainer">
                            <div style={{backgroundColor:`${this.state[this.state.clicked].color}`}} className="line"></div>
                            <div style={{backgroundColor:`${this.state[this.state.clicked].color}`}} className="line"></div>
                            <div style={{backgroundColor:`${this.state[this.state.clicked].color}`}} className="line"></div>
                            <div style={{backgroundColor:`${this.state[this.state.clicked].color}`}} className="line"></div>
                            <div style={{backgroundColor:`${this.state[this.state.clicked].color}`}} className="line"></div>
                        </Row>
                    </div>
                    <Container>
                        <Row style={{border:`3px solid ${this.state[this.state.clicked].color}`}} className="dynamicHomeInfo">
                            <h1>{this.state[this.state.clicked].header}</h1>
                            <p>{this.state[this.state.clicked].content}</p>
                        </Row>
                    </Container>
            </React.Fragment>
            )

    }
};

export default HomeContent;