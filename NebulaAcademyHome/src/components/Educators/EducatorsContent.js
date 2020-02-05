import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
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
            slides: [
                {
                    image: slide1,
                    al: 'First slide',
                    header: '“It helped me as a facilitator to have a new perspective on teaching, learning and the neuroscience behind education. Having a new understanding of how students operate help to better relate to their behaviors.”',
                    body: '',
                },{
                    image: slide2,
                    al: 'Second slide',
                    header: '“I gained valuable skills and knowledge to bring technology into my classroom.”',
                    body: '',
                },{
                    image: slide3,
                    al: 'Third slide',
                    header: '“The light bulb went off and I was able to put what I was learning into perspective as a mom and teacher.”',
                    body: '',
                }
            ],
            elements : [
                { color: '#8E5EA5', header:"Science behind learning", content: "Nebula Academy’s mission is to use cognitive learning and coaching models to create positive outcomes across the educational sector, where technology is used as a tool for supporting productive and engaging learning experiences. We aim for our participants to gain the knowledge, skills, and models to engage in more brain-friendly conversations that lead to positive outcomes and to create more brain-friendly learning environments and experiences." },
                { color: '#993955', header:"CS Educator Capacity", content: "We want to give schools and teachers capacity to implement computer science into the classroom. Our model helps to ensure that schools remain current and competitive with industry needs, and so students can leverage core skills in computational thinking for any career path they choose." }, 
                { color: '#138DFE', header:"CS Certifications", content: "We offer multiple certifications, as well as CTLE credits, if applicable. Participants can earn our Science Behind Learning certification, STEAM Coach Certification and Computer Science Teaching Certification. To learn more, visit https://csteach.nebulaacademy.com. " },
                { color: '#8FBFE0', header:"Coding in the Classroom", content: "Our goal is to help educators become computer science instructors and teachers through a structure of blended learning programs within traditional classroom content, as well as a plan and implementation model to incorporate College Board courses for AP Computer Science Principals, AP Computer Science-A, and advanced computer science electives that support Web Development, Cybersecurity, Data Science, and Machine Learning." },
                { color: '#9395D3', header:"Technology Integration", content: `"Physical computing has taken a foothold in education as a result of its ability to create the necessary stickiness for students to learn. We provide educators with the necessary resources and workshops for them to integrate physical computing into the classroom. To see how we integrate technology in the classroom, visit ${'https://csteach.nebulaacademy.com'} "`},
            ],
            'sciencebehindlearning': { color: '#8E5EA5', header:"Science behind learning", content: "Nebula Academy’s mission is to use cognitive learning and coaching models to create positive outcomes across the educational sector, where technology is used as a tool for supporting productive and engaging learning experiences. We aim for our participants to gain the knowledge, skills, and models to engage in more brain-friendly conversations that lead to positive outcomes and to create more brain-friendly learning environments and experiences." },
            'cseducatorcapacity': { color: '#993955', header:"CS Educator Capacity", content: "We want to give schools and teachers capacity to implement computer science into the classroom. Our model helps to ensure that schools remain current and competitive with industry needs, and so students can leverage core skills in computational thinking for any career path they choose." }, 
            'cscertifications': { color: '#138DFE', header:"CS Certifications", content: "We offer multiple certifications, as well as CTLE credits, if applicable. Participants can earn our Science Behind Learning certification, STEAM Coach Certification and Computer Science Teaching Certification. To learn more, visit https://csteach.nebulaacademy.com. " },
            'codingintheclassroom': { color: '#8FBFE0', header:"Coding in the Classroom", content: "Our goal is to help educators become computer science instructors and teachers through a structure of blended learning programs within traditional classroom content, as well as a plan and implementation model to incorporate College Board courses for AP Computer Science Principals, AP Computer Science-A, and advanced computer science electives that support Web Development, Cybersecurity, Data Science, and Machine Learning." },
            'technologyintegration': { color: '#9395D3', header:"Technology Integration", content: "Physical computing has taken a foothold in education as a result of its ability to create the necessary stickiness for students to learn. We provide educators with the necessary resources and workshops for them to integrate physical computing into the classroom. To see how we integrate technology in the classroom, visit https://csteach.nebulaacademy.com. " },
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
                    <ShapeAndContent state={this.state}/>
            </React.Fragment>
            )

    }
};

export default Educators;