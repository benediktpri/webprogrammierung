import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/maps.css';
import '../css/index.css';

import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getReports } from '../DBConnector';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import { now } from "moment";
import moment from "moment";

function MapPage() {
    var Logo = require("../img/logo.png")
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
                    const latitude = Math.random() * 180 - 90; // range: -90 to 90
                    const longitude = Math.random() * 360 - 180; // range: -180 to 180
                    return {
                        ...report,
                        location: [latitude, longitude],
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
                            <Link className="nav-link" to="/report">Report</Link>
                            <Link className="nav-link active" to="/map">Map</Link>
                            <Link className="nav-link" to="/list">List</Link>
                            <Link className="nav-link" to="/imprint">Imprint</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="heading">Report Map, today: {moment(now()).format('MMMM Do')}</div> {/* -- Heading --*/}

            <div> {/* -- Map --*/}
                <MapContainer center={position} zoom={13} maxZoom={18} minZoom={3}>
                    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={position}>
                        <Popup>
                            Your location!
                        </Popup>
                    </Marker>
                    {reports.map((report) => {
                        if (Array.isArray(report.location) && report.location.length === 2 &&
                            typeof report.location[0] === 'number' && typeof report.location[1] === 'number') {
                            return (
                                <div key={report.id}>
                                    <Marker position={report.location} icon={redIcon}>
                                        <Popup>
                                            <div><img id='map_image' src={report.url} alt="no upload by user"/></div>
                                            <div className="map_text">{report.name}</div>
                                            <div className="map_text">{report.description}</div>
                                            <div className="map_text">{report.timestamp}</div>
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
