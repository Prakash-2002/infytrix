import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DashboardToday from './pages/DashboardToday';
import DashboardComparison from './pages/DashboardComparison';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav style={{display:'flex', flexDirection:'column'}}>
        <ul style={{display:'flex',justifyContent:'space-evenly',listStyle:'none', fontSize:'1.5rem'}}>
          <li><Link to="/today">Today's Sales</Link></li>
          <li><Link to="/comparison">Sales Comparison</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/today" element={<DashboardToday />} />
        <Route path="/comparison" element={<DashboardComparison />} />
        <Route path="/" element={<DashboardToday />} />
      </Routes>
    </Router>
  );
};

export default App;

