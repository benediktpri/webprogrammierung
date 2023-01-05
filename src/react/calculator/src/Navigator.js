import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import React, { useState, useEffect } from 'react';

import HomePage from './HomePage';
import ReportPage from './ReportPage';
//import MapPage from './MapPage';

function App() {
  const [currentPage, setCurrentPage] = useState('report');

  useEffect(() => {
    switch (currentPage) {
      default:
        setCurrentPage(<ReportPage />);
        break;
    }
  }, [currentPage]);

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('report')}>About</button>
        <button onClick={() => setCurrentPage('map')}>Contact</button>
      </nav>
      {/* Display the current page */}
      {currentPage}

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"></script>
    </div>

  );
}

export default App;