import React from "react";
import { Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import Icon from "../../assets/NebulaAcademyLogoNextToTitle.png";
import "./NavigationBar.css";

export const NavigationBar = () => (
  <Navbar
    bg="dark"
    className="mainNavbar navbar-dark"
    toggleable="true"
    expand="lg"
  >
    <Navbar.Brand className="navBarLogo" href="/">
      <img src={Icon} height="50px" alt=""></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto navContents">
        <Nav.Item>
          <Nav.Link href="/onlineLearning">Educators</Nav.Link>
        </Nav.Item>
        <NavDropdown title="Workforce Development" id="basic-nav-dropdown">
          <NavDropdown.Item href="/workforce-development">
            Workforce Development
          </NavDropdown.Item>
          <NavDropdown.Item href="/workshops">All Workshops</NavDropdown.Item>
          <NavDropdown.Item href="/workshops/1">
            Workshop: Jobs in Tech
          </NavDropdown.Item>
          <NavDropdown.Item href="/workshops/2">
            Workshop: Tech Sales
          </NavDropdown.Item>
          <NavDropdown.Item href="/workshops/3">
            Workshop: Tech Support
          </NavDropdown.Item>
          <NavDropdown.Item href="/workshops/4">
            Workshop: Software Engineer
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link href="/videos">Videos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/philanthropy">Philanthropy</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/staff">Team</Nav.Link>
        </Nav.Item>
        <Button href="/application" variant="success" id="nav-button">
          Apply
        </Button>
        <div style={{ width: "15px" }}></div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
