import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cheers.css';
import Vishnu1 from '../images/vishnu-1.jpg';
import Vishnu2 from '../images/vishnu-2.jpg';
import Vishnu3 from '../images/vishnu-3.jpg';
import Vishnu4 from '../images/vishnu-4.jpg';

export default function Cheers() {
  const heartContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = heartContainerRef.current;
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDelay = Math.random() * 5 + 's';
      container.appendChild(heart);
    }
  }, []);

  const handleClickNavigate = () => {
    navigate('/msg');  // Navigate to the /constellation route
  };

  return (
    <div className="cheers-wrapper">
      {/* ✨ Sparkles */}
      {[...Array(30)].map((_, i) => (
        <div
          className="sparkle"
          key={`sparkle-${i}`}
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {/* 💜 Glowing Hearts */}
      <div className="heart-container" ref={heartContainerRef}></div>

      {/* 🖼️ Image Grid */}
      <div className="grid-container">
        <div className="image-box" style={{ backgroundImage: `url(${Vishnu1})` }}></div>
        <div className="image-box" style={{ backgroundImage: `url(${Vishnu2})` }}></div>
        <div className="image-box" style={{ backgroundImage: `url(${Vishnu3})` }}></div>
        <div className="image-box" style={{ backgroundImage: `url(${Vishnu4})` }}></div>
      </div>

      {/* 🎉 Cheers Text */}
      <div className="cheers-text">CHEERS TO<br />21</div>

      {/* 🌟 Show Constellation Button */}
      <button className="constellation-btn" onClick={handleClickNavigate}>
        Unlock the next level 🔓
      </button>
    </div>
  );
}
