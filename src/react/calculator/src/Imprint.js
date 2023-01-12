import 'bootstrap/dist/css/bootstrap.min.css';
import './imprint.css';
import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Imprint() {

  var Wombat = require('./img/wombat.jpg');
  var Map = require('./img/map.jpg');
  var Willy = require('./img/willy-abi.jpg');
  var Logo = require("./img/logo.png")

  return (


    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} className="logo" alt="..." />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/report" className="nav-link">
                  Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/map" className="nav-link">
                  Map
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/list" className="nav-link">
                  List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/imprint" className="nav-link">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mt">ABOUT US</div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'><h1>Contact Us</h1></div>
          <div className='col-12'><h1>Follow Us</h1></div>
          <div className='col-12'><h1>Terms of conditions</h1></div>
        </div>


      </div>


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"></script>
    </div>
  );
}

export default Imprint;