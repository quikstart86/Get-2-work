import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LightThemeImage from '/src/Images/light-theme.png';
import DarkThemeImage from '/src/Images/dark-theme.png';
import ColourfulThemeImage from '/src/Images/colourful-theme.png';
import './step3.css'; 


function index() {
  return (
<div class="container py-4 py-xl-5">
    <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Choose you theme</h2>
            <p class="w-lg-50">Now you get to pick your theme that reflects you and your portfolio!</p>
        </div>
    </div>
    <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div id="light-theme" class="col">
            <div class="card">
                <div class="card-body p-4">
                <Card.Img variant="top" src={LightThemeImage} className="img-fluid"/>
                    <h4 class="card-title"></h4>
                    <p class="card-text">Light</p>
                </div>
            </div>
        </div>
        <div id="dark-theme" class="col">
            <div class="card">
                <div class="card-body p-4">
                <Card.Img variant="top" src={DarkThemeImage} className="img-fluid"/>
                    <h4 class="card-title"></h4>
                    <p class="card-text">Dark</p>
                </div>
            </div>
        </div>
        <div id="colourful-theme" class="col">
            <div class="card">
                <div class="card-body p-4">
                <Card.Img variant="top" src={ColourfulThemeImage} className="img-fluid"/>
                    <h4 class="card-title"></h4>
                    <p class="card-text">Colourful</p>
                </div>
            </div>
        </div>
        <div class="col mx-auto">
            <div class="text-center">
                <div class="dropdown"><button class="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">Pick your theme</button>
                    <div class="dropdown-menu"><a id="light-picker" class="dropdown-item" href="#">Light Theme</a><a id="dark-picker" class="dropdown-item" href="#">Dark Theme</a><a id="colourful-picker" class="dropdown-item" href="#">Colourful Theme</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default index 