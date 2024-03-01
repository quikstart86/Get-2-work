import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'; // Import React Bootstrap components
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import './step1.css';

function Step1() {
  const [address, setAddress] = React.useState('');

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

        <div className="button-container">
          <Link to="/step2">
            <Button variant="primary" onClick={handleNext}>Next</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Step1;
