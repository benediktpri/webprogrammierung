import 'bootstrap/dist/css/bootstrap.min.css';
import './maps.css';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
function MapPage() {
    const position = [51.505, -0.09]; // latitude, longitude
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
            <div className="mt">Report Map</div>
            <div id="map">
                <MapContainer center={position} zoom={13}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
                crossOrigin="anonymous"
            ></script>
        </div>
    );
}

export default MapPage;
