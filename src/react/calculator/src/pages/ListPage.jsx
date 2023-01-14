import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/list.css';

import React, { useState, useEffect } from 'react';
import { getReports, deleteReport } from '../DBConnector';
import { Link } from 'react-router-dom';

import { Container, Nav, Navbar } from 'react-bootstrap';


function ListPage() {
    var Logo = require("../img/logo.png")

    const [reports, setReports] = useState([]);

    async function fetchReports() {
        try {
            const data = await getReports();
            setReports(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchReports();
    }, []);

    const handleDeleteReport = async (report) => {
        if (report) {
            await deleteReport(report);
            fetchReports();
        }
        else {
            console.log("The report object is undefined");
        }

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
                            <Link className="nav-link" to="/report">Report</Link>
                            <Link className="nav-link" to="/map">Map</Link>
                            <Link className="nav-link active" to="/list">List</Link>
                            <Link className="nav-link" to="/imprint">Impressum</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <div className="header">
                <span className="name">Animal   </span>
                <span className="location">Location </span>
                <span className="description">Description   </span>
                <span className="description">Timestamp </span>
            </div>
            <div>
                {reports.map((report) => (
                    <div key={report.id} className="report">
                        <span className="name">{report.name}</span>
                        <span className="location">{report.location}</span>
                        <span className="description">{report.description}</span>
                        <span className="description">{report.timestamp}</span>
                        <button onClick={() => handleDeleteReport(report)} href="#" className="btn btn-primary d-flex justify-content-center">Resolve</button>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default ListPage;
