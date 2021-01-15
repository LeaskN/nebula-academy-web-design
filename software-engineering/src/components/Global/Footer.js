import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram, AiFillFacebook, AiTwotoneMail, AiTwotonePhone} from 'react-icons/ai'
import { IconContext } from 'react-icons';
import NebulaIcon from '../../assets/NAIconTransparent240.png';
import './Footer.css';

export const Footer = () => (
    <React.Fragment>
        <Navbar bg="dark" className="footerNavbar mainNavbar navbar-dark"  style={{fontSize: '.80em', lineHeight:'10px'}}>
            <Container className="container">
                <Navbar.Brand href="/"><img src={ NebulaIcon } height="70px" alt=""></img></Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
                <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start'}}>
                <div>
                    <ul style={{justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding:'0px', whiteSpace: 'nowrap'}}>
                        <h5 style={{color:'#BBBBBB'}}>Contact</h5>
                        <Nav.Item><Nav.Link style={{textAlign:'left'}} href="tel:631-468-7477"><AiTwotonePhone/> 631-468-7477</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link style={{textAlign:'left'}} href="mailto:succeed@nebulaacademyny.com"><AiTwotoneMail/> succeed@nebulaacademyny.com</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://www.google.com/maps/dir//180+Michael+Dr,+Syosset,+NY+11791,+USA/@40.8042056,-73.5511779,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c2817e5a652d8f:0x801ed763ddf8b24!2m2!1d-73.5161585!2d40.8042109!3e0" target="blank">180 Michael Drive Syosset, NY 11791</Nav.Link></Nav.Item>
                    </ul>
                    <Nav className="ml-auto customFooter">
                        <IconContext.Provider value={{size: ".5em"}}>
                            <Row>
                                <Col>
                                    <Nav.Item>
                                        <Nav.Link target="blank" className="footerItem" href="https://www.facebook.com/NebulaAcademyNY/"><AiFillFacebook className="responsiveIcon"/></Nav.Link>
                                    </Nav.Item>
                                </Col>
                                <Col>
                                    <Nav.Item><Nav.Link target="blank" className="footerItem" href="https://www.linkedin.com/company/40795558/admin/"><AiFillLinkedin className="responsiveIcon"/></Nav.Link></Nav.Item>
                                </Col>
                                <Col>
                                    <Nav.Item><Nav.Link target="blank" className="footerItem" href="https://www.instagram.com/nebulaacademia/"><AiFillInstagram className="responsiveIcon"/></Nav.Link></Nav.Item>
                                </Col>
                                <Col>
                                    <Nav.Item><Nav.Link target="blank" className="footerItem" href="https://twitter.com/nynebula?lang=en"><AiFillTwitterCircle className="responsiveIcon"/></Nav.Link></Nav.Item>
                                </Col>
                            </Row>
                        </IconContext.Provider>   
                    </Nav>
                </div>
                <ul>
                    <h5 style={{color:'#BBBBBB'}}>All Links</h5>
                    <li className="noPadding noMargin nobull smallLineHeight"><Nav.Link className="footerItem" href="/">About</Nav.Link></li>
                    <li className="noPadding noMargin nobull smallLineHeight"><Nav.Link className="footerItem" href="/staff">Staff</Nav.Link></li>
                    <li className="noPadding noMargin nobull smallLineHeight"><Nav.Link className="footerItem" href="/guestspeakerapplication">Guest Speakers</Nav.Link></li>
                    <li className="noPadding noMargin nobull smallLineHeight"><Nav.Link className="footerItem" href="/partners">Partners</Nav.Link></li>
                </ul>
                <ul style={{justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding:'0px', whiteSpace: 'nowrap'}}>
                    <h5 style={{color:'#BBBBBB'}}>Career Info</h5>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://aws.amazon.com/training/awsacademy/" target="blank">AWS Academy Training</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://careerleader.com/" target="blank">Career Leader</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://www.bls.gov/ooh/computer-and-information-technology/home.htm" target="blank">IT Careers & Pay</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href='https://www.glassdoor.com/Salaries/entry-level-software-engineer-salary-SRCH_KO0,29.htm' target="blank">Glassdoor: Entry SE Salaries </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href='https://www.indeed.com/salaries/junior-software-engineer-Salaries' target="blank">Indeed: Junior SE Salaries</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href='https://www.indeed.com/career/software-engineer/salaries' target="blank">Indeed: SE Salaries</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href='https://www.indeed.com/career/full-stack-developer/salaries' target="blank">Indeed: Full Stack Salaries</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href='https://www.indeed.com/career/senior-software-engineer/salaries' target="blank">Indeed: Senior SE Salaries</Nav.Link></Nav.Item>
                </ul>
                <ul style={{justifyContent: 'flex-start', alignItems: 'flex-start', alignContent: 'flex-start', padding:'0px', whiteSpace: 'nowrap'}}>
                    <h5 style={{color:'#BBBBBB', whiteSpace: 'normal'}}>Coding Links</h5>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://www.youtube.com/watch?v=bupWPZdXqIA" target="blank" download>Simple HTML Project</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://flexboxfroggy.com/" target="blank" download>Practice CSS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://www.w3schools.com/js/js_intro.asp" target="blank" download>What is JavaScript?</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://www.youtube.com/watch?v=Ukg_U3CnJWI" target="blank" download>JavaScript in 12 mins</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link style={{textAlign:'left'}} href="https://www.youtube.com/playlist?list=PLM_i0obccy3uiITMEb7PUlzgIFlxq9fvv" target="blank" download>Tic Tac Toe Coding Challenge</Nav.Link></Nav.Item>
                </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>
)
