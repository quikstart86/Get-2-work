import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, InputGroup } from 'react-bootstrap'; // Import React Bootstrap components
import { HiOutlineMail } from 'react-icons/hi'; // Import email icon
import { AiOutlineGithub } from 'react-icons/ai'; // Import GitHub icon
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import './step1.css';

function Step1() {
  const [address, setAddress] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [github, setGithub] = React.useState('');
  const [linkedin, setLinkedin] = React.useState('');

  const handleSelect = async (value) => {
    setAddress(value);
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log('Lat lng:', latLng);
  };

  const handleNext = () => {
    // Handle next logic
  };

  return (
    <div className="step1-container">
      <div className="intro-text">
        {/* Intro text */}
        <h2>Hi there!</h2>
        <p>Let's get to know each other. Please provide a few pieces of info about yourself, and how you'd like all your new clients to get in touch with you.</p>
      </div>
      <div className="input-section">
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

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

          <Form.Group controlId="formBio">
            <Form.Label>Short Bio:</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter a short bio (max 30 words)" maxLength={150} />
          </Form.Group>

          {/* Email Address */}
          <Form.Group controlId="formEmail">
            {/* <Form.Label>Email Address:</Form.Label> */}
            <InputGroup className="input-group">
              <HiOutlineMail className="input-icon" />
              <Form.Control type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputGroup>
          </Form.Group>

          {/* GitHub Username */}
          <Form.Group controlId="formGithub">
            {/* <Form.Label>Github Username:</Form.Label> */}
            <InputGroup className="input-group">
              <AiOutlineGithub className="input-icon" />
              <Form.Control type="text" placeholder="Github username" value={github} onChange={(e) => setGithub(e.target.value)} />
            </InputGroup>
          </Form.Group>

          {/* LinkedIn Profile */}
          <Form.Group controlId="formLinkedin">
            {/* <Form.Label>LinkedIn:</Form.Label> */}
            <InputGroup className="input-group">
              <FaLinkedin className="input-icon" />
              <Form.Control type="text" placeholder="LinkedIn profile URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
            </InputGroup>
          </Form.Group>

          <div className="button-container">
            <Link to="/step2">
              <Button variant="primary" onClick={handleNext}>Next</Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Step1;
