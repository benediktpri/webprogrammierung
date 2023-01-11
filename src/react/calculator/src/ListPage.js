import 'bootstrap/dist/css/bootstrap.min.css';
import './list.css';

import React, { useState, useEffect } from 'react';
import { getReports } from './DBConnector';
import { Link } from 'react-router-dom';

function ListPage() {
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
                                <Link to="/map" className="nav-link">
                                    Map
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/list" className="nav-link active">
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
            <div>
                {reports.map((report) => (
                    <div key={report.id} className="report">
                        <span className="name">{report.name}</span>
                        <span className="location">{report.location}</span>
                        <span className="description">{report.description}</span>
                        <span className="description">{report.timestamp}</span>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default ListPage;
