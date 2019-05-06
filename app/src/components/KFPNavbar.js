import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/images/logo.png';
import './KFPNavbar.css';

const { Brand, Toggle, Collapse } = Navbar;

const KFPNavbar = () => (
  <Navbar fluid expand="lg" collapseOnSelect sticky="top" className="navbar-custom" variant="dark">
  <Container>
    <Brand href="#home">
      <Link to="/">
        <img className="navbar-logo" alt="Kids First Project Logo" src={logo} />
      </Link>
    </Brand>
    <Toggle aria-controls="basic-navbar-nav" />
    <Collapse className="justify-content-end">
      <Nav className="ml-auto">
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/team">
          <Nav.Link>Our Team</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Programs" id="basic-nav-dropdown">
          <LinkContainer to="/programs/inshelter">
            <NavDropdown.Item>In-Shelter Services</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/programs/scholarship">
            <NavDropdown.Item>Scholarship Program</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/programs/advocacy">
            <NavDropdown.Item>Advocacy</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Collapse>
    </Container>
  </Navbar>
);

export default KFPNavbar;