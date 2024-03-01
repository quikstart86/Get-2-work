import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css';

function Index() {
  return (
    <div className='navigation'>
          <Navbar  expand="lg" className='fixed-top'>
      <Container>
        {/* Logo */}
        <div className="col-md-6 d-flex">
          <Navbar.Brand href="#home">
            <img
              src="./src/Images/G2W-Logo.png"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
        </div>

        {/* Navbar links */}
        <div className="col-md-6 d-flex">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* Placeholder Nav items */}
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </div>
  )
}

export default Index;
