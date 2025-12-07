import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faGlobe, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero'
import Review from '../../Components/Review/Review'
import './Contact.css'

function Contact() {

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
      <Hero />

      <div className="contact transition_hide">
        <div className="contact_header">
          <h2>Address</h2>
          <a href="https://maps.app.goo.gl/WnkS3Rr1t6QWs9C18" target="_blank" className="contact_text">
            <FontAwesomeIcon icon={faBuilding} />&nbsp;Head Office:<br />
            8, DIWAN CHOWK, DIWAN COMPLEX, JUNAGADH, GUJARAT (INDIA).
          </a>
          <h2>Contact</h2>
          <a href="tel:+91 9904803601" className="contact_text">
            <FontAwesomeIcon icon={faWhatsapp} />&nbsp;+91 9904803601
          </a><br />
          <a href="tel:+91 8866381429" className="contact_text"><FontAwesomeIcon icon={faPhone} />&nbsp;+91 8866381429
          </a><br />
          <a href="mailto:jktourstravels4447@gmail.com" className="contact_text">
            <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;JkTours&Travels4447@gmail.com
          </a><br />
          <a href="https://www.jktours-travels.com/" className="contact_text"><FontAwesomeIcon icon={faGlobe} />&nbsp;WWW.JKTOURS-TRAVELS.COM
          </a><br />
        </div>

        <div className="contact_map transition_hide">
          <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927.914309518952!2d70.46469936958857!3d21.521141698765895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5df7c5b4fe7df9%3A0x59a0a85dcbdef972!2sJK%20TOURS%20%26%20TRAVELS!5e0!3m2!1sen!2sin!4v1745302489547!5m2!1sen!2sin" frameBorder="0"></iframe>
        </div>
      </div >

      <Review />
    </>
  )
}

export default Contact;