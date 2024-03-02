import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '/src/Images/G2W-Logo.png';
import '../Homepage/home.css';
import Button from 'react-bootstrap/Button';

function Homepage() {
  return (
    <div className="container-wrapper">
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
  );
}

export default Homepage;
