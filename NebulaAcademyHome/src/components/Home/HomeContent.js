import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ShapeAndContent from '../Global/ShapeAndContent'
import slide1 from '../../assets/bookshelf.jpg'
import slide2 from '../../assets/nebulahomeimage.jpg'

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
                    header: 'Modern Technology',
                    body: <h5>We pride ourselves on the technology platforms we choose to teach and utilize within our organization. In order to model and teach how technology increases potential and productivity, we must understand it in real-world applications.</h5>,
                },{
                    header: 'Industry Shaped Curriculum',
                    body: <h5>We work hand-in-hand with our industry and university partners to create programs that help adults gain the skills to pursue meaningful and rewarding careers in the fast-growing tech economy</h5>,
                },{
                    header: 'Certified Instruction',
                    body: <h5>Our instructors are certified industry professionals and have the necessary technological skills to run our programs. We ensure all of our participants and customers are getting the most up-to-date, cutting edge experience to be successful in today's modern workforce.</h5>,
                }
            ],
            elements: [ 
                { color: '#8E5EA5', header:"STEAM for Kids", content: "Through a collaboration with the community, education, government and the technology industry, we provide awareness and education of the 21st Century workforce skills, as well as the opportunities available to students embracing STEAM careers at a local, national and global level." },
                { color: '#993955', header:"Educators", content: "We are educators and technologists working together to better education through Computer Science and STEAM integration in and out of the classroom in partnership with industry. We transform education by empowering educators." }, 
                { color: '#138DFE', header:"Workforce Development", content: "We reignite the passion for learning in today’s continually disruptive workforce development industries. We achieve these objectives by leveraging tools and resources that support today’s modern learner, where technology is used as a tool for supporting more productive and engaging STEAM learning experiences.​" },
                { color: '#007EA7', header:"Universities", content: "Nebula Academy bridges the gap between academia and industry. We work with colleges and universities to ensure their curriculum is up to date with industry standards and students are prepared with the skillset they need to enter the modern workforce. " },
                { color: '#9395D3', header:"Philanthropy", content: "Nebula Academy is a social enterprise institution. Through our not-for-profit entity, We Connect The Dots, we aspire to help our community and world by giving back. Learn more on the types of programs we have and how you can give back! " },
            ],
            'steamforkids': { color: '#8E5EA5', header:"STEAM for Kids", content: "Through a collaboration with the community, education, government and the technology industry, we provide awareness and education of the 21st Century workforce skills, as well as the opportunities available to students embracing STEAM careers at a local, national and global level." },
            'educators': { color: '#993955', header:"Educators", content: "We are educators and technologists working together to better education through Computer Science and STEAM integration in and out of the classroom in partnership with industry. We transform education by empowering educators." }, 
            'workforcedevelopment': { color: '#138DFE', header:"Workforce Development", content: "We reignite the passion for learning in today’s continually disruptive workforce development industries. We achieve these objectives by leveraging tools and resources that support today’s modern learner, where technology is used as a tool for supporting more productive and engaging STEAM learning experiences.​" },
            'universities': { color: '#007EA7', header:"Universities", content: "Nebula Academy bridges the gap between academia and industry. We work with colleges and universities to ensure their curriculum is up to date with industry standards and students are prepared with the skillset they need to enter the modern workforce. " },
            'philanthropy': { color: '#9395D3', header:"Philanthropy", content: "Nebula Academy is a social enterprise institution. Through our not-for-profit entity, We Connect The Dots, we aspire to help our community and world by giving back. Learn more on the types of programs we have and how you can give back! " },
        };
    }
    createSlideCard = () => {
        return(
            this.state.slides.map(slide => (
                <Col style={{ backgroundColor: 'transparent'}} className="HomeUrlCard">
                    <h1>{slide.header}</h1>
                    <br/>
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
                    <ShapeAndContent state={this.state} />
        </React.Fragment>
        )
    }
};

export default HomeContent;