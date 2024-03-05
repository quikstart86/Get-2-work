import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import './step1.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Step1() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const handleSelect = async (value) => {
    setAddress(value);
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log('Lat lng:', latLng);
  };

  const handleNext = () => {
    // Store the user's information in local storage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('address', address);
    localStorage.setItem('email', email);
    localStorage.setItem('github', github);
    localStorage.setItem('linkedin', linkedin);
    // Handle next logic
  };

  return (
    <>
    <Navbar />
    <div className="step1-container">
      <div className="intro-text">
        {/* Intro text */}
        <h2>Hi there!</h2>
        <p>Let's get to know each other. Please provide a few pieces of info about yourself, and how you'd like all your new clients to get in touch with you.</p>
      </div>
      <div className="input-section">
        <Form>
          {/* First Name */}
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </Form.Group>

          {/* Last Name */}
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </Form.Group>

          {/* Location */}
          <Form.Group controlId="formLocation">
            <Form.Label>Location:</Form.Label>
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <Form.Control
                    {...getInputProps({
                      placeholder: 'Enter your location',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div className="step1-loading">Loading...</div>}
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        {...getSuggestionItemProps(suggestion)}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </Form.Group>

          {/* Bio */}
          <Form.Group controlId="formBio">
            <Form.Label>Short Bio:</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter a short bio (max 30 words)" maxLength={150} />
          </Form.Group>

          {/* Email Address */}
          <Form.Group controlId="formEmail">
            <InputGroup className="input-group">
              <HiOutlineMail className="input-icon" />
              <Form.Control type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputGroup>
          </Form.Group>

          {/* GitHub Username */}
          <Form.Group controlId="formGithub">
            <InputGroup className="input-group">
              <AiOutlineGithub className="input-icon" />
              <Form.Control type="text" placeholder="Github username" value={github} onChange={(e) => setGithub(e.target.value)} />
            </InputGroup>
          </Form.Group>

          {/* LinkedIn Profile */}
          <Form.Group controlId="formLinkedin">
            <InputGroup className="input-group">
              <FaLinkedin className="input-icon" />
              <Form.Control type="text" placeholder="LinkedIn profile URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
            </InputGroup>
          </Form.Group>

          {/* Next Button */}
          <div className="button-container">
            <Link to="/step2">
              <Button variant="gtw" onClick={handleNext}>Next</Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Step1;
