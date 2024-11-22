import logo from './logo.svg';
import './styles/App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import AirbnbSearch from './components/AirbnbSearch';
import BigCard from './components/BigCard';

function App() {
  return (
    <Router>
        <div className="homepage-section">
      <Navbar />
      <AirbnbSearch />
        <BigCard />
        </div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        {/* <Route path="/places-to-stay" element={<PlacesToStay />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/online-experiences" element={<OnlineExperiences />} />
            <Route path="/host" element={<h1>Host Page</h1>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
