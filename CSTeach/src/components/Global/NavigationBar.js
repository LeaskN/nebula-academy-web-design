import React from 'react';
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
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
                    <NavDropdown title="Programs" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/sbls">Science Behind Learning</NavDropdown.Item>
                        <NavDropdown.Item href="/STEAMCoach">STEAM Coach</NavDropdown.Item>
                        <NavDropdown.Item href="/CSTC">CSTC</NavDropdown.Item>
                        <NavDropdown.Item href="programs#drones">Drones</NavDropdown.Item>
                        <NavDropdown.Item href="/programs#minecraft:EE">Minecraft: Education Edition</NavDropdown.Item>
                        <NavDropdown.Item href="/programs#microsoftMIE">Microsoft MIE</NavDropdown.Item>
                    </NavDropdown>
                    <Button href="/register" variant="success">Register</Button>
                    <div style={{width: "20px"}}></div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
)