import 'bootstrap/dist/css/bootstrap.min.css';
import './report.css';


import { useForm } from "react-hook-form";

function App() {

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
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Report</a>
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

      <form onSubmit={handleSubmit(onSubmit)}>

      <div class="main">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-3 mt-2 align-self-center">
              <h1>Tier</h1>
            </div>
            <div class="col-12 col-sm-9 align-self-center">
              <input {...register("tiername")} class="form-control" type="text" placeholder="Name des Tieres" aria-label="Name des Tieres"></input>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-3 mt-2 align-self-center">
              <h1>Ort</h1>
            </div>
            <div class="col-12 col-sm-7 align-self-center">
              <input {...register("ort")} class="form-control" type="text" placeholder="Ort des Tieres" aria-label="Ort des Tieres"></input>
            </div>
            <div class="col-12 col-sm-2 align-self-center mt-2 mt-sm-0 d-flex just">
              <a href="#" class="btn btn-primary d-flex justify-content-center">GPS nutzen</a>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-3 mt-2 align-self-center">
              <h1>Hinweis</h1>
            </div>
            <div class="col-12 col-sm-9 align-self-center">
              <input {...register("hinweis")} class="form-control" type="text" placeholder="Weitere Hinweise"
                aria-label="Weitere Hinweise"></input>
            </div>
          </div>



          <div class="row">
            <div class="col-12 mt-2 d-flex justify-content-center">
              <a href="#" class="btn btn-primary d-flex justify-content-center">Foto aufnehmen</a></div>
          </div>
          <div class="row">
            <div class="col-12 mt-5 d-flex justify-content-center">
              <button href="#" class="btn btn-primary d-flex justify-content-center" type="submit">Report Animal</button>
            </div>
          </div>
        </div>
      </div>
      </form>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"></script>

</div>



    /* ----------------------- */
    /*
        <main class="form-signin w-100 m-auto">
    
            <form onSubmit={handleSubmit(onSubmit)}>
              <img class="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
              <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    
              <div class="form-floating">
                <input {...register("vorname")} class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>
    
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
            </form>
          </main>
          */


  );
}




export default App;
