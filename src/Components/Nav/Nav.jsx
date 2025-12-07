import { Link } from 'react-router';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faContactCard, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGooglePay, faPaypal } from '@fortawesome/free-brands-svg-icons';
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
          For Spacial-Tour Related Enquiry :-
          <a href="tel:+91 8866381429" className="help_text help_no_1"> +91 8866381429 </a>
          <i>|</i>
          <a href="tel:+91 9904803601" className="help_text help_no_2"> +91 9904803601 </a>
        </p>
      </header>

      {/* navbar */}

      <nav className="nav transition_hide">
        <Link to="/" className="navimg" end><img src="./jklogo.WebP" alt="jktours" /></Link>
        <Link to="/packages" className="navbtn" end>PACKAGES</Link>
        <Link to="/flightbooking" className="navbtn" end>Flight Booking</Link>
        <Link to="/Carbooking" className="navbtn" end>Car Booking</Link>
        <Link to="/busbooking" className="navbtn" end>Bus Booking</Link>
        <Link to="/trainbooking" className="navbtn" end>Train Booking</Link>

        <div className="toggle_btn" onClick={toggleMenu}>
          <div className={`container ${menuOpen ? 'change' : ''}`}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <div className={`dropdown_menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <Link to="/packages"><li className="mobile_navbtn">PACKAGE</li></Link>
            <Link to="/flightbooking"><li className="mobile_navbtn">Flight Booking</li></Link>
            <Link to="/Carbooking"><li className="mobile_navbtn">Car Booking</li></Link>
            <Link to="/busbooking"><li className="mobile_navbtn">Bus Booking</li></Link>
            <Link to="/trainbooking"><li className="mobile_navbtn">Train Booking</li></Link>
          </ul>
        </div>
      </nav>

    </>

  );
}

export default Nav;
