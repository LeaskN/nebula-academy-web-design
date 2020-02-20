import React, { Component } from 'react';
import { Row, Col, Carousel, Button } from 'react-bootstrap';
import './CertificationsContent.css'
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
                {/* <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <h1>The value of a blended education model:</h1>
                        <p>language for this needs to be developed</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                <React.Fragment>
                <br/>
                <Row style={{marginLeft: '3vw', marginRight: '3vw'}}>
                    <Col className="CertificationCarouselCard" style={{ borderColor: '#2670D1'}}>
                            <Carousel interval="10000000">
                                {this.createAWSSlides()}
                            </Carousel>
                    </Col>
                </Row>
            </React.Fragment>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <h1>Relevant quote (Edu leader?)</h1>
                        <p>The primary focus of this program is to have participants land jobs in coding & technology oriented roles. There are different paths that one can take to achieve this goal but the most consistent is through internship opportunities. We are partnered with many local companies who are looking for Software Engineering interns. These roles frequently lead to job placement within that company or open up new avenues towards full time employment elsewhere.</p>
                        <h1>Description as to why the evolution of education is important</h1>
                        <p>The primary focus of this program is to have participants land jobs in coding & technology oriented roles. There are different paths that one can take to achieve this goal but the most consistent is through internship opportunities. We are partnered with many local companies who are looking for Software Engineering interns. These roles frequently lead to job placement within that company or open up new avenues towards full time employment elsewhere.</p>
                    </Col>
                    <Col xs={1}></Col>
                </Row> */}
            </React.Fragment>
        )
    }
};

export default CertificationsContent;
