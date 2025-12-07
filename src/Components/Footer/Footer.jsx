import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { Link } from "react-router";

function Footer() {

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

  return (
    <>
      <footer className="footer transition_hide">
        <div className="footerimg">
          <img className="jklogo" src="./public/JKLOGO.jpeg" alt="JKLOGO" />
        </div>
        <div className="footerl_link">
          <div className="footercontent">
            <div className="footercontact">
              <h1 className="text_heading"><b>CONTACT US</b></h1>
              <a href="https://maps.app.goo.gl/WnkS3Rr1t6QWs9C18" target="_blank" className="text">
                <FontAwesomeIcon icon={faBuilding} />&nbsp;Head Office:<br />
                8, DIWAN CHOWK, DIWAN COMPLEX, JUNAGADH, GUJARAT (INDIA).
              </a>
              <a className="text">
                <li></li>
              </a>
              <li><a href="tel:+91 9904803601" className="text"><FontAwesomeIcon icon={faPhone} />&nbsp;+91 9904803601</a>,
                <a href="tel:+91 8866381429" className="text">+91 8866381429</a></li>
              <a href="mailto:jktourstravels4447@gmail.com" className="text">
                <li><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;JkTours&Travels4447@gmail.com</li>
              </a>
            </div>
            <div className="footertext">
              <h1 className="text_heading"><b>QUICK LINKS</b></h1>
              <Link to="/" className="text" end>
                Home
              </Link><br /><br />
              <Link to="/About" className="text" end>
                About Us
              </Link><br /><br />
              <Link to="/contact" className="text" end>
                Contact Us
              </Link><br /><br />
              <Link to="/Termsconditions" className="text" end>
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="footermap">
            <h1 className="map_heading"><b>MAP</b></h1>
            <iframe id="map_1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927.914309518952!2d70.46469936958857!3d21.521141698765895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5df7c5b4fe7df9%3A0x59a0a85dcbdef972!2sJK%20TOURS%20%26%20TRAVELS!5e0!3m2!1sen!2sin!4v1745302489547!5m2!1sen!2sin" frameBorder="0"></iframe>
          </div>
        </div>
      </footer>
      <footer className="footer_info transition_hide">
        <div className='footer_info_contant'>&copy;&nbsp;JK TOURS & TRAVELS All rights reserved.</div>
        <div className='footer_contact'>DEVELOPED BY &nbsp;<a href="https://wa.me/919904803601" rel="me" aria-label="jk_tours&travels WhatsApp Link" target="_blank"
          className="footer_info_btn">CODECRAFTER</a></div>
      </footer>
    </>
  )
}

export default Footer;