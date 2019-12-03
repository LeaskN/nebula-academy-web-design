import React from 'react';
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import Icon from '../assets/NebulaAcademyLogoNextToTitle.png';
import './NavigationBar.css';

export const NavigationBar = () => (
    <React.Fragment>
        <Navbar bg="dark" className="mainNavbar navbar-dark navbar-collapse" toggleable expand="lg">
            <Navbar.Brand  href="/"><img src={Icon} height="65px" alt=""></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Welcome</Nav.Link></Nav.Item>
                    <NavDropdown title="Program" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Overview">Overview</NavDropdown.Item>
                        <NavDropdown.Item href="/Internship">Internship</NavDropdown.Item>
                        <NavDropdown.Item href="/Outcomes">Outcomes</NavDropdown.Item>
                        <NavDropdown.Item href="/Scholarship">Scholarship</NavDropdown.Item>
                        <NavDropdown.Item href="/Apply">Apply</NavDropdown.Item>
                        <NavDropdown.Item href="/Partners">Partners</NavDropdown.Item>
                        <NavDropdown.Item href="/GuestSpeakers">GuestSpeakers</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item><Nav.Link href="/Scholarships">Scholarships</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Scholarships">FAQs</Nav.Link></Nav.Item>
                    <Button variant="outline-success">Apply</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
)