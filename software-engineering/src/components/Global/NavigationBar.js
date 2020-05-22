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
                    <NavDropdown title="Explore" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Overview</NavDropdown.Item>
                        <NavDropdown.Item href="/Program">Program</NavDropdown.Item>
                        <NavDropdown.Item href="/Curriculum">Curriculum</NavDropdown.Item>
                        <NavDropdown.Item href="/internships">Internships</NavDropdown.Item>
                        <NavDropdown.Item href="/outcomes">Outcomes</NavDropdown.Item>
                        <NavDropdown.Item href="/partners">Partners</NavDropdown.Item>
                        <NavDropdown.Item href="/guestspeakerapplication">Guest Speaker Application</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item><Nav.Link href="/trycoding">Try Coding</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Scholarships">Scholarships</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/guestspeakers">Guest Speakers</Nav.Link></Nav.Item>
                    <Button href="/application" variant="success">Apply</Button>
                    <div style={{width: "20px"}}></div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
)