import React, { Component } from 'react';
import { Row, Col, Button, Carousel } from 'react-bootstrap';
import InfoPanel from '../Global/InfoPanel'
import AWSSlide1 from '../../assets/awsstats1.jpg';
import AWSSlide2 from '../../assets/awsslide2.jpg';
import AWSSlide3 from '../../assets/awsquote.jpg';
import AWSSlide4 from '../../assets/AdobeStock_312848234.jpg';
import SESlide1 from '../../assets/NebulaGrowingField.jpg'
import SESlide2 from '../../assets/nebulaSECourseDescription2.jpg'
import SESlide3 from '../../assets/nebulasecoursedescription.jpg'

import './WorkforceDevelopmentContent.css';

class WorkforceDevelopment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'transparent',
            clicked: 'sciencebehindlearning',
            shape: 'circle',
            softwareEngineeringCarouselItems: [{
                image: SESlide1,
                al: 'The field is exponentially growing.',
                header: 'The field is exponentially growing.',
                body: <div><p>According to the U.S. Bureau of Labor Statistics, software engineer jobs are projected to increase by 21% from 2018 to 2028.</p><p>Source: <a className="linkLight" target="empty" href="https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm">Bureau of Labor Statistics</a></p></div>,
            },{
                image: SESlide2,
                al: 'ReactJS is the future',
                header: 'ReactJS is the future of Web Dev', 
                body: <div><p>Today, ReactJS has become highly popular because of its extra simplicity and flexibility. It is estimated that more than 1,300 developers and over 94,000 sites utilize ReactJS. React JS is leading in Top 10K Sites, Top 100K Sites, Top 1M Sites, and The Entire Web.</p><p>Sources: <a className="linkLight" target="empty" href="https://www.tecla.io/blog/2019-stats-on-top-js-frameworks-react-angular-and-vue/#section-content">Tecla.io</a> & <a className="linkLight" target="empty" href="https://medium.com/@thinkwik/why-reactjs-is-gaining-so-much-popularity-these-days-c3aa686ec0b3">Medium.com</a></p></div>,
            },{
                image: SESlide3,
                al: 'Course Description',
                header: 'Course Description',
                body: <p>Taught by industry professionals, participants will spend 5 days a week and 8 hours a day learning, coding, and studying to become a full-stack developer with an AWS or Microsoft certification. Upon completion, participants will have the ability to launch a career in software development. We focus on holistic training including soft skills and personal development. Participants will get hands-on experience working with today’s modern web development tools.</p>,
            }],
            AWSCarouselItems: [{
                image: AWSSlide1,
                al: 'First slide',
                header: 'AWS Certifications Pay Well',
                body: <div><p>'The average salary of an AWS-certified IT professional is $129,868 — ranking as one of the highest-paying certification categories in North America.'</p><p>Source: <a className="linkLight" target="empty" href="https://www.globalknowledge.com/us-en/resources/resource-library/articles/how-to-earn-a-top-paying-aws-certification-salary/">Global Knowledge</a></p></div>,
            },{
                image: AWSSlide2,
                al: 'Second slide',
                header: 'AWS ranks highly as one of the best certifications to hold.',
                body: <div><p>Forbes Magazine has ranked AWS Certification as one of the Top 15 Most Valuable IT Certifications. Each of the five Amazon Web Services (AWS) certifications brings in an average salary of more than $100,000.</p><p>Source: <a className="linkLight" target="empty" href="https://www.forbes.com/sites/louiscolumbus/2016/02/21/15-top-paying-it-certifications-in-2016-aws-certified-solutions-architect-leads-at-125k/#24d610fc7978">Forbes Magazine</a></p></div>,
            },{
                image: AWSSlide3,
                al: 'Third slide',
                header: 'AWS Certifications Are Great for All Levels of Employment',
                body: <><blockquote style={{borderLeft: 'none', paddingLeft: ''}}>“My advice to people leaving college is always the same: Get AWS-Certified.” <br/><br/><b><p>David Linthicum, Infoworld</p></b></blockquote></>,
            },{
                image: AWSSlide4,
                al: 'Fourth slide',
                header: 'Course Description',
                body: 'Get Real World in-demand skills and experience that sets you apart in a competitive global job market. Learn the latest and greatest AWS Cloud computing technology through AWS Academy courses at Nebula Academy. Learn about AWS Cloud through real-world scenarios and gain the skills needed to architect real-world solutions.',
            }],
            elements : [
                { 
                    color: '#8E5EA5', 
                    header: "Try Coding", 
                    content: "We take the risk out of making an investment in your future by providing participants an opportunity to test drive our program through our Monthly Try Coding days.  This 6-hour in-person session provides the opportunity to build confidence, and clarity on an investment towards your future." 
                },
                { 
                    color: '#993955', 
                    header: "Scholarships", 
                    content: "As a social enterprise, our mission is to inspire future innovators through building awareness and skills related to technology and computer science. Our methodology, the Computer Science Growth System (CSGS), combined with our scholarship programs, builds capacity from K-Career.",
                    buttonText: "Scholarships",
                    buttonURL: "https://code.nebulaacademy.com/Scholarships",
                    linkLeavesSite: true
                }, 
                { 
                    color: '#138DFE', 
                    header: "Workforce Experience", 
                    content: ["The gap between academia and industry is growing and our workforce is suffering for it. Schools and universities don't prepare our students enough to join the industry and industries are unwilling to train and hire students. Therefore, the workforce is left unprepared and without the necessary skills to attain a sustainable career.", "The solution? Stop blaming and start training! Nebula Academy prepares anyone looking to join the growing technology industry, whether you have little to no skill or tremendous skill and looking to get certified. Our programs offer students comprehensive coursework, engaging and willing instructors, and career preparation and experience. We invest in our students to ensure participants have the necessary hard and soft skills to join the leading technology workforce."],
                    buttonText: "Career Readiness",
                    buttonURL: "https://code.nebulaacademy.com/Curriculum",
                    linkLeavesSite: true
                },
                { 
                    color: '#127FA5', 
                    header: "Guest Speakers", 
                    content: "The career world of information technology is expansive and can feel overwhelming to those entering it or navigating it.  We help our participants not only build the necessary skills to succeed but introduce them to learn from others who have successfully built careers in a continuously evolving world." 
                },
                { 
                    color: '#9395D3', 
                    header: "Measuring Success", 
                    content: "As a research focused social enterprise, metrics are key to our long-term sustainability. Measuring matters to our customers and our team to ensure continuous improvement as we shape and reshape our programs to align with industry needs and ensure our outcomes are creating the right results." 
                },
            ]
        };
    }
    createAWSSlides = () => {
        return (
            this.state.AWSCarouselItems.map(element => (
                <Carousel.Item key={element.header}>
                    <img className="d-block w-100" alt={element.image} src={element.image} al={element.al}/>
                    <Carousel.Caption>
                        <h3>{element.header}</h3>
                        <br/>
                        <div className="carouselParagraph">{element.body}</div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))
        )
    }
    createSoftwareEngineeringSlides = () => {
        return (
            this.state.softwareEngineeringCarouselItems.map(element => (
                <Carousel.Item key={element.header}>
                    <img className="d-block w-100" alt={element.image} src={element.image} al={element.al}/>
                    <Carousel.Caption>
                        <h3>{element.header}</h3>
                        <br/>
                        <div className="carouselParagraph">{element.body}</div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))
        )
    }
    render() {
        return (
            <React.Fragment>
                <br/>
                <Row style={{marginLeft: '3vw', marginRight: '3vw'}}>
                    <Col className="WorkforceDevelopmentUrlCard" style={{ borderColor: '#ff9900'}}>
                            <h1>AWS</h1>
                            <Carousel interval="10000">
                                {this.createAWSSlides()}
                            </Carousel>
                            <div id="spacer"></div>
                            <Button className='bottom' href="https://aws.nebulaacademy.com" target="blank" variant="warning">AWS</Button>
                    </Col>
                    <Col className="WorkforceDevelopmentUrlCard">
                            <h1>Software Engineering</h1>
                            <Carousel interval="10000">
                                {this.createSoftwareEngineeringSlides()}
                            </Carousel>
                            <div id="spacer"></div>
                            <Button className='bottom' href="https://code.nebulaacademy.com" target="blank" variant="secondary">Bootcamp</Button>
                    </Col>
                </Row>
                    <InfoPanel state={this.state}/>
            </React.Fragment>
        )
    }
};

export default WorkforceDevelopment;