import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ShapeAndContent from '../Global/ShapeAndContent'
import slide1 from '../../assets/Image1.jpg'
import slide2 from '../../assets/Image2.jpg'
import slide3 from '../../assets/Image3.jpg'

import './EducatorsContent.css';

class Educators extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'transparent',
            clicked: 'sciencebehindlearning',
            shape: 'circle',
            slides: [{
                    image: slide2,
                    al: 'Second slide',
                    header: '“I gained valuable skills and knowledge to bring technology into my classroom.”',
                },{
                    image: slide1,
                    al: 'First slide',
                    header: '“It helped me as a facilitator to have a new perspective on teaching, learning and the neuroscience behind education. Having a new understanding of how students operate help to better relate to their behaviors.”',
                },{
                    image: slide3,
                    al: 'Third slide',
                    header: '“The light bulb went off and I was able to put what I was learning into perspective as a mom and teacher.”',
                }
            ],
            elements : [
                { color: '#8E5EA5', header:"Science Behind Learning", buttonURL: "https://csteach.nebulaacademy.com/sbls", buttonText: "Learn More", content: "Nebula Academy’s mission is to use cognitive learning and coaching models to create positive outcomes across the educational sector, where technology is used as a tool for supporting productive and engaging learning experiences. We aim for our participants to gain the knowledge, skills, and models to engage in more brain-friendly conversations that lead to positive outcomes and to create more brain-friendly learning environments and experiences." },
                { color: '#993955', header:"CS Educator Capacity", buttonURL: "http://csteach.nebulaacademy.com/STEAMCoach", buttonText: "Learn More", content: "We want to give schools and teachers capacity to implement computer science into the classroom. Our model helps to ensure that schools remain current and competitive with industry needs, and so students can leverage core skills in computational thinking for any career path they choose." }, 
                { color: '#138DFE', header:"CS Certifications", buttonURL: "https://csteach.nebulaacademy.com/Certifications", buttonText: "Learn More", content: "We offer multiple certifications, as well as CTLE credits, if applicable. Participants can earn our Science Behind Learning certification, STEAM Coach Certification and Computer Science Teaching Certification. To learn more, visit https://csteach.nebulaacademy.com. " },
                { color: '#127FA5', header:"Coding in the Classroom", buttonURL: "https://csteach.nebulaacademy.com/programs", buttonText: "Learn More", content: "Our goal is to help educators become computer science instructors and teachers through a structure of blended learning programs within traditional classroom content, as well as a plan and implementation model to incorporate College Board courses for AP Computer Science Principals, AP Computer Science-A, and advanced computer science electives that support Web Development, Cybersecurity, Data Science, and Machine Learning." },
                { color: '#9395D3', header:"Technology Integration", buttonURL: "https://csteach.nebulaacademy.com/programs#drones", buttonText: "Learn More", content: `"Physical computing has taken a foothold in education as a result of its ability to create the necessary stickiness for students to learn. We provide educators with the necessary resources and workshops for them to integrate physical computing into the classroom. To see how we integrate technology in the classroom, visit ${'https://csteach.nebulaacademy.com'} "`},
            ],
            'sciencebehindlearning': { color: '#8E5EA5', header:"Science Behind Learning", buttonURL: "https://csteach.nebulaacademy.com/sbls", buttonText: "Learn More", content: "Nebula Academy’s mission is to use cognitive learning and coaching models to create positive outcomes across the educational sector, where technology is used as a tool for supporting productive and engaging learning experiences. We aim for our participants to gain the knowledge, skills, and models to engage in more brain-friendly conversations that lead to positive outcomes and to create more brain-friendly learning environments and experiences." },
            'cseducatorcapacity': { color: '#993955', header:"CS Educator Capacity", buttonURL: "http://csteach.nebulaacademy.com/STEAMCoach", buttonText: "Learn More", content: "We want to give schools and teachers capacity to implement computer science into the classroom. Our model helps to ensure that schools remain current and competitive with industry needs, and so students can leverage core skills in computational thinking for any career path they choose." }, 
            'cscertifications': { color: '#138DFE', header:"CS Certifications", buttonURL: "https://csteach.nebulaacademy.com/Certifications", buttonText: "Learn More", content: "We offer multiple certifications, as well as CTLE credits, if applicable. Participants can earn our Science Behind Learning certification, STEAM Coach Certification and Computer Science Teaching Certification. To learn more, visit https://csteach.nebulaacademy.com. " },
            'codingintheclassroom': { color: '#127FA5', header:"Coding in the Classroom", buttonURL: "https://csteach.nebulaacademy.com/programs", buttonText: "Learn More", content: "Our goal is to help educators become computer science instructors and teachers through a structure of blended learning programs within traditional classroom content, as well as a plan and implementation model to incorporate College Board courses for AP Computer Science Principals, AP Computer Science-A, and advanced computer science electives that support Web Development, Cybersecurity, Data Science, and Machine Learning." },
            'technologyintegration': { color: '#9395D3', header:"Technology Integration", buttonURL: "https://csteach.nebulaacademy.com/programs#drones", buttonText: "Learn More", content: "Physical computing has taken a foothold in education as a result of its ability to create the necessary stickiness for students to learn. We provide educators with the necessary resources and workshops for them to integrate physical computing into the classroom. To see how we integrate technology in the classroom, visit https://csteach.nebulaacademy.com. " },
        };
    }
    instaRun(){
        console.log('This is a test')
    }
    createSlideCard = () => {
        return(
            this.state.slides.map(slide => (
                <Col style={{ backgroundColor: 'transparent'}} className="HomeUrlCard cardHeaderContainer">
                    <blockquote style={{fontSize: '1.3em'}}>{slide.header}</blockquote>
                    <p>{slide.body}</p>
                </Col>
            ))
        )
    }
render() {
        return (
            <React.Fragment>
                { this.instaRun }
                <Row style={{ backgroundImage: `url('${slide2}')`, backgroundSize: 'cover', marginLeft: '10vw', marginRight: '10vw', }}>
                    { this.createSlideCard() }
                </Row>
                    <ShapeAndContent state={this.state}/>
            </React.Fragment>
        )

    }
};

export default Educators;