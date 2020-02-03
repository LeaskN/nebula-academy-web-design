import React, { Component } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';

import image1 from '../../assets/1_AWS_home.jpg'
import image2 from '../../assets/1_AWS_home.jpg'
import image3 from '../../assets/1_AWS_home.jpg'
import image4 from '../../assets/1_AWS_home.jpg'

import './PhilanthropyContent.css';

class Philanthropy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programs: [
                { title:'Program1', description:'This is the description for Program1', image:image1 }, 
                { title:'Program2', description:'This is the description for Program2', image:image2 }, 
                { title:'Program3', description:'This is the description for Program3', image:image3 }, 
                { title:'Program4', description:'This is the description for Program4', image:image4 }, 
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
                    <Button className='bottom' href="https://aws.nebulaacademy.com" target="blank" variant="info">AWS</Button>
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
                <Row style={{marginLeft: '10vw', marginRight: '10vw'}}>
                    {this.createProgramCard()}
                </Row>
                <br/>
                    {this.helpOutCard()}
            </React.Fragment>
        )
    }
};

export default Philanthropy;