import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import './RegistrationJumbotron.css';

class RegistrationJumbotron extends Component{
  render(){
    return(
    <React.Fragment>
        <Jumbotron className='noMargin registrationJumbo'>
          <Row>
            <Col xs={12} sm={9} className='registrationJumboLeft'>
              <h1>{this.props.data.workshopTitle}</h1>
            </Col>
            <Col xs={12} sm={3} className='registrationJumboRight'>
              <p>{this.props.data.date} at {this.props.data.time}</p>
              <h3>Register for Workshop: {this.props.data.workshopTitle}</h3>
              <p>Price: Free</p>
            </Col>
          </Row>
          <Row>
          <Col xs={12} sm={9} style={{color:'black', marginTop:'10px'}}>
            <p>For more information regarding this workshop call: <a href='tel:6314687477' style={{whiteSpace:'nowrap'}}>(631) 468-7477</a></p>
            </Col>
            <Col xs={12} sm={3}>
            <Button className='registerButton' variant='success' href={this.props.data.registrationUrl} target='empty'>Register For Free</Button>

            </Col>
          </Row>
        </Jumbotron>
      </React.Fragment>
    )
  }
};

export default RegistrationJumbotron;