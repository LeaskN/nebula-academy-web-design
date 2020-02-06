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
            shape: 'circle',
            slides: [
                {
                    image: slide1,
                    header: 'Modern Technology',
                    body: <h5>We pride ourselves on the technology platforms we choose to teach and utilize within our organization. In order to model and teach how technology increases potential and productivity, we must understand it in real-world applications.</h5>,
                },{
                    image: slide2,
                    header: 'Industry Shaped Curriculum',
                    body: <h5>We work hand-in-hand with our industry and university partners to create programs that help adults gain the skills to pursue meaningful and rewarding careers in the fast-growing tech economy</h5>,
                },{
                    image: slide3,
                    header: 'Certified Instruction',
                    body: <h5>Our instructors are certified industry professionals and have the necessary technological skills to run our programs. We ensure all of our participants and customers are getting the most up-to-date, cutting edge experience to be successful in today's modern workforce.</h5>,
                }
            ],
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
    createSlideCard = () => {
        return(
            this.state.slides.map(slide => (
                <Col style={{ backgroundColor: 'transparent'}} className="HomeUrlCard">
                    <h1>{slide.header}</h1>
                    <p>{slide.body}</p>
                </Col>
            ))
        )
    }
render() {
        return (
            <React.Fragment>
                <Row style={{ backgroundImage: `url('${slide2}')`, backgroundSize: 'cover', marginLeft: '10vw', marginRight: '10vw', }}>
                    { this.createSlideCard() }
                </Row>
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