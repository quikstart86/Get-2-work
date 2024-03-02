import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {


  return (
    <footer className="footer text-center" style={footerStyle}>
      <Container>
        <Row className="mb-5">
          <Col className="list-inline-item">
            <a className="link-light social-link rounded-circle" href="#" style={socialLinkStyle}>
              Button 1
            </a>
          </Col>
          <Col className="list-inline-item">
            <a className="link-light social-link rounded-circle" href="#" style={socialLinkStyle}>
              Button 2
            </a>
          </Col>
          <Col className="list-inline-item">
            <a className="link-light social-link rounded-circle" href="#" style={socialLinkStyle}>
              Button 3
            </a>
          </Col>
        </Row>
        <p className="text-muted mb-0 small">Copyright &nbsp;© Get To Work 2024</p>
      </Container>
      <a className="js-scroll-trigger scroll-to-top rounded" href="#page-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </footer>
  );
};

export default Footer;
