import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LightThemeImage from "/assets/Images/light-theme.png";
import DarkThemeImage from "/assets/Images/dark-theme.png";
import ColourfulThemeImage from "/assets/Images/colourful-theme.png";
import "./step3.css";
import Navbar from '../Navbar';
import Footer from '../Footer';
import ReactDOMServer from 'react-dom/server';
import MyComponent from '../../User Components/Homepage/index.jsx';


function Step3() {
  const [selectedTheme, setSelectedTheme] = useState("");

  useEffect(() => {
    // Retrieve selected theme from local storage on component mount
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
      setSelectedTheme(storedTheme);
      applyTheme(storedTheme);
    }
  }, []);

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    applyTheme(theme);
    // Store selected theme in local storage
    localStorage.setItem('selectedTheme', theme);
  };

  const applyTheme = (theme) => {
    import(`./${theme}-theme.css`).then(() => {
      document.documentElement.className = theme;
    });
  };

  useEffect(() => {
    handleThemeSelect("light");
  }, []);

  localStorage.setItem("themeData", JSON.stringify(selectedTheme))


  //Code to download the css and the Homepage data 
  const handleDownload = async () => {
    try {
      // Fetch CSS files

      const cssFile1Response = await fetch('src/Components/App Components/PortfolioBuilder/themes.css')
      const cssFile2Response = await fetch('src/Components/User Components/Homepage/Homepage.css')

      // Verify if the responses are successful
      if (!cssFile1Response.ok || !cssFile2Response.ok) {
        throw new Error('Failed to fetch CSS files');
      }

      // Convert response data to blobs
      const cssFile1Blob = await cssFile1Response.blob();
      const cssFile2Blob = await cssFile2Response.blob();

      // Create object URLs for files
      const cssFile1Url = URL.createObjectURL(cssFile1Blob);
      const cssFile2Url = URL.createObjectURL(cssFile2Blob);

      // Create download links and trigger click events
      const cssLink1 = document.createElement('a');
      cssLink1.href = cssFile1Url;
      cssLink1.download = 'style1.css';
      document.body.appendChild(cssLink1);
      cssLink1.click();

      const cssLink2 = document.createElement('a');
      cssLink2.href = cssFile2Url;
      cssLink2.download = 'style2.css';
      document.body.appendChild(cssLink2);
      cssLink2.click();

      // Cleanup
      document.body.removeChild(cssLink1);
      document.body.removeChild(cssLink2);

      URL.revokeObjectURL(cssFile1Url);
      URL.revokeObjectURL(cssFile2Url);

      // Get JSX representation of MyComponent
      // const myComponentJSX = <MyComponent />; 
      const myComponentJSX = ReactDOMServer.renderToStaticMarkup(<MyComponent />);

      // Create blob for MyComponent JSX
      const myComponentBlob = new Blob([myComponentJSX], { type: 'text/plain' });

      // Create object URL for MyComponent JSX
      const myComponentUrl = URL.createObjectURL(myComponentBlob);

      // Create download link and trigger click event for MyComponent JSX
      const myComponentLink = document.createElement('a');
      myComponentLink.href = myComponentUrl;
      myComponentLink.download = 'MyComponent.jsx';
      document.body.appendChild(myComponentLink);
      myComponentLink.click();

      // Cleanup
      document.body.removeChild(myComponentLink);
      URL.revokeObjectURL(myComponentUrl);
    } catch (error) {
      console.error('Error downloading files:', error);
    }


  };

  //END of code for dowloading CSS and homepage data

  return (
    <>
      <Navbar />
      <div className="step3-container py-4 py-xl-4">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-8 text-center mx-auto">
            <h2>Choose your theme</h2>
            <p className="w-lg-50">
              Now you get to pick your theme that reflects you and your portfolio!
              Once you're done, click Finish, where you will get your downloaded files and a view of your portfolio
            </p>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col" onClick={() => handleThemeSelect("light")}>
            <div className={`card ${selectedTheme === "light" ? "selected" : ""}`}>
              <div className="card-body p-4">
                <Card.Img
                  variant="top"
                  src={LightThemeImage}
                  className="img-fluid"
                />
                <p className="card-text">Light</p>
              </div>
            </div>
          </div>
          <div className="col" onClick={() => handleThemeSelect("dark")}>
            <div className={`card ${selectedTheme === "dark" ? "selected" : ""}`}>
              <div className="card-body p-4">
                <Card.Img
                  variant="top"
                  src={DarkThemeImage}
                  className="img-fluid"
                />
                <p className="card-text">Dark</p>
              </div>
            </div>
          </div>
          <div className="col" onClick={() => handleThemeSelect("colourful")}>
            <div className={`card ${selectedTheme === "colourful" ? "selected" : ""}`}>
              <div className="card-body p-4">
                <Card.Img
                  variant="top"
                  src={ColourfulThemeImage}
                  className="img-fluid"
                />
                <p className="card-text">Colourful</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">

          </div>
        </div>
        <div className='button-container'>
          <Link to={'/Step2'}>
            <Button variant="gtw">Prev</Button>
          </Link>
          <Link to={{ pathname: "/PortfolioBuilder", state: { selectedTheme } }}>
            <Button onClick={handleDownload} variant="gtw" disabled={!selectedTheme}>
              Finish
            </Button>
          </Link>

        </div>

      </div>
      <Footer />
    </>
  );
}

export default Step3;
