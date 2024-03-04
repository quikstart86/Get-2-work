import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LightThemeImage from "/src/Images/light-theme.png";
import DarkThemeImage from "/src/Images/dark-theme.png";
import ColourfulThemeImage from "/src/Images/colourful-theme.png";
import "./step3.css";

function Step3() {
  const [selectedTheme, setSelectedTheme] = useState("");

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    import(`./${theme}-theme.css`).then(() => {
      document.documentElement.className = theme;
    });
  };

  localStorage.setItem("themeData", JSON.stringify(selectedTheme))

  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Choose your theme</h2>
          <p className="w-lg-50">
            Now you get to pick your theme that reflects you and your portfolio!
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
          <Link to={{ pathname: "/PortfolioBuilder", state: { selectedTheme } }}>
            <Button variant="primary" disabled={!selectedTheme}>
              Apply Theme
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Step3;
