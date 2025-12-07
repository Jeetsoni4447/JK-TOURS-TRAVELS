import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Package from '../../Components/Package/Package'
import Review from '../../Components/Review/Review'
import './Forbooking.css'
import Hero from '../../Components/Hero/Hero';

function Forbooking() {

  useEffect(() => {
    const hiddenBoxes = document.querySelectorAll('.transition_hide');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('transition_show_forbooking');
        } else {
          entry.target.classList.remove('transition_show_forbooking');
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
      <div className="forbooking transition_hide">
        <div className="forbooking_note">
          <h1 className="forbooking_note_heading">NOTE :-&nbsp;</h1>
          <p>
            Dear Customer,<br /> To book a trip, you will have to pay a compulsory advance <br />booking amount. And
            once you have booked the trip,<br /> then you cancel it, your advance booking amount will not be refunded.
          </p>
          <h2 className="payment_booking_heading">PAYMENT FOR BOOKING :-&nbsp;</h2>
          <p>
            <FontAwesomeIcon icon={faWhatsapp} /> +91&nbsp;9904803601<br />
            <FontAwesomeIcon icon={faPhone} /> +91&nbsp;8866381429<br />
            Contact This Number +91&nbsp;9904803601 For More Payment Method
          </p>
        </div>
      </div>
      <Package />
      <Review />
    </>
  )
}

export default Forbooking;