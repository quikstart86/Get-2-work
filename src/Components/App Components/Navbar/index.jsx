import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css';
import { useLocation } from 'react-router-dom';

function Index() {
  const location = useLocation();

  // Check if the current location is not the home page
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar ? (
        <div className="navigation">
          <Navbar expand="lg">
            <Container className='short-navbar'>
              {/* Logo */}
              <div className="col-md-6 d-flex">
                <Navbar.Brand href="/">
                  <img
                    src="./src/Images/G2W-Logo.png"
                    className="d-inline-block align-top"
                    alt="Logo"
                  />
                </Navbar.Brand>
              </div>

              {/* Navbar links */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" status="" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto">
                  {/* Placeholder Nav items */}
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#services">Team</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      ) : ('')}
    </>
  );
}

export default Index;
