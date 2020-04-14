import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Icon from '../../assets/NebulaAcademyLogoNextToTitle.png';
import NebulaIcon from '../../assets/NAIconTransparent240.png';
import './NavigationBar.css';

export const NavigationBar = () => (
    <React.Fragment>
        <Navbar bg="dark" className="mainNavbar navbar-dark navbar-collapse" toggleable="true" expand="lg">
            <Navbar.Brand className="navBarLogo" href="/"><img src={Icon} height="50px" alt=""></img></Navbar.Brand>
            <Navbar.Brand className="navBarLogoSmall" href="/"><img src={NebulaIcon} height="47px" alt=""></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Overview</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/universities">Universities</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/outcomes">Outcomes</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/partners">Partners</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/guestspeakers">GuestSpeakers</Nav.Link></Nav.Item>
                    <Button href="/registration" variant="warning">Register Now</Button>
                    <div style={{width: "20px"}}></div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
)