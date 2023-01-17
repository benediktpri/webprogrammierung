import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/list.css';
import '../css/index.css';

import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getReports, deleteReport } from '../DBConnector';

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

    // Button "Resolve"
    const handleDeleteReport = async (report) => {
        if (report) {
            await deleteReport(report);
            fetchReports();
        }
        else {
            console.log("The report object is undefined");
        }
    }

    // Button "Image"
    const handleShowImage = (report) => {
        if (report.url) {
            window.open(report.url);
        }
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
                            <Link className="nav-link" to="/report">Report</Link>
                            <Link className="nav-link" to="/map">Map</Link>
                            <Link className="nav-link active" to="/list">List</Link>
                            <Link className="nav-link" to="/imprint">Imprint</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="heading"> {/* -- Heading --*/}
                <div className="row">
                    <div className="col-sm-3">Animal</div>
                    <div className="col-sm-2">Location</div>
                    <div className="col-sm-3">Note</div>
                    <div className="col-sm-2">Timestamp</div>
                    <div className="col-sm-2"></div>
                </div>
            </div>

            <div> {/* -- List of reports -- */}
                {reports.map((report) => (
                    <div key={report.id} className="entry row">
                        <div className="col-sm-3">{report.name}</div>
                        <div className="col-sm-2">{report.location}</div>
                        <div className="col-sm-3">{report.description}</div>
                        <div className="col-sm-2">{report.timestamp}</div>
                        <div className="col-sm-1">
                            <button onClick={() => handleDeleteReport(report)} href="#" className="list_btn btn btn-primary d-flex justify-content-center">Resolve</button>
                        </div>
                        <div className="col-1">
                            <button onClick={() => handleShowImage(report)} href="#" className="list_btn btn btn-primary d-flex justify-content-center">Image</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default ListPage;
