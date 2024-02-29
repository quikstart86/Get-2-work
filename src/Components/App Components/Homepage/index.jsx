import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '/Users/matt/Desktop/Bootcamp/Get-2-work/src/Images/G2W-Logo.png'; 
import '../Homepage/home.css';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div>
      <img src={Logo} alt="Get To Work logo" />
      <div>
        <div className='textAnimation'>
        <p>Build an interactive, fully functioning, and customizable site in minutes.</p>
        </div>
      </div>
      <div className='getStarted'>
      <div className="mb-2">
      <Link to="/step1">
        <Button variant="secondary" size="lg">
          Lets get started
        </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
