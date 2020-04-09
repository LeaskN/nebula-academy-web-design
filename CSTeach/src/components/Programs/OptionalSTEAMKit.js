import React, { Component } from 'react';
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import prices from './../../assets/programPrices.png';
import micro from './../../assets/micro.png';
import tello from './../../assets/tello.png';
import surface from './../../assets/surface.png';

class OptionalSTAEMKit extends Component {
    state = {
        toggle: {
            button1: true,
        },
        toggle2:{
            scheduleButton1:true,
        },
    };
render() {
        return (
            <React.Fragment>
                <Container>
                <h1>Optional STEAM Coach Kit:</h1>
                    <Row style={{ boxShadow: '0 4px 6px 4px rgba(0,0,0,0.2)', margin: '30px', borderRadius: '20px', border: '10px solid #32BEBD'}}>
                        <Col style={{margin:'auto'}} xs={12} md={3}>
                            <img alt="surface" style={{ padding: '10px', borderRadius: '20px', width: '100%'}} src={surface}></img>
                        </Col>
                        <Col xs={9}>
                        <h3><b>Microsoft Surface Go</b></h3>
                        <p>64GB / Intel 4415Y / 4GB RAM / WiFi</p>
                        <p>New Surface Go is perfect for all your daily tasks, giving you laptop performance, tablet portability, and  a stunning touchscreen with the power of Windows 10 Home in S mode. Surface Go Signature Type Keyboard included.</p>
                        </Col>
                        <Col className="contentCentered">
                            <Button style={{marginBottom: '10px'}} variant="secondary">Contact Us</Button>
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
                        <Col className="contentCentered">
                            <Button style={{marginBottom: '10px'}} variant="secondary">Contact Us</Button>
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
                        <Col className="contentCentered">
                            <Button href="mailto:succeed@nebulaacademyny.com" style={{marginBottom: '10px'}} variant="secondary">Contact Us</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
};

export default OptionalSTAEMKit;
