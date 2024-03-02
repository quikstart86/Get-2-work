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
              <p>
                <FaFacebook className="footer-icon" />
                <FaTwitter className="footer-icon" />
                <FaInstagram className="footer-icon" />
              </p>
            </Col>
          </div>

        </Row>
        <p className="text-muted mb-0 small">Copyright &nbsp;© Get To Work 2024</p>
      </Container>

      <a className="js-scroll-trigger scroll-to-top rounded" href="#page-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </footer>
  );
}

export default Footer;
