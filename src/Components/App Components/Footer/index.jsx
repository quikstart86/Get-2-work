import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import Font Awesome icons
import './footer.css';

function Footer() {
  const location = useLocation();

  const isHomepage = location.pathname === '/';

  if (!isHomepage) {
    return null;
  }

  return (
    <footer className="footer mt-auto">
      <Container>
        <Row>
          <div className="footer-div">
            <Col xs={12}>
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
