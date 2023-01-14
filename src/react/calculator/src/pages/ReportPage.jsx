import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/report.css';

import React from 'react';
import { useForm } from "react-hook-form";
import { pushReport } from '../DBConnector';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";
import storage from '../DBConnector';
import { now } from "moment";
import moment from "moment";

import { Container, Nav, Navbar } from 'react-bootstrap';


function ReportPage() {

  var Logo = require("../img/logo.png")

  const { register, handleSubmit, formState } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    pushReport(data.tiername, ort_str, data.hinweis, moment(now()).format('MMMM Do YYYY, h:mm'));
    var mail_values = {
      animal: data.tiername,
      location: ort_str,
      info: data.hinweis,
      email: 'felix.2001@web.de' // Emailadress of ranger
    };
    /*e.preventDefau
    /*emailjs.send('service_sxdzo4f', 'template_0o7vawb', mail_values, 'eY3vlgIfp7iXz3CD0');*/ //no spam pls. only 200 per month
    console.log("Emails send")
  }

  //const [latitude, setLat] = useState('LongitudeDefault');
  //const [longitude, setLong] = useState('LatitudeDefault');
  const [ort_str, setOrtStr] = useState('');


  const handleGpsClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      //setLat(position.coords.latitude);
      //setLong(position.coords.longitude);
      setOrtStr(position.coords.latitude + ", " + position.coords.longitude);

      console.log("Clicked:" + ort_str);

    }, () => {
      // set default location to Mannheim, Germany if there is an error getting the user's position
      //latitude = 49.487459;
      //longitude = 8.466039;
      setOrtStr("failed")
    });

  }
  function handleChange(event) {
    setOrtStr(event.target.value);
    console.log("Change" + ort_str);
  }

  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  function handleChangeImg(event) {
    setFile(event.target.files[0]);
  }
  function handleImageUpload() {
    if (!file) {
      alert("Please choose a Image first!")
    }

    const storageRef = ref(storage, `/files/${file.name}`)
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
          console.log(url);
        });
      }
    );
  }

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
              <Link className="nav-link active" to="/report">Report</Link>
              <Link className="nav-link" to="/map">Map</Link>
              <Link className="nav-link" to="/list">List</Link>
              <Link className="nav-link" to="/imprint">Impressum</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

      <div className="main">
        <div className="container">

          <div className="row">
            <div className="col-12 col-sm-3 mt-2 align-self-center">
              <h1>Animal</h1>
            </div>
            <div className="col-12 col-sm-9 align-self-center">
              <input {...register("tiername")} className="form-control" type="text" placeholder="Name of the animal" aria-label="Name of the animal"></input>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-3 mt-2 align-self-center">
              <h1>Location</h1>
            </div>
            <div className="col-12 col-sm-7 align-self-center">
              <input {...register("ort")} value={ort_str} onChange={handleChange} className="form-control" type="text" placeholder="Location of the animal" aria-label="Location of the animal"></input>
            </div>
            <div className="col-12 col-sm-2 align-self-center mt-2 mt-sm-0 d-flex just">
              <button onClick={handleGpsClick} className="btn btn-primary d-flex justify-content-center ">use GPS</button>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-3 mt-2 align-self-center">
              <h1>Description</h1>
            </div>
            <div className="col-12 col-sm-9 align-self-center">
              <input {...register("hinweis")} className="form-control" type="text" placeholder="Additional descrption"
                aria-label="Additional descrption"></input>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-3 mt-2 align-self-center">
              <h1>Image</h1>
            </div>
            <div className="col-12 col-sm-9 align-self-center">
              <input type="file" accept="image/*" onChange={handleChangeImg} />
            </div>
          </div>
          <div className="row">
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
