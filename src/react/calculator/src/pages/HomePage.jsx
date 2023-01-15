import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css';
import '../css/index.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {

  // Images 
  var Wombat = require('../img/wombat.jpg');
  var Map = require('../img/map.jpg');
  var Willy = require('../img/willy-abi.jpg');
  var Logo = require("../img/logo.png")

  return (
    <div className="main">
      <Navbar bg="light" expand="md"> {/* -- Navbar -- */}
        <Container>
          <Navbar.Brand><img alt="logo" src={Logo} className="logo d-inline-block align-top" />{' '}
            WankyWombat
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link active" to="/home">Home</Link>
              <Link className="nav-link" to="/report">Report</Link>
              <Link className="nav-link" to="/map">Map</Link>
              <Link className="nav-link" to="/list">List</Link>
              <Link className="nav-link" to="/imprint">Imprint</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="hero"> {/* -- Hero -- */}
        <div className="container-fluid">
          <div className="row">
            <div id="titel" className="col-12">WankyWombat</div>
          </div>
          <div className="row">
            <div id="claim" className="col-12">Report Dangerous Animals.<br /> Instantly.</div>
          </div>
          <div className="row">
            <div className="col-12">
              <Link to="/report" id="cta" className="btn btn-primary justify-content-center mt-3">
                Report now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="cards container-fluid"> {/* -- Cards -- */}
        <div className="row">

          <div className="col-12 col-sm-4 mt-sm-2 mt-0 mb-5"> {/* -- Card 1 -- */}
            <div className="card">
              <img src={Wombat} className="card-img-top" alt="a wombat" />
              <div className="card-body">
                <h3 className="card-title">Report</h3>
                <p className="card-text">With the click of a button you can report any dangerous animals.</p>
                <Link to="/report" className="btn btn-primary d-flex justify-content-center">
                  Report a dangerous animal.
                </Link>
              </div>

            </div>
          </div>

          <div className="col-12 col-sm-4 mt-sm-2 mt-0 mb-5"> {/* -- Card 2 -- */}
            <div className="card">
              <img src={Map} className="card-img-top" alt="a map" />
              <div className="card-body">
                <h3 className="card-title">Realtime</h3>
                <p className="card-text">See a realtime overview of all the reports in your area.</p>
                <Link to="/map" className="btn btn-primary d-flex justify-content-center">
                  Go to map
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-4 mt-sm-2 mt-0 mb-5"> {/* -- Card 3 -- */}
            <div className="card">
              <img src={Willy} className="card-img-top" alt="ranger willy" />
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