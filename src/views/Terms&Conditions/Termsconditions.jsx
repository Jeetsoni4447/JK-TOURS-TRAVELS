import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Review from '../../Components/Review/Review'
import './Termsconditions.css'
import Hero from '../../Components/Hero/Hero';

function Termsconditions() {

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
      <div className="payment">
        <div className="payment_online transition_hide">
          <h2 className="payment_number_title">NUMBER PAYMENT</h2>
          <p className="payment_number">
            <FontAwesomeIcon icon={faWhatsapp} /> +91 9904803601<br />
            <FontAwesomeIcon icon={faPhone} /> +91 8866381429
          </p>
          <h2 className="payment_note_title">NOTE :-</h2>
          <p className="payment_note">
            Dear Customer,<br /> To book a trip, you will have to pay a compulsory advance <br />booking amount. And
            once you have booked the trip,<br /> then you cancel it, your advance booking amount will not be refunded.<br />
            <b className='Qrcodenote'>And One More Information :- </b><br /><br />
            Before scanning the tax code, please provide the information of any one of the numbers given above once.
          </p>
        </div>
        <div className="Qrcode transition_hide">
          <div className='QrcodeTitle'>
            JK TOURS & TRAVELS QR CODE
          </div>
          <img src="./public/JKTOURSQRCODE.WebP" className='QRcode_img' alt="..." />
        </div>
      </div>

      <Review />
    </>
  )
}

export default Termsconditions;
