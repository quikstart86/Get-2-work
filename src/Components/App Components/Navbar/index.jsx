import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navbar.css';
import logo from '/public/assets/Images/G2W-Logo.png'

function NavbarComponent() {
  return (
    <div className="navigation">
      <Navbar expand="lg">
        <Container className='short-navbar'>
          {/* Logo */}
          <div className="col-md-6 d-flex">
            <Navbar.Brand href="/">
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
