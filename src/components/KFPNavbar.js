import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/images/logo.png';
import './KFPNavbar.css';

const { Brand, Toggle, Collapse } = Navbar;

const KFPNavbar = () => (
  <Navbar
    fluid
    expand="lg"
    collapseOnSelect
    sticky="top"
    className="navbar-custom"
    variant="dark"
  >
    <Container>
      <Brand href="#home">
        <Link to="/">
          <img
            className="navbar-logo"
            alt="Kids First Project Logo"
            src={logo}
          />
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
          <LinkContainer to="/advocacy">
            <Nav.Link>Advocacy</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Programs">
            <LinkContainer to="/programs/inshelter">
              <NavDropdown.Item>In-Shelter Services</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/programs/scholarship">
              <NavDropdown.Item>Scholarship Program</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown title="Get Involved">
            <LinkContainer to="/events">
              <NavDropdown.Item>Event Calendar</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/volunteer">
              <NavDropdown.Item>Volunteer</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapters">
              <NavDropdown.Item>Chapters</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/donate">
            <Nav.Link>Donate</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Collapse>
    </Container>
  </Navbar>
);

export default KFPNavbar;
