import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Footer/footer.css';

function Index() {
  return (
    <footer className="text-light py-3">
      <div className='fixed-bottom'>
      <Container>
        <Row>
          <div className='footer-div'>
          <Col xs={12} md={6}>
            <h4>Contact Us </h4>
            <p>Email: THIS IS PLACEHOLDER</p>
            <p>Phone: THIS IS PLACEHOLDER</p>
          </Col>
          <Col xs={12} md={6}>
            <h4>Follow Us</h4>
            <p>Facebook | Twitter | Instagram</p>
          </Col>
          </div>
        </Row>
      </Container>
      </div>
    </footer>
  );
}

export default Index;
