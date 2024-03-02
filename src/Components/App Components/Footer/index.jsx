// footer - Index.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import Font Awesome icons
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <div className="footer-div">
            <Col xs={12}>
              <h4>Follow Us</h4>
              {/* Use Font Awesome icons with the custom style */}
              <p>
                <FaFacebook className="footer-icon" /> {/* Apply the custom style */}
                <FaTwitter className="footer-icon" />
                <FaInstagram className="footer-icon" />
              </p>
            </Col>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
