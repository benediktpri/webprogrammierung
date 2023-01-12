import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function HomePage() {

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

      <div className="hero">
        <div id="main" className="container-fluid">
          <div className="row">
            <div id="titel" className="col-12">WankyWombat</div>
          </div>
          <div className="row">
            <div id="claim" className="col-12">Report Dangerous Animals.<br /> Instantly.</div>
          </div>
        </div>
      </div>

      <div className="cards container-fluid">
        <div className="row">
          <div className="col-12 col-sm-4 mt-sm-2 mt-0 mb-5 ">
            <div className="card" >
              <img src={Wombat} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Report</h3>
                <p className="card-text">With the click of a button you can report any dangerous animals.</p>
                <Link to="/report" className="btn btn-primary d-flex justify-content-center">
                  Report a dangerous animal.
                </Link>
              </div>

            </div>
          </div>
          <div className="col-12 col-sm-4 mt-sm-2 mt-0 mb-5  ">
            <div className="card" >
              <img src={Map} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Realtime</h3>
                <p className="card-text">See a realtime overview of all the reports in your area.</p>
                <Link to="/map" className="btn btn-primary d-flex justify-content-center">
                  Go to map
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 mt-sm-2 mt-0 mb-5  ">
            <div className="card" >
              <img src={Willy} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Rangers</h3>
                <p className="card-text">A ranger will be notified and remove the danger.</p>
                <Link to="/list" className="btn btn-primary d-flex justify-content-center">
                  Go to the list of reports.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"></script>
    </div>
  );
}

export default HomePage;