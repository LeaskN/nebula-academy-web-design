import React from 'react';
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import Icon from '../../assets/NebulaAcademyLogoNextToTitle.png';
import './NavigationBar.css';

export const NavigationBar = () => (
    <React.Fragment>
        <Navbar bg="dark" className="mainNavbar navbar-dark navbar-collapse" toggleable expand="lg">
            <Navbar.Brand  href="/"><img src={Icon} height="65px" alt=""></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown title="Program" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Overview</NavDropdown.Item>
                        <NavDropdown.Item href="/internships">Internships</NavDropdown.Item>
                        <NavDropdown.Item href="/outcomes">Outcomes</NavDropdown.Item>
                        <NavDropdown.Item href="/scholarships">Scholarships</NavDropdown.Item>
                        <NavDropdown.Item href="/application">Apply</NavDropdown.Item>
                        <NavDropdown.Item href="/partners">Partners</NavDropdown.Item>
                        <NavDropdown.Item href="/guestspeakers">GuestSpeakers</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item><Nav.Link href="/Scholarships">Scholarships</Nav.Link></Nav.Item>
                    <Button href="/application" variant="outline-success">Apply</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
)