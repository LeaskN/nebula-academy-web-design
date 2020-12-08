import React, { Component } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';

import image1 from '../../assets/DiscoveryDay_1_13.jpg'
import image2 from '../../assets/DiscoveryDay2.jpg'
import image3 from '../../assets/Codathon2.jpg'
import image4 from '../../assets/12b_Slidelabel.jpg'

import './PhilanthropyContent.css';

class Philanthropy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: [
                { title:'Coding Programs For Ages 7-18', image:image1, buttonText: 'Coding Ages 7-18', url:'https://www.we-connect-the-dots.org/coding-programs-for-1st12th', description:'Help support our students to learn to code by sponsoring scholarships and transportation to our after school coding program.  Students meet weekdays from 4-6pm, experiencing personalized classes based on their capabilities and interests.  To learn more about the program visit We Connect The Dots Website', }, 
                { title:'Community Ambassador Program', image:image2, url:'https://www.we-connect-the-dots.org/student-ambassador-program', buttonText: 'Community Ambassador', description:'Help support our students to build leadership and entrepreneur skills by funding the overall program and transportation to the program for students.  Students meet once a week and one Saturday per month  To learn more about the program visit We Connect The Dots Website', }, 
                { title:'Annual Code-A-Thon Program', image:image3, url:'https://www.we-connect-the-dots.org/2021-codeathon', buttonText: 'Code-A-Thon', description:'Help support our students ages 13-18 to learn to code, collaborate in teams, build leadership and entrepreneur skills, and so much more by funding the overall program and transportation to the program for students.  This is an annual program design to both spark an interest in coding and build ongoing skills for students who participate year over year. To learn more about the program visit We Connect The Dots Website.', }, 
                { title:'Software Engineer Bootcamp', image:image4, url:'https://code.nebulaacademy.com/Scholarships', buttonText: 'Software Engineering Bootcamp', description:'Help support our underserved and underrepresented adult populations to build sustainable careers in technology.  Employment of computer and information technology occupations is projected to grow 21 percent from 2020 to 2028, much faster than the average for all occupations. These occupations are projected to add about 546,200 new jobs.This immersive workforce development program is designed to take someone without any coding ability to an entry-level professional Software Engineer in 22 weeks. Support us by funding more or more scholarships to attend the program. Support us by funding more of our scholarships for adults to attend our program.', }, 
            ],
            helpOut: [
                {title: 'Scholarships', shortDescription:'Be a Part of Positive Systemic Change', buttonText:'View Scholarships', url: 'https://www.we-connect-the-dots.org/scholarships-1', description: 'By funding our scholarship programs, you can contribute in transforming one or more lives to build a sustainable future. This form of contribution to society creates a ripple effect in how we demonstrate the value of a diverse workforce and shape the lives of, not only the recipient of the scholarship, but their families and communities they live in. Create a broad reach in addressing the need of a more diverse workforce, and be part of the change. Learn more about our scholarship opportunities!'},
                {title: 'Donate', shortDescription:'Donations Help Create a Sustainable Future', buttonText:'Donate Now', url: 'https://www.we-connect-the-dots.org/donate', description: <p>We seek strategic and enthusiastic partnerships that will drive the fiscal and operational growth of our organization. Your donations provide the resource to create systemic change in empowering young and old to build sustainable careers for themselves and their families.  Be a part of the change by making a one time donation or invest in reoccurring donations through a monthly or annual donation. Donations of all amounts are appreciated and recognized on our social media.</p>},
                {title: 'Volunteer', shortDescription:'Impact Your Community While Gaining Experience', buttonText:'Volunteer Opportunities', url: 'https://www.we-connect-the-dots.org/volunteer', description: <><blockquote style={{borderLeft: '3px solid #7F5C8E', paddingLeft: '7px'}}>"Volunteering for WCTD helped me in numerous ways. My recruiter and hiring manager were impressed that after learning I kept myself engaged by implementing my knowledge in real time projects through volunteering at WCTD. Personally, I felt it gave me enough confidence to face the interviews and gave me a sense of accomplishment, resulting in obtaining a job. Thank you WCTD for giving me the opportunity to demonstrate my skills while giving back."<br/><br/><b><a className="linkDark" target="empty" href="https://www.linkedin.com/in/swati-kuntullu/">Swati - Software Engineer</a></b></blockquote></>},
                {title: 'Sponsor', shortDescription:'Corporate and Social Responsibility Through Sponsorship', buttonText:'Sponsorship Opportunities', url: 'https://we-connect-the-dots.org/sponsorship', description: <div>Nebula Academy & We Connect The Dots continue to impact hundreds of students, adults, and educators each year from around the globe. Through collaboration with industry, government, and community partners, we are creating systemic change to build capacity in technology workforce skills and in computer science education. As a research-based organization, we provide our sponsors with social media exposure, video highlight reals, and metrics that demonstrate our impact in engaging in underserved and underrepresented populations. We invite you to learn more about our organizations and how you can support our success by clicking the your left and making a general donation, sponsoring a program, or sponsoring a scholarship, 100% of your donations are invested in program support and delivery.</div>},
            ]
        };
    }
    createProgramCard = () => {
        return(
            this.state.programs.map(program => (
                <Col style={{ backgroundImage: `url('${program.image}')` }} className="PhilanthropyUrlCard">
                    <h1>{program.title}</h1>
                    <p>{program.description}</p>
                    <div id="spacer"></div>
                    <Button className='bottom' href={program.url} target="empty" variant="info">{program.buttonText}</Button>
                </Col>
            ))
        )
    }
    helpOutCard = () => {
        return(
            this.state.helpOut.map(program => (
                <Row className="staticCard" >
                <Col xs={4} className="cardColumns">
                    <Card className="cardDeckLeft" style={{width:"87.5vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <h1 className="changingFont">{program.title}</h1>
                        <br/>
                        <Button href={program.url} variant='secondary' target="empty">{program.buttonText}</Button>
                    </Card>
                </Col>
                <Col xs={8} className="cardColumns offWhite">
                    <Card style={{padding: "10px"}}>
                        <h3><a href={this.link} target="empty">{program.shortDescription}</a></h3>
                        <p>{program.description}</p>
                        <p>{program.test}</p>
                    </Card>
                </Col>
                </Row>
            ))
        )
    }
render() {
        return (
            <React.Fragment>
                <br/>
                <Row style={{marginLeft: '10vw', marginRight: '10vw', }}>
                    { this.createProgramCard() }
                </Row>
                <br/>
                    { this.helpOutCard() }
            </React.Fragment>
        )
    }
};

export default Philanthropy;