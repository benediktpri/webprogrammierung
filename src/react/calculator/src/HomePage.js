import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import React from 'react';

import { Link } from 'react-router-dom';

function HomePage() {

  var Wombat = require('./img/wombat.jpg');
  var Map = require('./img/map.jpg');
  var Willy = require('./img/willy-abi.jpg');

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">WankyWombat</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="report.html">Report</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="maps.html">Map</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="list.html">List</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Impressum</a>
              </li>
            </ul>
          </div>
        </div>
      </nav><div className="hero">
        <div id="main" className="container">
          <div className="row">
            <div id="titel" className="col-12">WankyWombat</div>
            <div id="claim" className="col-12">Report Dangerous Animals.<br /> Instantly.</div>
          </div>

        </div>
      </div><div className="cards">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-4 mt-sm-2 mt-0 mb-5 d-flex justify-content-center">
            <div className="card" style={{ width: '18rem' }}>
              <img src={Wombat} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Report</h5>
                <p className="card-text">With the click of a button you can report any dangerous animals.</p>
                <Link to="/report">
                  <button className="btn btn-primary d-flex justify-content-center">Report a dangerous animal.</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-4 mt-sm-2 mt-0 mb-5 d-flex justify-content-center">
            <div className="card" style={{ width: '18rem' }}>
              <img src={Map} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Realtime</h5>
                <p className="card-text">See a realtime overview of all the reports in your area.</p>
                <a href="maps.html" className="btn btn-primary d-flex justify-content-center">Go to map</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-4 mt-sm-2 mt-0 mb-5 d-flex justify-content-center">
            <div className="card" style={{ width: '18rem' }}>
              <img src={Willy} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Rangers</h5>
                <p className="card-text">A ranger will be notified and remove the danger.</p>
                <a href="list.html" className="btn btn-primary d-flex justify-content-center">Go to the list of reports.</a>
              </div>
            </div>
          </div>
        </div>
      </div><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"></script>

    </div>
  );
}

export default HomePage;