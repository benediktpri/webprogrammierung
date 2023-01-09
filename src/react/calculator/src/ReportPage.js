import 'bootstrap/dist/css/bootstrap.min.css';
import './report.css';

import React from 'react';
import { useForm } from "react-hook-form";
import { pushReport } from './DBConnector';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function ReportPage() {

  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    pushReport(data.tiername, ort_str, data.hinweis);
    //data.ort
  }

  //const [latitude, setLat] = useState('LongitudeDefault');
  //const [longitude, setLong] = useState('LatitudeDefault');
  const [ort_str, setOrtStr] = useState('');
  

  const handleGpsClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      //setLat(position.coords.latitude);
      //setLong(position.coords.longitude);
      setOrtStr(position.coords.latitude + ", " + position.coords.longitude);

      console.log("Clicked:"+ ort_str);

    }, () => {
      // set default location to Mannheim, Germany if there is an error getting the user's position
      //latitude = 49.487459;
      //longitude = 8.466039;
      setOrtStr("failed")
    });

  }
  function handleChange(event) {
    setOrtStr(event.target.value);
    console.log("Change"+ ort_str)
  }


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
                  <Link to="/home">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/report">
                    <a className="nav-link active" aria-current="page">Report</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/map">
                    <a className="nav-link">Map</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/list">
                    <a className="nav-link">List</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/imprint">
                    <a className="nav-link">Impressum</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="main">
          <div className="container">
            
              <div className="row">
                <div className="col-12 col-sm-3 mt-2 align-self-center">
                  <h1>Tier</h1>
                </div>
                <div className="col-12 col-sm-9 align-self-center">
                  <input {...register("tiername")} className="form-control" type="text" placeholder="Name des Tieres" aria-label="Name des Tieres"></input>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-3 mt-2 align-self-center">
                  <h1>Ort</h1>
                </div>
                <div className="col-12 col-sm-7 align-self-center">
                  <input {...register("ort")} value={ort_str} onChange={handleChange} className="form-control" type="text" placeholder="Ort des Tieres" aria-label="Ort des Tieres"></input>
                </div>
                <div className="col-12 col-sm-2 align-self-center mt-2 mt-sm-0 d-flex just">
                  <button onClick={handleGpsClick} className="btn btn-primary d-flex justify-content-center ">GPS nutzen</button>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-3 mt-2 align-self-center">
                  <h1>Hinweis</h1>
                </div>
                <div className="col-12 col-sm-9 align-self-center">
                  <input {...register("hinweis")} className="form-control" type="text" placeholder="Weitere Hinweise"
                    aria-label="Weitere Hinweise"></input>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-2 d-flex justify-content-center">
                  <button href="#" className="btn btn-primary d-flex justify-content-center">Foto aufnehmen</button></div>
              </div>
              <div className="row">
                <div className="col-12 mt-5 d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <button href="#" className="btn btn-primary d-flex justify-content-center" type="submit">Report Animal</button>
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
