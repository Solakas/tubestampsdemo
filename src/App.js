import { useState } from 'react';
import './App.css';
import confetti from 'canvas-confetti';
import { app, analytics } from './firebase';

function App() {
  const [showPumpkin, setShowPumpkin] = useState(false);

  const handleTreat = () => {
    setShowPumpkin(false);
    
    // Launch confetti!
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Spooky Halloween colors: orange, purple, black, green
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FF6B35', '#6A0572', '#2D1E2F', '#00FF00', '#FFD23F']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FF6B35', '#6A0572', '#2D1E2F', '#00FF00', '#FFD23F']
      });
    }, 250);
  };

  const handleTrick = () => {
    setShowPumpkin(true);
    
    // Add a scary shake effect
    document.querySelector('.App').classList.add('shake');
    setTimeout(() => {
      document.querySelector('.App').classList.remove('shake');
    }, 500);
  };

  return (
    <div className="App">
      <div className="halloween-bg">
        {showPumpkin ? (
          <div className="pumpkin-view">
            <div className="evil-pumpkin">🎃</div>
            <h1 className="spooky-text">BOO! 👻</h1>
            <p className="trick-message">
              You chose... poorly! Muhahahaha! 😈
            </p>
            <button className="back-button" onClick={() => setShowPumpkin(false)}>
              Take Me Back! 🏃‍♂️
            </button>
          </div>
        ) : (
          <div className="landing-page">
            <div className="floating-ghosts">
              <span className="ghost">👻</span>
              <span className="ghost">👻</span>
              <span className="ghost">👻</span>
            </div>
            
            <h1 className="main-title">
              🎃 Welcome to BOO-beStamps! 👻
            </h1>
            
            <div className="subtitle">
              <p className="spooky-tagline">
                My First AI Project... What Could Go Wrong? 🤖
              </p>
              <p className="description">
                Built with the help of AI overlords on this spooky Halloween night! 
                Will it work? Will it break? Nobody knows! That's the spirit! 👻
              </p>
            </div>

            <div className="warning-box">
              ⚠️ Warning: This project may contain bugs, dad jokes, and excessive enthusiasm ⚠️
            </div>

            <div className="cta-section">
              <h2 className="cta-title">Choose Your Destiny... If You Dare! 💀</h2>
              <div className="button-container">
                <button className="cta-button treat-button" onClick={handleTreat}>
                  🍬 TREAT 🍬
                  <span className="button-hint">Get something sweet!</span>
                </button>
                <button className="cta-button trick-button" onClick={handleTrick}>
                  😈 TRICK 😈
                  <span className="button-hint">Feeling brave?</span>
                </button>
              </div>
            </div>

            <div className="footer">
              <p>Made with 💀 by a brave soul learning to code with AI</p>
              <p className="small-text">
                If this works, thank the AI. If it breaks, blame the human. 🎃
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
