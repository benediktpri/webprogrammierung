import ReportPage from './ReportPage';
import HomePage from './HomePage';
import MapPage from './MapPage';
import ListPage from './ListPage';
import Imprint from './Imprint';
import { Routes, Route } from 'react-router-dom';

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/imprint" element={<Imprint />} />
        </Routes>
    );
}

export default Routing;