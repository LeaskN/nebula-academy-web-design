import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import './RegistrationJumbotron.css';

class RegistrationJumbotron extends Component{
  constructor(props) {
    super(props);
    this.state = {
      date: 'Feb 13',
      time: '4:00PM',
      workshopTitle: 'Jobs In Tech',
      registrationUrl: 'https://app.acuityscheduling.com/schedule.php?owner=13648189&appointmentType=20344935'
      // Workshop: Tech Sales Careers
      // Workshop: Tech Support Careers
      // Workshop: How to Become A Software Engineer
  };
  }
  render(){
    return(
    <React.Fragment>
        <Jumbotron className='noMargin registrationJumbo'>
          <Row>
            <Col xs={12} sm={9} className='registrationJumboLeft'>
              <h1>Register for {this.state.workshopTitle}</h1>
            </Col>
            <Col xs={12} sm={3} className='registrationJumboRight'>
              <p>{this.state.date} at {this.state.time}</p>
              <h3>{this.state.workshopTitle}</h3>
              <p>Price: Free</p>
            </Col>
          </Row>
          <Row>
          <Col xs={12} sm={9} style={{color:'black', marginTop:'10px'}}>
            <p>For more information regarding this workshop call: <a href='tel:6314687477'>(631) 468-7477</a></p>
            </Col>
            <Col xs={12} sm={3}>
            <Button className='registerButton' variant='success' href={this.state.registrationUrl} target='empty'>Register For Free</Button>

            </Col>
          </Row>
        </Jumbotron>
      </React.Fragment>
    )
  }
};

export default RegistrationJumbotron;