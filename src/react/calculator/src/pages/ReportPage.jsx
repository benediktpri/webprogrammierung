import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/report.css';
import '../css/index.css';

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { storage, pushReport, updateTimestampDocURL } from '../DBConnector';
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";
import { now } from "moment";
import moment from "moment";
import emailjs from '@emailjs/browser';

function ReportPage() {

  var Logo = require("../img/logo.png")
  const { register, handleSubmit} = useForm();
  const [ort_str, setOrtStr] = useState('');

  // Button "Report Animal"
  const onSubmit = (data) => {
    console.log(data);
    pushReport(data.tiername, ort_str, data.hinweis, moment(now()).format('MMMM Do YYYY, h:mm')); // Daten werden in die Firebase-Datenbank geschrieben
    
    var mail_values = {
      animal: data.tiername,
      location: ort_str,
      info: data.hinweis,
      email: 'wanky.wombat@gmail.com' // Hier kann die Emailadresse, der Person eingegeben werden, welche eine Benachrichtigung über neue Meldungen bekommen soll.
    };
    emailjs.send('service_sxdzo4f', 'template_0o7vawb', mail_values, 'eY3vlgIfp7iXz3CD0'); // sending email with data
    console.log("Emails send")
  }

  // Button "Use GPS"
  const handleGpsClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setOrtStr(position.coords.latitude + ", " + position.coords.longitude);
    }, () => {
      setOrtStr("failed") // locatin is set to "failed" if there is an error getting the user's position
    });
  }

  function handleChangeGPS(event) {
    setOrtStr(event.target.value);
    console.log("Change: " + ort_str);
  }

  // Store Images
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  function handleChangeImg(event) {
    setFile(event.target.files[0]);
  }

  function handleImageUpload() {
    if (!file) {
      alert("Please choose a Image first!")
    }

    const storageRef = ref(storage, `/files/${uuidv4()}`)
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          updateTimestampDocURL(moment(now()).format('MMMM Do YYYY, h:mm'), url);
        });
      }
    );
  }

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
              <Link className="nav-link" to="/home">Home</Link>
              <Link className="nav-link active" to="/report">Report</Link>
              <Link className="nav-link" to="/map">Map</Link>
              <Link className="nav-link" to="/list">List</Link>
              <Link className="nav-link" to="/imprint">Imprint</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="heading">Report Form</div> {/* -- Heading --*/}

      <div>  {/* -- Input Form --*/}
        <div className="container">

          <div className="row">  {/* -- Animal Input -- */}
            <div className="col-12 col-md-3 mt-2 align-self-center">
              <h1 className='label'>Animal</h1>
            </div>
            <div className="col-12 col-md-9 align-self-center">
              <input {...register("tiername")} className="form-control" type="text" placeholder="Name of the animal" aria-label="Name of the animal"></input>
            </div>
          </div>

          <div className="row">  {/* -- Location Input -- */}
            <div className="col-12 col-md-3 mt-2 align-self-center">
              <h1 className='label'>Location</h1>
            </div>
            <div className="col-12 col-md-7 align-self-center">
              <input {...register("ort")} value={ort_str} onChange={handleChangeGPS} className="form-control" type="text" placeholder="Location of the animal" aria-label="Location of the animal"></input>
            </div>
            <div className="col-12 col-md-2 align-self-center mt-2 mt-md-0 d-flex justify-content-center">  {/* -- GPS Button -- */}
              <button onClick={handleGpsClick} className="btn btn-primary d-flex justify-content-center">Use GPS</button>
            </div>
          </div>

          <div className="row"> {/* -- Description Input -- */}
            <div className="col-12 col-md-3 mt-2 align-self-center">
              <h1 className='label'>Note</h1>
            </div>
            <div className="col-12 col-md-9 align-self-center">
              <input {...register("hinweis")} className="form-control" type="text" placeholder="Additional note"
                aria-label="Additional note"></input>
            </div>
          </div>

          <div className="row"> {/* -- Image Input -- */}
            <div className="col-12 col-md-3 mt-2 align-self-center">
              <h1 className='label'>Image</h1>
            </div>
            <div className="col-12 col-md-9 align-self-center">
              <input type="file" accept="image/*" onChange={handleChangeImg} />
            </div>
          </div>

          <div className="row"> {/* -- Report Button -- */}
            <div className="col-12 mt-5 d-flex justify-content-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <button onClick={handleImageUpload} href="#" className="btn btn-primary d-flex justify-content-center" type="submit">Report Animal</button>
                <p>{percent} "% done"</p>
              </form>
            </div>
          </div>

        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"></script>

    </div >


  );
}

export default ReportPage;
