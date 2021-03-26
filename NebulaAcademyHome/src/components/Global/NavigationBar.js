import React from 'react';
import { Nav, Navbar, Button, /*NavDropdown*/ } from 'react-bootstrap';
import Icon from '../../assets/NebulaAcademyLogoNextToTitle.png';
import './NavigationBar.css';

export const NavigationBar = () => (
    <Navbar bg="dark" className="mainNavbar navbar-dark" toggleable="true" expand="lg">
        <Navbar.Brand className="navBarLogo" href="/"><img src={Icon} height="50px" alt=""></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <div className='navContents'>
                <Nav.Item><Nav.Link href="/educators">Educators</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/workforce-development">Workforce Development</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/universities">Universities</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/philanthropy">Philanthropy</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/blog">Blog</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/staff">Team</Nav.Link></Nav.Item>
                <Button href="/application" variant="success" id="nav-button">Apply</Button>
                <div style={{width: "15px"}}></div>
            </div>
        </Navbar.Collapse>
    </Navbar>
)