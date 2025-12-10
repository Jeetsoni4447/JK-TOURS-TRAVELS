import { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaEnvelope, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./Hero.css";

function Hero() {

  const ref = useRef(null);
  const ref_1 = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [animation, setAnimation] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false);  // reset
          setTimeout(() => setAnimate(true), 10); // restart animation
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimation(false);  // reset
          setTimeout(() => setAnimation(true), 10); // restart animation
        }
      },
      { threshold: 0.5 } // 50% visible
    );

    if (ref_1.current) observer.observe(ref_1.current);

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <div className="Herocontainer transition_hide">
        <div className="Herocontant">
          <div className="Herotitle">
            <p className="jktoursHerotitle">Welcome To <br />Jk Tours & Travels</p>
            <p className="p">
              At JK Tours and Travels, we believe in making your journeys unforgettable. Whether it's a business trip, a family vacation, or a weekend getaway, we are here to take care of all your travel needs with excellence and professionalism.</p>
            <a href="https://wa.me/919904803601" target="_blank" className="booking_btn">Book Now</a>
          </div>
          <div className="img_contant_1"></div>
          <div className="img_contant_2"></div>
          <div className="img_contant_3"></div>
          <div className="btn_contant">
            <a href="https://wa.me/919904803601" target="_blank" ><div className="btn_1"><FaWhatsapp /></div></a>
            <a href="http://www.youtube.com/@JKTOURS-TRAVEL" target="_blank"><div className="btn_2"><FaYoutube /></div></a>
            <a href="https://www.instagram.com/jk_tours_travels_" target="_blank"><div className="btn_3"><FaInstagram /></div></a>
            <a href="mailto:jktourstravels4447@gmail.com" target="_blank"><div className="btn_4"><FaEnvelope /></div></a>
          </div>
        </div>
      </div>
    </>
  )

}

export default Hero;