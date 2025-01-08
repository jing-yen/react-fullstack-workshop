import React, { useState } from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import './App.css';

function App() {
  const [isStrengthsOpen, setStrengthsOpen] = useState(false);
  const [isWeaknessesOpen, setWeaknessesOpen] = useState(false);
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <>
      <div className="header">
      <h1>Tong Jing Yen</h1>
        <p>Year 2 Computer Engineering Student</p>
        {user ? (
          <div>
            <hr/>
            <img src={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnXOOZx8tElZ8KHzzfc6QiGOLbtpAhzndCRjT2g6ddLkoMaj2oF1CUofULkbBeWF3vRd_zNns0yX9H3PUMtwHbSQ"} alt={user.displayName} className="profile-photo" />
            <h2>Welcome, {user.displayName}!</h2>
            <button onClick={handleSignOut}>Sign Out</button>
            <hr/>
          </div>
        ) : (
          <button onClick={signInWithGoogle} className="google-signin">
            Sign in with Google
          </button>
        )}
      </div>

      <br/>
      <section className="portfolio-introduction">
        <h2>Welcome to My Portfolio</h2>
        <p>Explore my skills, experience, and accomplishments. Feel free to check my resume below.</p>
        <a href="https://www.facebook.com" target="_blank" className="resume-link">
          View My Resume
        </a>
      </section>

      <section className="strengths-weaknesses">
        <div className="collapsible-section">
          <button onClick={() => setStrengthsOpen(!isStrengthsOpen)} className="collapsible">
            Strengths
          </button>
          {isStrengthsOpen && (
            <div className="content">
              <ul>
                <li>Strong problem-solving skills</li>
                <li>Proficient in programming languages (C++, Python, JavaScript)</li>
                <li>Excellent communication and teamwork abilities</li>
                <li>Adaptability in diverse environments</li>
              </ul>
            </div>
          )}
        </div>

        <div className="collapsible-section">
          <button onClick={() => setWeaknessesOpen(!isWeaknessesOpen)} className="collapsible">
            Weaknesses
          </button>
          {isWeaknessesOpen && (
            <div className="content">
              <ul>
                <li>Tendency to overanalyze problems</li>
                <li>Occasionally hesitant in decision-making under pressure</li>
                <li>Need to improve time management during high-stress periods</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <footer>
        <p>Made with ❤️ by Tong Jing Yen</p>
      </footer>
    </>
  );
}

export default App;
