import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LightThemeImage from "/src/Images/light-theme.png";
import DarkThemeImage from "/src/Images/dark-theme.png";
import ColourfulThemeImage from "/src/Images/colourful-theme.png";
import "./step3.css";

function index() {
  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Choose you theme</h2>
          <p className="w-lg-50">
            Now you get to pick your theme that reflects you and your portfolio!
          </p>
        </div>
      </div>
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div id="light-theme" className="col">
          <div className="card">
            <div className="card-body p-4">
              <Card.Img
                variant="top"
                src={LightThemeImage}
                className="img-fluid"
              />
              <h4 className="card-title"></h4>
              <p className="card-text">Light</p>
            </div>
          </div>
        </div>
        <div id="dark-theme" className="col">
          <div className="card">
            <div className="card-body p-4">
              <Card.Img
                variant="top"
                src={DarkThemeImage}
                className="img-fluid"
              />
              <h4 className="card-title"></h4>
              <p className="card-text">Dark</p>
            </div>
          </div>
        </div>
        <div id="colourful-theme" className="col">
          <div className="card">
            <div className="card-body p-4">
              <Card.Img
                variant="top"
                src={ColourfulThemeImage}
                className="img-fluid"
              />
              <h4 className="card-title"></h4>
              <p className="card-text">Colourful</p>
            </div>
          </div>
        </div>
        <div className="col mx-auto">
          <div className="text-center">
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"
              >
                Pick your theme
              </button>
              <div className="dropdown-menu">
                <a id="light-picker" className="dropdown-item" href="#">
                  Light Theme
                </a>
                <a id="dark-picker" className="dropdown-item" href="#">
                  Dark Theme
                </a>
                <a id="colourful-picker" className="dropdown-item" href="#">
                  Colourful Theme
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
