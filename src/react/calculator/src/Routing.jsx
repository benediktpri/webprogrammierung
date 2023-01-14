import ReportPage from './pages/ReportPage';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import ListPage from './pages/ListPage';
import Imprint from './pages/Imprint';
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