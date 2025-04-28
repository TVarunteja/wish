import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CakePage.css';
import cakeImage from '../images/cake-2.png';
import panda1 from '../images/panda-4.webp';
import panda2 from '../images/panda-3.jpg';
import blowSound from '../music/man-blowing-candle-out-102026.mp3';

export default function CakePage() {
  const [blownOut, setBlownOut] = useState(false);
  const [thumbX, setThumbX] = useState(0);
  const startX = useRef(0);
  const navigate = useNavigate();
  const blow = new Audio(blowSound);

  const handleBlowOut = () => {
    blow.play();
    setBlownOut(true);
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const moved = currentX - startX.current;
    const percentage = Math.min((moved / window.innerWidth) * 100, 100);
    if (percentage > 0) {
      setThumbX(percentage);
    }
  };

  const handleTouchEnd = () => {
    if (thumbX > 80) {
      navigate('/Cheers');
    } else {
      setThumbX(0);
    }
  };

  const handleClickNavigate = () => {
    navigate('/Cheers');
  };

  return (
    <div className="cake-container">
      {/* 🎉 Birthday Text */}
      <div className="birthday-text">
        Wish you many more happy returns of the day Vishnu🎀
      </div>

      {/* 🎂 Cake */}
      <div className="cake-box">
        <div className="cake-image">
          <img
            src={cakeImage}
            alt="Red Velvet Cake"
            style={{ width: '100%', borderRadius: '20px' }}
          />
          {!blownOut && (
            <div className="candle" onClick={handleBlowOut}>
              <div className="flame"></div>
            </div>
          )}
        </div>
      </div>

      {/* 🐼 Panda Images */}
      <div className="panda-container">
        <img src={panda1} alt="Panda Left" className="panda panda-left" />
        <img src={panda2} alt="Panda Right" className="panda panda-right" />
      </div>

      {/* 🌸 Falling Petals */}
      {[...Array(6)].map((_, i) => (
        <div className="petal" key={i}></div>
      ))}

      {/* 🌹 Decorative Flowers */}
      <div className="flower rose"></div>
      <div className="flower tulip"></div>
      <div className="flower rose"></div>
      <div className="flower tulip"></div>

      {/* 🎊 Confetti */}
      {[...Array(6)].map((_, i) => (
        <div className="confetti" key={i}></div>
      ))}

      {/* 👉 Slider to continue */}
      <div className="slider-container">
        <div className="slider-track">
          <div
            className="slider-thumb"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={handleClickNavigate}
            style={{ left: `${thumbX}%` }}
          >
            👉
          </div>
          <span className="slider-text"> Continue for next moment 💫</span>
        </div>
      </div>
    </div>
  );
}
