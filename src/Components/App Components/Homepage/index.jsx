import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '/src/Images/G2W-Logo.png';
import '../Homepage/home.css';
import Button from 'react-bootstrap/Button';
import { BsArrowDown } from 'react-icons/bs';
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'; // Import form components from react-bootstrap

function Homepage() {
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
    console.log(formData); // You can handle form submission logic here
  };

  return (
    <div>
      <div className="hero-container-wrapper">
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
          {/* Animated scrolling icon */}
          <div className="scroll-icon" onClick={scrollToAbout}>
            <BsArrowDown className="bounce" /> {/* Applying bounce animation */}
          </div>
        </div>
      </div>
      {/* About section */}
      <div className="about-section red-bg">
        <div className="container about-container">
          <h2 className="text-white">Are you ready to <i>Get To Work</i>?</h2>
          <hr className="solid"></hr>
          <h4 className="text-white">Having spent hours and hours setting up projects we thought, why don't we automate this to help the speed and also share it with the community.</h4>
        </div>
      </div>
      {/* Team section */}
      <div className="team-section white-bg">
        <div className="container">
          <h2 className="text-center">Our Team</h2>
          <hr className="solid-red"></hr>
          <div className="row">
            {/* Placeholder team members */}
            <div className="col-md-2 text-center">
              <img src="/src/Images/placeholder1.jpg" alt="Placeholder" className="img-fluid rounded-circle mb-2" />
              <p>John Doe</p>
            </div>
            <div className="col-md-2 text-center">
              <img src="/src/Images/placeholder1.jpg" alt="Placeholder" className="img-fluid rounded-circle mb-2" />
              <p>John Doe</p>
            </div>
            <div className="col-md-2 text-center">
              <img src="/src/Images/placeholder1.jpg" alt="Placeholder" className="img-fluid rounded-circle mb-2" />
              <p>John Doe</p>
            </div>
            <div className="col-md-2 text-center">
              <img src="/src/Images/placeholder1.jpg" alt="Placeholder" className="img-fluid rounded-circle mb-2" />
              <p>John Doe</p>
            </div>
            <div className="col-md-2 text-center">
              <img src="/src/Images/placeholder1.jpg" alt="Placeholder" className="img-fluid rounded-circle mb-2" />
              <p>John Doe</p>
            </div>
            {/* Add more team members */}
          </div>
        </div>
      </div>
      {/* Contact form */}
      <div className="contact-section red-bg">
        <div className="container">
          <h2 className="text-white">Contact Us</h2>
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
            <Button variant="light" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
