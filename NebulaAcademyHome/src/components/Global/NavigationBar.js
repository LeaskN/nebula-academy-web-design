import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Icon from '../../assets/NebulaAcademyLogoNextToTitle.png';
import NebulaIcon from '../../assets/NAIconTransparent240.png';
import './NavigationBar.css';

export const NavigationBar = () => (
    <React.Fragment>
        <Navbar bg="dark" className="mainNavbar navbar-dark navbar-collapse" toggleable="true" expand="lg">
            <Navbar.Brand className="navBarLogo" href="/"><img src={Icon} height="50px" alt=""></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <div className='navContents'>
                    <Nav.Item><Nav.Link href="/trycoding">Try Coding</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/STEAM for Kids">STEAM for Kids</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Educators">Educators</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Workforce Development">Workforce Development</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Universities">Universities</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Philanthropy">Philanthropy</Nav.Link></Nav.Item>
                    <NavDropdown alignRight id="dropdown-menu-align-right" title="About">
                        <NavDropdown.Item href="/">Team</NavDropdown.Item>
                        <NavDropdown.Item href="/success-stories">Success Stories</NavDropdown.Item>
                        <NavDropdown.Item href="/employment">Employment</NavDropdown.Item>
                        <NavDropdown.Item href="/philanthropy">Philanthropy</NavDropdown.Item>
                        <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
)