import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <span className="logo-text">Portfolio</span>
          </Link>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>

          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 