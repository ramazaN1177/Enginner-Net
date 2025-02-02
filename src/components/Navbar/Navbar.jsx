import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <nav>
        {/* Logo */}
        <div className="logo">
          <h1>Engineer NET</h1>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <img className='nav-img' src="https://www.w3schools.com/w3images/mac.jpg"></img>
        </ul>

        {/* Hamburger Menu */}
        <div className={`hamburger ${isOpen ? "hamburger-active" : ""}`} onClick={toggleNav}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`menubar ${isOpen ? "active" : ""}`}>
        <img className='menubar-img' src="https://www.w3schools.com/w3images/mac.jpg"></img>

        <ul>
          <hr />
          <li><Link to="/">Home</Link></li>
          <hr />
          <li><Link to="/services">Services</Link></li>
          <hr />
          <li><Link to="/blog">Blog</Link></li>
          <hr />
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
