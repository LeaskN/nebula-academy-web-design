import React from 'react';
import { Nav, Navbar, Container  } from 'react-bootstrap';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import NebulaIcon from '../../assets/NAIconTransparent240.png';
import './Footer.css';

export const Footer = () => (
    <React.Fragment>
        <Navbar bg="dark" className="footerNavbar mainNavbar navbar-dark navbar-collapse"  style={{lineHeight: "5px", justifyContent: "center"}}toggleable="true" expand="lg">
            <Container style={{ margin:"10px"}}>
            <Navbar.Brand href="/"><img src={NebulaIcon} height="70px" alt=""></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <ul style={{ margin:"0px"}}>
                <li className="noPadding noMargin nobull smallLineHeight"><Nav.Link className="footerItem" href="/">About</Nav.Link></li>
                <li className="noPadding noMargin nobull smallLineHeight"><Nav.Link className="footerItem" href="/staff">Staff</Nav.Link></li>
                <li className="noPadding noMargin nobull smallLineHeight"><Nav.Link className="footerItem" href="/guestspeakers">Guest Speakers</Nav.Link></li>
                <li className="noPadding noMargin nobull smallLineHeight"><Nav.Link className="footerItem" href="/partners">Partners</Nav.Link></li>
            </ul>
                <Nav className="ml-auto customFooter" >
                    <Nav.Item><Nav.Link target="blank" className="footerItem" href="https://www.facebook.com/NebulaAcademyNY/"><AiFillFacebook /></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link target="blank" className="footerItem" href="https://www.linkedin.com/company/40795558/admin/"><AiFillLinkedin /></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link target="blank" className="footerItem" href="https://www.instagram.com/nebulaacademia/"><AiFillInstagram /></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link target="blank" className="footerItem" href="https://twitter.com/nynebula?lang=en"><AiFillTwitterCircle /></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>
)
