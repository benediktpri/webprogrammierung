import ReportPage from './ReportPage';
import HomePage from './HomePage';
import MapPage from './MapPage';
import { Routes, Route } from 'react-router-dom';

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/list" element={<ReportPage />} />
            <Route path="/imprint" element={<ReportPage />} />
        </Routes>
    );
}

export default Routing;