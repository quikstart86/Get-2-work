import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '/public/assets/Images/Revised Logo.png'
import '../Homepage/home.css';
import Button from 'react-bootstrap/Button';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { BsArrowDown } from 'react-icons/bs';
import { Form, Button as BootstrapButton } from 'react-bootstrap';
import Akila from '/public/assets/Images/Akila.jpg'
import Georgie from '/public/assets/Images/Georgie.jpg'
import Jonathan from '/public/assets/Images/Jonathan.jpg'
import Matt from '/public/assets/Images/Matt.jpeg'
import Tom from '/public/assets/Images/Thomas.jpg'

function Homepage() {
  const location = useLocation();
  const isHomePage = location.pathname === 'Navbar';

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('.about-section');
    window.scrollTo({
      top: aboutSection.offsetTop,
      behavior: 'smooth'
    });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {isHomePage && <Navbar />} {/* Show Navbar only on the homepage */}
      <div className="hero-container-wrapper">
      <div className="scroll-icon" onClick={scrollToAbout}>
            <BsArrowDown className="bounce" />
          </div>
        <div className='homeContent'>
          <img src={Logo} alt="Get To Work logo" className="logo" />
          <div className='textAnimation'>
            <p>Build an interactive, fully functioning, and customizable website in minutes.</p>
          </div>

          <div className='getStarted'>
            <div className="mb-2">
              <Link to="/step1">
                <Button variant="secondary" size="lg">
                  Let's get started
                </Button>
              </Link>
            </div>
          </div>

        </div>

      </div>
      <div className="about-section">
        <div className="container about-container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <h2 className="gtw-text-black">Are you ready to <i>Get To Work</i>?</h2>
              <hr className="solid-red" />
              <h4 className="gtw-text-black">Introducing 'Get To Work' – the one-page portfolio website builder for web developers entering the job market.</h4>
              <h4 className="gtw-text-black">Simply answer a few questions about yourself, and we'll generate custom HTML, CSS, and JavaScript files, emailed to you instantly. Skip the coding legwork and Get To Work faster!</h4>

            </div>
          </div>
        </div>
      </div>
              {/* Team section */}
              <div className="team-section">
                <div className="container">
                  <h2 className="text-center">Our Team</h2>
                  <hr className="solid-red"></hr>
                  <div className="row">
                    {/* Placeholder team members */}
                    <div className="col-md-2 text-center">
                      <img src={Jonathan} alt="Placeholder" className="img-fluid rounded-circle mb-2 p-2" />
                      <h6>Jonathan</h6>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src={Matt} alt="Placeholder" className="img-fluid rounded-circle mb-2 p-2" />
                      <h6>Matt</h6>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src={Georgie} alt="Placeholder" className="img-fluid rounded-circle mb-2 p-2" />
                      <h6>Georgie</h6>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src={Akila} alt="Placeholder" className="img-fluid rounded-circle mb-2 p-2" />
                      <h6>Akila</h6>
                    </div>
                    <div className="col-md-2 text-center">
                      <img src={Tom} alt="Placeholder" className="img-fluid rounded-circle mb-2 p-2" />
                      <h6>Tom</h6>
                    </div>
                    {/* Add more team members */}
                  </div>
                </div>
              </div>
              {/* Contact form */}
              <div className="contact-section">
                <div className="container">
                  <h2 className="text-black">Contact Us</h2>
                  <hr className="solid"></hr>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        required
                      />
                    </Form.Group>
                    <Button  type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>

    </>
  );
}

export default Homepage;
