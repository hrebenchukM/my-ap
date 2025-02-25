import React, { useEffect, useState } from 'react';
import { FaBirthdayCake, FaGamepad, FaLaptopCode, FaGift } from "react-icons/fa";
import './App.css';

function App() {
  const [text, setText] = useState(""); 
  const [showConfetti, setShowConfetti] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    const message = "Haappy Birthday!";
    let i = 0;
    setText(""); 
    const interval = setInterval(() => {
      setText((prev) => prev + message.charAt(i)); 
      i++;
    }, 100);

    return () => clearInterval(interval); 
  }, []);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setGlitchEffect(true);
    setTimeout(() => {
      setShowConfetti(false);
      setGlitchEffect(false);
    }, 2000);
  };

  return (
    <div className="container">
      <div className="matrix-background">
        {Array.from({ length: 10 }).map((_, idx) => {
          const position = idx * 10 + '%'; 
          const delay = idx * 0.5 + 's';         
          return (
            <div
              key={idx}
              className="matrix-column"
              style={{ left: position, animationDelay: delay }}
            >
              {"01".repeat(50)}
            </div>
          );
        })}
      </div>

      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-title">@maryprog</div>
        </div>

        <div className="terminal-content">
          <h1 className={'title ' + (glitchEffect ? 'glitch' : '')}>
            <span className="typewriter">{text}</span>
          </h1>
          
          <div className="icons">
      <FaBirthdayCake className="icon" />
      <FaGamepad className="icon" />
      <FaLaptopCode className="icon" />
      <FaGift className="icon" />
    </div>


          <pre className="code-snippet">
            <code>
              {`function wishHappyBirthday(name) {
  const year = new Date().getFullYear();

  const wishes = {
    message: "Happy Birthday Viktor " + 2025 + "!",
    bugs: 0,
    features: Infinity,
    coffee: "∞",
    success: true,
    cake: "🎂".repeat(20),
    party: "🎉".repeat(20)
  };

  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(wishes);
    }, 1000);
  });
}
`}
            </code>
          </pre>

          <button className="compile-button" onClick={triggerConfetti}>
            Compile Birthday Wishes
          
          </button>

          

          <div className="footer">
            <span>❤️</span>
            <span>Compiled with nothing and coffee</span>
            <span>❤️</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
