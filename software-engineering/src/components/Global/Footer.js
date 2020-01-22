import React from 'react';
import { Nav, Navbar, Container  } from 'react-bootstrap';
import FacebookIcon from '../../assets/FacebookIcon.png';
import InstagramIcon from '../../assets/InstagramIcon.png';
import TwitterIcon from '../../assets/TwitterIcon.png';
import LinkedInIcon from '../../assets/LinkedInIcon.png';
import NebulaIcon from '../../assets/NAIconTransparent240.png';
import './Footer.css';

export const Footer = () => (
    <React.Fragment>
        <Navbar bg="dark" className="footerNavbar mainNavbar navbar-dark navbar-collapse" toggleable="true" expand="lg">
            <Container>
            <Navbar.Brand href="/"><img src={NebulaIcon} height="70px" alt=""></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <ul>
            <p className="noPadding noMargin smallLineHeight"><Nav.Link href="/">About</Nav.Link></p>
            {/* <p className="noPadding noMargin smallLineHeight"><Nav.Link href="/">Careers</Nav.Link></p> */}
            <p className="noPadding noMargin smallLineHeight"><Nav.Link href="/staff">Staff</Nav.Link></p>
            <p className="noPadding noMargin smallLineHeight"><Nav.Link href="/guestspeakers">Guest Speakers</Nav.Link></p>
            <p className="noPadding noMargin smallLineHeight"><Nav.Link href="/partners">Partners</Nav.Link></p>
            </ul>
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="https://twitter.com/nynebula?lang=en"><img src={TwitterIcon} height="70px" alt=""></img></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://www.facebook.com/NebulaAcademyNY/"><img src={FacebookIcon} height="70px" alt=""></img></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://www.instagram.com/nebulaacademia/"><img src={InstagramIcon} height="70px" alt=""></img></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://www.linkedin.com/company/40795558/admin/"><img src={LinkedInIcon} height="70px" alt=""></img></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>
)
