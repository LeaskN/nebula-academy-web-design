import React from 'react';
import { Nav, Navbar  } from 'react-bootstrap';
import Icon from '../../assets/NAIconTransparent240.png';
import './Footer.css';

export const Footer = () => (
    <React.Fragment>
        <Navbar bg="dark" className="mainNavbar navbar-dark navbar-collapse" toggleable expand="lg">
            <Navbar.Brand  href="/"><img src={Icon} height="125px" alt=""></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <ul>
            <Nav.Item><Nav.Link href="/">About</Nav.Link></Nav.Item>
            {/* <Nav.Item><Nav.Link href="/">Careers</Nav.Link></Nav.Item> */}
            <Nav.Item><Nav.Link href="/">Staff</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/">Guest Speakers</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/">Partners</Nav.Link></Nav.Item>
            </ul>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="https://www.twitter.com"><img src={Icon} height="125px" alt=""></img></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://www.facebook.com"><img src={Icon} height="125px" alt=""></img></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://www.youtube.com"><img src={Icon} height="125px" alt=""></img></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://www.instagram.com"><img src={Icon} height="125px" alt=""></img></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
)