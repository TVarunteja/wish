import React, { useEffect, useState } from "react";
import "./Message.css"; // Import the CSS

const Message = () => {
  const [message, setMessage] = useState("");
  const [typingCompleted, setTypingCompleted] = useState(false);
  const text = "Wishing you a very Happy Birthday, Vishnu 🎉You’ve officially turned 21 time is flying by so fast and I hope this year brings you endless success, wealth, and a life full of good health.May you always find reasons to smile, and continue spreading happiness to everyone Have a fantastic day and an even more amazing year ahead! keep dreaming, and keep achieving everything your heart desires.Always remember, no matter where life takes u, you are capable of creating magic with your love and determination.I know things haven’t been good between us for the past few months. But that doesn’t make any difference to me on this special day ,I still want to make you feel special.I know you have started hating me so much now. I’ve done things that you didn’t like from your point of view, i haven't done anything intentionally.I’ve been hurt by your actions too.I thought I could change the situation, but without support, I can’t do anything. And of course, I can’t force you, right? Anyway, I want to say  that I can never hate you i might get angry on u but it doesn't mean that i don't want u in my life. I will be happy if one day things change and become normal again. Even if it doesn’t happen, it’s okay I respect your decision. Because I believe people don’t always have the same opinion at all times.This time, I’m prepared whether I receive your hate or love, I’ll accept both with a smile. You say that we only fought and that we were never good together. But that’s just your way of seeing things. A coin has two sides  just like that, along with fights, we also had good times. If you always want to look at only one side, I’m helpless. But why not try flipping the coin once? 🙃 Maybe people don’t stay, but memories always do. I will always remember the memories we shared together.I know you might block me on Telegram too after this. Next year, I’ll find a new way to wish you. I hope u like mine and ChatGPT little effort. One Lat time happy birthday sweet heart💖🎀💫☺️".trim();
  // Your message here

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setMessage((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTypingCompleted(true);
      }
    }, 150);
  
    return () => clearInterval(interval);
  }, []);

  // Importing images using require()
  const img1 = require("../images/flower-1.jpg"); // Adjust the path based on your file structure
  const img2 = require("../images/flower-4.jpeg"); // Adjust the path based on your file structure

  return (
    <div className="message-container">
      <div className="message-box">
        <div className="typewriter-message">{message}</div>
        {/* Round images */}
        <img 
          src={img1}  // Using the imported image
          alt="Top Left"
          className="round-image-top-left"
        />
        <img 
          src={img2}  // Using the imported image
          alt="Bottom Right"
          className="round-image-bottom-right"
        />
      </div>
    </div>
  );
};

export default Message;
