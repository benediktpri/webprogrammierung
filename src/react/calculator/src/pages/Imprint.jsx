import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/imprint.css';
import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Nav, Navbar } from 'react-bootstrap';


function Imprint() {

  var Logo = require("../img/logo.png")

  return (


    <div>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand><img alt="logo" src={Logo} className="logo d-inline-block align-top" />{' '}
            WankyWombat
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/home">Home</Link>
              <Link className="nav-link" to="/report">Report</Link>
              <Link className="nav-link" to="/map">Map</Link>
              <Link className="nav-link" to="/list">List</Link>
              <Link className="nav-link active" to="/imprint">Impressum</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
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