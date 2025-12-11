import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { FaPlane, FaCar, FaBus, FaTrain, FaGlobe, FaHome, FaFileContract, FaUser, FaInfo } from "react-icons/fa";
import './Nav.css';

function Nav() {

  useEffect(() => {
    const hiddenBoxes = document.querySelectorAll('.transition_hide');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('transition_show');
        } else {
          entry.target.classList.remove('transition_show');
        }
      });
    });

    hiddenBoxes.forEach((box) => observer.observe(box));

    return () => {
      hiddenBoxes.forEach((box) => observer.unobserve(box));
    };

  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* header */}

      <header className="header_line transition_hide">
        <p className="help">
          For Special-Tour Related Enquiry :-
          <a href="tel:+91 8866381429"> +91 8866381429 </a>
          <i>|</i>
          <a href="tel:+91 9904803601"> +91 9904803601 </a>
        </p>
      </header>

      {/* navbar */}

      <nav className="nav transition_hide">
        <NavLink to="/" className="navimg"><img src="./public/img/jklogo.webp" alt="jktours" /></NavLink>

        <NavLink to="/packages" className={({ isActive }) => isActive ? "navbtn active" : "navbtn"}>PACKAGES</NavLink>
        <NavLink to="/flightbooking" className={({ isActive }) => isActive ? "navbtn active" : "navbtn"}>Flight Booking</NavLink>
        <NavLink to="/Carbooking" className={({ isActive }) => isActive ? "navbtn active" : "navbtn"}>Car Booking</NavLink>
        <NavLink to="/busbooking" className={({ isActive }) => isActive ? "navbtn active" : "navbtn"}>Bus Booking</NavLink>
        <NavLink to="/trainbooking" className={({ isActive }) => isActive ? "navbtn active" : "navbtn"}>Train Booking</NavLink>

        <div className="toggle_btn" onClick={toggleMenu}>
          <div className={`container ${menuOpen ? 'change' : ''}`}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </nav>

      {/* Sidebar – Updated UI */}

      <div className={`left_sidebar ${menuOpen ? 'open' : ''}`}>
        <h2>Menu</h2>

        <NavLink to="/" className={({ isActive }) => isActive ? "side_link active" : "side_link"}>
          <FaHome /> Home
        </NavLink>
        <NavLink to="/packages" className={({ isActive }) => isActive ? "side_link active" : "side_link"}>
          <FaGlobe /> Package
        </NavLink>

        <NavLink to="/flightbooking" className={({ isActive }) => isActive ? "side_link active" : "side_link"}>
          <FaPlane /> Flight Booking
        </NavLink>

        <NavLink to="/Carbooking" className={({ isActive }) => isActive ? "side_link active" : "side_link"}>
          <FaCar /> Car Booking
        </NavLink>

        <NavLink to="/busbooking" className={({ isActive }) => isActive ? "side_link active" : "side_link"}>
          <FaBus /> Bus Booking
        </NavLink>

        <NavLink to="/trainbooking" className={({ isActive }) => isActive ? "side_link active" : "side_link"}>
          <FaTrain /> Train Booking
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "side_link active" : "side_link"}>
          <FaInfo /> About Us
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "side_link active" : "side_link"}>
          <FaUser /> Contact Us
        </NavLink>

        <NavLink to="/termsconditions" className={({ isActive }) => isActive ? "side_link active" : "side_link"}>
          <FaFileContract /> Terms & Conditions
        </NavLink>
      </div>
    </>

  );
}

export default Nav;