import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ShapeAndContent from '../Global/ShapeAndContent'
import slide1 from '../../assets/DronepicsChapinSchool_4.jpg'

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
                    header: 'Modern Technology',
                    body: <h5>We offer awareness and opportunity through creative programs that bring the latest innovations to students, parents, teachers, and communities.</h5>,
                },{
                    header: 'Industry Shaped Curriculum',
                    body: <h5>Our approach keeps our students updated on the latest technology solutions and our teachers work to bridge their knowledge with industry experts in STEAM fields.</h5>,
                },{
                    header: 'Not Just Coding',
                    body: <h5>Our programs not only teach kids computer science and computational thinking, but also help them to develop critical thinking and problem-solving skills they would need in their future careers.</h5>,
                }
            ],
            elements : [
                { color: '#8E5EA5', header:"Why is STEAM for Kids Important?", content: "We believe in the importance of building exposure and capacity for students who want to explore STEAM careers. Our aim is to build foundational and high-level thinking skills in students for a more sustainable future. " },
                { color: '#993955', header:"What do we teach?", content: "Our core focus is computer science. We introduce kids to coding and technology and we also help students build foundational skills that they can take forward into any career path. " }, 
                { color: '#138DFE', header:"Teaching methodology", content: "We use neuroscience research in how we apply our learning methods. Our instructors have the knowledge and skills to engage in more brain-friendly conversations that lead to positive outcomes and to create more brain-friendly learning environment and experience for our students." },
                { color: '#127FA5', header:"What are the Technologies we use?", content: "From micro:bits and drones to block coding and script coding, we have various platforms and technologies for kids to use as innovative solutions to help them build their computational thinking skills, and learn real-world knowledge. " },
                { color: '#9395D3', header:"Measuring Success", content: "Part of being a neuroscience research-based organization, Nebula Academy ensures each program has a pre- and post- assessment that our participants can complete. This allows us to learn and understand how we are shifting thinking and thought processes in our participants." },
            ],
            'whyissteamforkidsimportant?': { color: '#8E5EA5', header:"Why is STEAM for Kids Important?", content: "We believe in the importance of building exposure and capacity for students who want to explore STEAM careers. Our aim is to build foundational and high-level thinking skills in students for a more sustainable future. " },
            'whatdoweteach?': { color: '#993955', header:"What do we teach?", content: "Our core focus is computer science. We introduce kids to coding and technology and we also help students build foundational skills that they can take forward into any career path. " }, 
            'teachingmethodology': { color: '#138DFE', header:"Teaching methodology", content: "We use neuroscience research in how we apply our learning methods. Our instructors have the knowledge and skills to engage in more brain-friendly conversations that lead to positive outcomes and to create more brain-friendly learning environment and experience for our students." },
            'whatarethetechnologiesweuse?': { color: '#127FA5', header:"What are the Technologies we use?", content: "From micro:bits and drones to block coding and script coding, we have various platforms and technologies for kids to use as innovative solutions to help them build their computational thinking skills, and learn real-world knowledge. " },
            'measuringsuccess': { color: '#9395D3', header:"Measuring Success", content: "Part of being a neuroscience research-based organization, Nebula Academy ensures each program has a pre- and post- assessment that our participants can complete. This allows us to learn and understand how we are shifting thinking and thought processes in our participants." },
        };
    }
    createSlideCard = () => {
        return(
            this.state.slides.map(slide => (
                <Col style={{ backgroundColor: 'transparent'}} className="HomeUrlCard">
                    <div className="cardHeaderContainer">
                        <h1>{slide.header}</h1>
                    </div>
                    <p>{slide.body}</p>
                </Col>
            ))
        )
    }
render() {
    return (
        <React.Fragment>
            <Row style={{ backgroundImage: `url('${slide1}')`, backgroundSize: 'cover', marginLeft: '10vw', marginRight: '10vw', }}>
                { this.createSlideCard() }
            </Row>
                <ShapeAndContent state={this.state}/>
        </React.Fragment>
        )
    }
};

export default STEAMForKids;