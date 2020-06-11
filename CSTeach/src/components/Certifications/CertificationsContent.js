import React, { Component} from 'react';
import { Row, Col, Carousel, Button, Container  } from 'react-bootstrap';
import './CertificationsContent.css'
import prices from '../../assets/ProgramCost.png'
import micro from '../../assets/micro.png'
import tello from '../../assets/tello.png'
import surface from '../../assets/surface.png'
import AWSSlide1 from '../../assets/1_AWS_home.jpg';
import AWSSlide2 from '../../assets/1_AWS_home.jpg';
import AWSSlide3 from '../../assets/1_AWS_home.jpg';


class CertificationsContent extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1:true,
        }, 
        backgroundColor: 'transparent',
            clicked: 'sciencebehindlearning',
            shape: 'circle',
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
            }],
            elements : [
                { color: '#8E5EA5', header:"Try Coding", content: "We take the risk out of making an investment in your future by providing participants an opportunity to test drive our program through our Monthly Try Coding days.  This 6-hour in-person session provides the opportunity to build confidence, and clarity on an investment towards your future." },
                { color: '#993955', header:"Scholarships", content: `As a social enterprise, our mission is to inspire future innovators through building awareness and skills related to technology and computer science. Our methodology, the Computer Science Growth System (CSGS), combined with our scholarship programs, builds capacity from K-Career.` }, 
                { color: '#138DFE', header:"Workforce Experience", content: <><p>The gap between academia and industry is growing and our workforce is suffering for it. Schools and universities don't prepare our students enough to join the industry and industries are unwilling to train and hire students. Therefore, the workforce is left unprepared and without the necessary skills to attain a sustainable career.</p><p>The solution? Stop blaming and start training! Nebula Academy prepares anyone looking to join the growing technology industry, whether you have little to no skill or tremendous skill and looking to get certified. Our programs offer students comprehensive coursework, engaging and willing instructors, and career preparation and experience. We invest in our students to ensure participants have the necessary hard and soft skills to join the leading technology workforce.</p></> },
                { color: '#127FA5', header:"Guest Speakers", content: "The career world of information technology is expansive and can feel overwhelming to those entering it or navigating it.  We help our participants not only build the necessary skills to succeed but introduce them to learn from others who have successfully built careers in a continuously evolving world." },
                { color: '#9395D3', header:"Measuring Success", content: "As a research focused social enterprise, metrics are key to our long-term sustainability. Measuring matters to our customers and our team to ensure continuous improvement as we shape and reshape our programs to align with industry needs and ensure our outcomes are creating the right results." },
            ],
            'trycoding': { color: '#8E5EA5', header:"Try Coding", content: "We take the risk out of making an investment in your future by providing participants an opportunity to test drive our program through our Monthly Try Coding days.  This 6-hour in-person session provides the opportunity to build confidence, and clarity on an investment towards your future." },
            'scholarships': { color: '#993955', header:"Scholarships", content: `As a social enterprise, our mission is to inspire future innovators through building awareness and skills related to technology and computer science. Our methodology, the Computer Science Growth System (CSGS), combined with our scholarship programs, builds capacity from K-Career.` }, 
            'workforceexperience': { color: '#138DFE', header:"Workforce Experience", content: <><p>The gap between academia and industry is growing and our workforce is suffering for it. Schools and universities don't prepare our students enough to join the industry and industries are unwilling to train and hire students. Therefore, the workforce is left unprepared and without the necessary skills to attain a sustainable career.</p><p>The solution? Stop blaming and start training! Nebula Academy prepares anyone looking to join the growing technology industry, whether you have little to no skill or tremendous skill and looking to get certified. Our programs offer students comprehensive coursework, engaging and willing instructors, and career preparation and experience. We invest in our students to ensure participants have the necessary hard and soft skills to join the leading technology workforce.</p></> },
            'guestspeakers': { color: '#127FA5', header:"Guest Speakers", content: "The career world of information technology is expansive and can feel overwhelming to those entering it or navigating it.  We help our participants not only build the necessary skills to succeed but introduce them to learn from others who have successfully built careers in a continuously evolving world." },
            'measuringsuccess': { color: '#9395D3', header:"Measuring Success", content: "As a research focused social enterprise, metrics are key to our long-term sustainability. Measuring matters to our customers and our team to ensure continuous improvement as we shape and reshape our programs to align with industry needs and ensure our outcomes are creating the right results." },
    };
    createAWSSlides = () => {
        return (
            this.state.AWSCarouselItems.map(element => (
                <Carousel.Item key={element.header}  >
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
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10} style={{textAlign:'center'}}>
                        <p>We offer 2 certifications: STEAM Coach Certification and Computer Science Teaching Certification.</p>
                        <p>Learn more about our certification programs here by clicking below</p>
                        <div className="contentCentered" style={{display:'flex' }}>
                            <Button variant="secondary" href="/STEAMCoach">STEAM Coach</Button>
                            <Button variant="secondary" href="/cstc">CS Teaching</Button>
                        </div>
                        <br/>
                        <p style={{margin:'0px'}}>Participants who take our programs will also earn Certificate of completions for each program they complete and can also earn CTLE credits, if applicable.</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Container>
                <Row  style={{justifyContent: 'center'}}>
                        <img className="staticCard" width="80%" src={prices}  alt="prices"></img>
                    </Row>
                    <h1 className="certificationsH1">Optional STEAM Coach Kit:</h1>
                    <Row style={{ boxShadow: '0 4px 6px 4px rgba(0,0,0,0.2)', margin: '30px', borderRadius: '20px', border: '10px solid #32BEBD'}}>
                        <Col style={{margin:'auto'}} xs={12} md={3}>
                            <img alt="surface" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={surface}></img>
                        </Col>
                        <Col xs={9}>
                        <h3><b>Microsoft Surface Go</b></h3>
                        <p>64GB / Intel 4415Y / 4GB RAM / WiFi</p>
                        <p>New Surface Go is perfect for all your daily tasks, giving you laptop performance, tablet portability, and  a stunning touchscreen with the power of Windows 10 Home in S mode. Surface Go Signature Type Keyboard included.</p>
                        </Col>
                    </Row>
                    <Row style={{ boxShadow: '0 4px 6px 4px rgba(0,0,0,0.2)', margin: '30px', borderRadius: '20px', border: '10px solid #32BEBD'}}>
                        <Col style={{margin:'auto'}} xs={12} md={3}>
                            <img alt="tello" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={tello}></img>
                        </Col>
                        <Col xs={9}>
                        <h3><b>Tello Drone</b></h3>
                        <p>14-Core processor / Collision Detection / Propeller Protection / 80 Grams / Image Stabilization / 5 MP Photos / 13 min flight time / 100m Image Transmission Distance / 720p HD Transmission /Tello App / Controller / Smartphone VR Compatibility</p>
                        <p>Perform flying stunts, shoot quick videos with EZ Shots, and learn about drones with coding education. Get yourself a Tello to find out just how awesome flying a drone can be!</p>
                        </Col>
                    </Row>
                    <Row style={{ boxShadow: '0 4px 6px 4px rgba(0,0,0,0.2)', margin: '30px', borderRadius: '20px', border: '10px solid #32BEBD'}}>
                        <Col style={{margin:'auto'}} xs={12} md={3}>
                            <img alt="micro" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={micro}></img>
                        </Col>
                        <Col xs={9}>
                        <h3><b>BBC’s Micro:bit</b></h3>
                        <p>52.0mm x 43.0mm x 11.0mm / 2.0" x 1.7" x 0.4" / Product Weight: 9.0g / 0.3oz / accelerometer / compass / processor / radio & Bluetooth antenna / battery socket / 2 0 pin edge connector / USB connector / LED lights</p>
                        <p>Designed specifically for kids and beginners, the Micro:bit is a pocket-sized computer that you can code, customize and control to bring your digital ideas, games and apps to life!</p>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default CertificationsContent;
