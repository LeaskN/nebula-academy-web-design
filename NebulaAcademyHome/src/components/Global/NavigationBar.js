import React from 'react';
import { Nav, Navbar,
    //  NavDropdown 
    } from 'react-bootstrap';
import Icon from '../../assets/NebulaAcademyLogoNextToTitle.png';
import './NavigationBar.css';

export const NavigationBar = () => (
    <Navbar bg="dark" className="mainNavbar navbar-dark navbar-collapse" toggleable="true" expand="lg">
        <Navbar.Brand className="navBarLogo" href="/"><img src={Icon} height="50px" alt=""></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <div className='navContents'>
                {/* <Nav.Item><Nav.Link href="/steam-for-kids">STEAM for Kids</Nav.Link></Nav.Item> */}
                <Nav.Item><Nav.Link href="/educators">Educators</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/workforce-development">Workforce Development</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/universities">Universities</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/philanthropy">Philanthropy</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/staff">Team</Nav.Link></Nav.Item>
                {/* <NavDropdown alignRight id="dropdown-menu-align-right" title="About">
                    <NavDropdown.Item href="/">Team</NavDropdown.Item>
                    <NavDropdown.Item href="/success-stories">Success Stories</NavDropdown.Item>
                    <NavDropdown.Item href="/employment">Employment</NavDropdown.Item>
                    <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                </NavDropdown> */}
                <div style={{width: "15px"}}></div>
            </div>
        </Navbar.Collapse>
    </Navbar>
)