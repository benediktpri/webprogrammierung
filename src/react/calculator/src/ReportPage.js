import 'bootstrap/dist/css/bootstrap.min.css';
import './report.css';

import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { pushReport, getReports } from './DBConnector';

function ReportPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, formState } = useForm();

  async function fetchReports() {
    try {
      const data = await getReports();
      setReports(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchReports();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    pushReport(data.tiername, data.ort, data.hinweis);
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
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Report</a>
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
      </nav>

      <div className="main">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <input {...register("ort")} className="form-control" type="text" placeholder="Ort des Tieres" aria-label="Ort des Tieres"></input>
              </div>
              <div className="col-12 col-sm-2 align-self-center mt-2 mt-sm-0 d-flex just">
                <button href="#" className="btn btn-primary d-flex justify-content-center">GPS nutzen</button>
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
                <button href="#" className="btn btn-primary d-flex justify-content-center" type="submit">Report Animal</button>
              </div>
            </div>
          </form>
        </div>
        <div>
          {reports.map((report) => (
            <div key={report.id} className="report">
              <span className="name">{report.name}</span>
              <span className="location">{report.location}</span>
              <span className="description">{report.description}</span>
            </div>
          ))}
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"></script>

    </div >


  );
}

export default ReportPage;
