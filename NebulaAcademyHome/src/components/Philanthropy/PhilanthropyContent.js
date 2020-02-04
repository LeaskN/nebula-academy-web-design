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
                { title:'CODING PROGRAMS FOR AGES 7-18', image:image1, buttonText: 'Coding Ages 7-18', url:'https://www.we-connect-the-dots.org/coding-programs-for-1st12th', description:'Help support underrepresented student populations to learn to code by sponsoring scholarships and transportation to our after school coding program.  Students meet weekdays from 4-6pm, experiencing personalized classes based on their capabilities and interests.  To learn more about the program visit We Connect The Dots Website to learn more.', }, 
                { title:'Community Ambassador Program', image:image2, url:'https://www.we-connect-the-dots.org/student-ambassador-program', buttonText: 'Community Ambassador', description:'Help support underrepresented student populations to build leadership and entrepreneur skills by funding the overall program and transportation to the program for students.  Students meet once a week and one Saturday per month  To learn more about the program visit We Connect The Dots Website to learn more.', }, 
                { title:'Annual Code-A-Thon Program', image:image3, url:'https://www.we-connect-the-dots.org/2020-codeathon', buttonText: 'Coda-A-Thon', description:'Help support underrepresented student populations ages 13-18 to learn to code, collaborate in teams, build leadership and entrepreneur skills, and so much more by funding the overall program and transportation to the program for students.  This is an annual program design to both spark an interest in coding and build ongoing skills for students who participate year over year. To learn more about the program visit We Connect The Dots Website to learn more.', }, 
                { title:'Software Engineer Bootcamp', image:image4, url:'https://code.nebulaacademy.com/Scholarships', buttonText: 'Software Engineering Bootcamp', description:'Help support underrepresented adult populations to build sustainable careers in technology.  Employment of computer and information technology occupations is projected to grow 21 percent from 2020 to 2028, much faster than the average for all occupations. These occupations are projected to add about 546,200 new jobs.This immersive workforce development program is designed to take someone without any coding ability to an entry-level professional Software Engineer in 22 weeks. Support us by funding more or more scholarships to attend the program.', }, 
            ],
            helpOut: [
                {title: 'Scholarships', shortDescription:'This is a seven word descriptive header', description: 'This is the scholarships description', buttonText:'View Scholarships', url: 'wctd.org'},
                {title: 'Donate', shortDescription:'This is a seven word descriptive header', description: 'This is the Donate description', buttonText:'Donate Now', url: 'wctd.org'},
                {title: 'Volunteer', shortDescription:'This is a seven word descriptive header', description: 'This is the Volunteer description', buttonText:'Volunteer Opportunities', url: 'wctd.org'},
                {title: 'Sponsor', shortDescription:'This is a seven word descriptive header', description: 'This is the sponsor description', buttonText:'Sponsorship Opportunities', url: 'wctd.org'},
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
                <Row style={{marginLeft: '10vw', marginRight: '10vw', border:'1.5px solid #00C9CB'}}>
                    { this.createProgramCard() }
                </Row>
                <br/>
                    { this.helpOutCard() }
            </React.Fragment>
        )
    }
};

export default Philanthropy;