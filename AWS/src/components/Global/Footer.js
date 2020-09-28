import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram, AiFillFacebook, AiTwotoneMail, AiTwotonePhone} from 'react-icons/ai'
import NebulaIcon from '../../assets/NAIconTransparent240.png';
import './Footer.css';
import AWS_Flyer from '../../assets/AWS_Flyer.pdf'
import AWS_Brochure from '../../assets/AWS_Brochure.pdf'
import AWS_Student_Infographic from '../../assets/AWS_Student_Infographic.pdf'
import AWS_University_Infographic from '../../assets/AWS_University_Infographic.pdf'

export const Footer = () => (
    <React.Fragment>
        <Navbar bg="dark" className="footerNavbar mainNavbar navbar-dark navbar-collapse"  style={{fontSize: '.80em', lineHeight:'10px'}}toggleable="true" expand="lg">
            <Container style={{ alignItems: 'flex-start', alignContent: 'flex-start', paddingTop: '15px'}}>
                <Navbar.Brand href="/"><img src={ NebulaIcon } height="70px" alt=""></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start'}}>
                <ul style={{justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding:'0px', whiteSpace: 'nowrap'}}>
                    <h5 style={{color:'#BBBBBB'}}>Contact</h5>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="tel:631-468-7477" className="footerItem"><AiTwotonePhone/> 631-468-7477</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="mailto:succeed@nebulaacademyny.com" className="footerItem"><AiTwotoneMail/> succeed@nebulaacademyny.com</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://www.google.com/maps/dir//180+Michael+Dr,+Syosset,+NY+11791,+USA/@40.8042056,-73.5511779,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c2817e5a652d8f:0x801ed763ddf8b24!2m2!1d-73.5161585!2d40.8042109!3e0" target="blank" className="footerItem">180 Michael Drive Syosset, NY 11791</Nav.Link></Nav.Item>
                </ul>
                <ul>
                    <h5 style={{color:'#BBBBBB'}}>All Links</h5>
                    <Nav.Item className="noPadding nobull noMargin smallLineHeight"><Nav.Link className="footerItem" href="/">Overview</Nav.Link></Nav.Item>
                    <Nav.Item className="noPadding nobull noMargin smallLineHeight"><Nav.Link className="footerItem" href="/staff">Staff</Nav.Link></Nav.Item>
                    <Nav.Item className="noPadding nobull noMargin smallLineHeight"><Nav.Link className="footerItem" href="/universities">Universities</Nav.Link></Nav.Item>
                    <Nav.Item className="noPadding nobull noMargin smallLineHeight"><Nav.Link className="footerItem" href="/registration">Register</Nav.Link></Nav.Item>
                    <Nav.Item className="noPadding nobull noMargin smallLineHeight"><Nav.Link className="footerItem" href="/partners">Partners</Nav.Link></Nav.Item>
                    <Nav.Item className="noPadding nobull noMargin smallLineHeight"><Nav.Link className="footerItem" href="/guestspeakers">GuestSpeakers</Nav.Link></Nav.Item>
                    <Nav.Item className="noPadding nobull noMargin smallLineHeight"><Nav.Link className="footerItem" href="/Outcomes">Outcomes</Nav.Link></Nav.Item>
                </ul>
                <ul style={{justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding:'0px', whiteSpace: 'nowrap'}}>
                    <h5 style={{color:'#BBBBBB'}}>Articles</h5>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} className="footerItem" href="https://aws.amazon.com/blogs/publicsector/a-commitment-to-training-learning-pathways-to-real-world-jobs-with-aws-educate/" target="blank">Amazon: Real-world Jobs with AWS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} className="footerItem" href="http://techgenix.com/aws-certification/" target="blank">Techgenix: Why Get an AWS Cert?</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} className="footerItem" href="https://www.forbes.com/sites/louiscolumbus/2019/07/28/aws-certifications-increase-tech-pay-up-to-12k-a-year/#993136f189c6" target="blank">Forbes: Increase Your Pay With AWS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} className="footerItem" href='https://www.luminafoundation.org/files/resources/report-on-phase-i-study-embedding-industry-professional-certifications-within-higher-education-january-2017.pdf' target="blank">Lumina: Professional Certs within Higher Edu </Nav.Link></Nav.Item>
                </ul>
                <ul style={{justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding:'0px', whiteSpace: 'nowrap'}}>
                    <h5 style={{color:'#BBBBBB', whiteSpace: 'normal'}}>Brochures</h5>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} className="footerItem" href={ AWS_Flyer } target="blank" download>AWS One-Page Flyer</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} className="footerItem" href={ AWS_Brochure } target="blank" download>AWS Full Brochure</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} className="footerItem" href={ AWS_Student_Infographic } target="blank" download>Student Infograph</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} className="footerItem" href={ AWS_University_Infographic } target="blank" download>University Infograph</Nav.Link></Nav.Item>
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
