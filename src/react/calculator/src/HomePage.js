import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

import { useForm } from "react-hook-form";
import React from 'react';

function HomePage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">WankyWombat</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="report.html">Report</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="maps.html">Map</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="list.html">List</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Impressum</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="hero">
        <div id="main" class="container">
          <div class="row">
            <div id="titel" class="col-12">WankyWombat</div>
            <div id="claim" class="col-12">Report Dangerous Animals.<br> Instantly.</br></div>
          </div>
      </div>

      </div><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"></script>

    </div>
  );
}

export default HomePage;