import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/cake');
  };

  return (
    <div className="hero-section">
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1>
      Happy Birthday to you 💖💖 <br />
        <button className="next-btn" onClick={handleNext}>→</button>
      </h1>

      <div className="clock-page">
      <div className="clock">
        {/* Numbers */}
        <div className="number number12">12</div>
        <div className="number number3">3</div>
        <div className="number number6">6</div>
        <div className="number number9">9</div>

        {/* Hands */}
        <div className="hand hour-hand"></div>
        <div className="hand minute-hand"></div>

        {/* Center dot */}
        <div className="center-dot"></div>
      </div>
    </div>

    <div className="clock-page">
  <div className="clock">
    {/* Numbers */}
    <div className="number number12">12</div>
    <div className="number number3">3</div>
    <div className="number number6">6</div>
    <div className="number number9">9</div>

    {/* Hands */}
    <div className="hand hour-hand"></div>
    <div className="hand minute-hand"></div>

    {/* Center dot */}
    <div className="center-dot"></div>

    {/* Date inside clock */}
    <div className="date-text">May 20</div>
  </div>
</div>

    </div>
  );
}
