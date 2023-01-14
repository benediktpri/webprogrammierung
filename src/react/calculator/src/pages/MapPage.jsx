import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/maps.css';

import React, { useState, useEffect } from 'react';

import { getReports } from '../DBConnector';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import { now } from "moment";
import moment from "moment";

function MapPage() {
    const [position, setPosition] = useState([49.487459, 8.466039]); // default to Mannheim, Germany
    const [reports, setReports] = useState([]);
    const redIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    async function fetchReports() {
        try {
            const data = await getReports();
            const parsedData = data.map((report) => {
                // split location string on ',' and check if there are two numbers
                const locationParts = report.location.split(',');
                if (locationParts.length !== 2 || isNaN(locationParts[0]) || isNaN(locationParts[1])) {
                    // generate random longitude and latitude
                    const longitude = Math.random() * 180 - 90; // range: -90 to 90
                    const latitude = Math.random() * 360 - 180; // range: -180 to 180
                    return {
                        ...report,
                        location: [longitude, latitude],
                    };
                } else {
                    // parse location strings as floats
                    const location = locationParts.map(str => parseFloat(str));
                    return {
                        ...report,
                        location,
                    };
                }
            });
            setReports(parsedData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchReports();
    }, []);

    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
    }, () => {
        // set default location to Mannheim, Germany if there is an error getting the user's position
        setPosition([49.487459, 8.466039]);
    });



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
                                <Link to="/home" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/report" className="nav-link">
                                    Report
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/map" className="nav-link active">
                                    Map
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/list" className="nav-link">
                                    List
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/imprint" className="nav-link">
                                    Impressum
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mt">Report Map, today: {moment(now()).format('MMMM Do')}</div>
            <div id="map">
                <MapContainer center={position} zoom={13} maxZoom={18} minZoom={3}>
                    <TileLayer
                        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Your location!
                        </Popup>
                    </Marker>
                    
                    {/* // KOMMENTAR (ist besser im html teil von react nicht möglich): zeile 125 bis 132 erzeugt im hintergrund der karte eine tabelle. ich vermute das durch das map jedes mal ein neuer div erzeugt wird welcher dann ohne inhalt angezeigt wird. 
                    // vielleicht gibt es eine alternative zum div?? --> erste lösung: className="report" aus dem div genommen weil klasse report im list css mit farbe und border definiert ist. hintergrund der map ist noch anders als untern */}
                    {reports.map((report) => {
                        if (Array.isArray(report.location) && report.location.length === 2 &&
                            typeof report.location[0] === 'number' && typeof report.location[1] === 'number') {
                            return (
                                <div key={report.id}>
                                    <Marker position={report.location} icon={redIcon}>
                                        <Popup>
                                            {report.name} <br /> {report.description}
                                        </Popup>
                                    </Marker>
                                </div>
                            );
                        } else {
                            return null;
                        }

                    })}
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
