import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram, AiFillFacebook, AiTwotoneMail, AiTwotonePhone} from 'react-icons/ai'
import NebulaIcon from '../../assets/NAIconTransparent240.png';
import './Footer.css';

export const Footer = () => (
    <React.Fragment>
        <Navbar bg="dark" className="footerNavbar mainNavbar navbar-dark navbar-collapse"  style={{fontSize: '.80em'}}toggleable="true" expand="lg">
            <Container style={{ alignItems: 'flex-start', alignContent: 'flex-start', paddingTop: '15px'}}>
                <Navbar.Brand href="/"><img src={ NebulaIcon } height="70px" alt=""></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start'}}>
                <ul style={{justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding:'0px', whiteSpace: 'nowrap'}}>
                    <h5 style={{color:'#BBBBBB'}}>Contact</h5>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="tel:631-468-7477"><AiTwotonePhone/> 631-468-7477</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="mailto:succeed@nebulaacademyny.com"><AiTwotoneMail/> succeed@nebulaacademyny.com</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://www.google.com/maps/dir//180+Michael+Dr,+Syosset,+NY+11791,+USA/@40.8042056,-73.5511779,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c2817e5a652d8f:0x801ed763ddf8b24!2m2!1d-73.5161585!2d40.8042109!3e0" target="blank">180 Michael Drive Syosset, NY 11791</Nav.Link></Nav.Item>
                </ul>
                <ul>
                    <h5 style={{color:'#BBBBBB'}}>All Links</h5>
                    <li className="noPadding noMargin nobull"><Nav.Link className="footerItem" href="/">About</Nav.Link></li>
                    <li className="noPadding noMargin nobull"><Nav.Link className="footerItem" href="/staff">Staff</Nav.Link></li>
                    <li className="noPadding noMargin nobull"><Nav.Link className="footerItem" href="/sbls">Science Behind Learning</Nav.Link></li>
                    <li className="noPadding noMargin nobull"><Nav.Link className="footerItem" href="/STEAMCoach">STEAM Coach</Nav.Link></li>
                    <li className="noPadding noMargin nobull"><Nav.Link className="footerItem" href="/CSTC">Computer Science Teaching Certification</Nav.Link></li>
                    <li className="noPadding noMargin nobull"><Nav.Link className="footerItem" href="/programs#drones">Drones</Nav.Link></li>
                    <li className="noPadding noMargin nobull"><Nav.Link className="footerItem" href="/programs#minecraft:EE">Minecraft: Education Edition</Nav.Link></li>
                    <li className="noPadding noMargin nobull"><Nav.Link className="footerItem" href="/programs#microsoftMIE">Microsoft MIE</Nav.Link></li>
                </ul>
                <ul style={{justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding:'0px', whiteSpace: 'nowrap'}}>
                    <h5 style={{color:'#BBBBBB', whiteSpace: 'normal'}}>Registration Links</h5>
                    <Nav.Item><Nav.Link style={{textAlign:'left', maxWidth:"210px", whiteSpace:"normal"}} href="https://www.youtube.com/watch?v=bupWPZdXqIA" target="blank" download>Register: Drone Workshop </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left', maxWidth:"210px", whiteSpace:"normal"}} href="https://flexboxfroggy.com/" target="blank" download>Register: Computer Science Teaching Certification </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left', maxWidth:"210px", whiteSpace:"normal"}} href="https://www.w3schools.com/js/js_intro.asp" target="blank" download>Register: STEAM Coach Certification  </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left', maxWidth:"210px", whiteSpace:"normal"}} href="https://www.youtube.com/watch?v=Ukg_U3CnJWI" target="blank" download>Register: The Science Behind Learning </Nav.Link></Nav.Item>
                </ul>
                    <Nav className="ml-auto customFooter">
                        <Row>
                            <Col>
                                <Nav.Item><Nav.Link style={{padding: '0px'}} target="blank" className="footerItem" href="https://www.facebook.com/NebulaAcademyNY/"><AiFillFacebook /></Nav.Link></Nav.Item>
                            </Col>
                            <Col>
                                <Nav.Item><Nav.Link style={{padding: '0px'}} target="blank" className="footerItem" href="https://www.linkedin.com/company/40795558/admin/"><AiFillLinkedin /></Nav.Link></Nav.Item>
                            </Col>
                            <Col>
                                <Nav.Item><Nav.Link style={{padding: '0px'}} target="blank" className="footerItem" href="https://www.instagram.com/nebulaacademia/"><AiFillInstagram /></Nav.Link></Nav.Item>
                            </Col>
                            <Col>
                                <Nav.Item><Nav.Link style={{padding: '0px'}} target="blank" className="footerItem" href="https://twitter.com/nynebula?lang=en"><AiFillTwitterCircle /></Nav.Link></Nav.Item>
                            </Col>
                        </Row>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>
)
