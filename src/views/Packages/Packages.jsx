import { useEffect, useState, useRef } from 'react';
// import Hero from "Hero/Hero.jsx"
import { FaPhone, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';
import './Packages.css'
import Hero from '../../Components/Hero/Hero';

function Packages() {

  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

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

  const PackageCards = [
    {
      id: 1,
      title: ' DUBAI ',
      image: './img/dubai.webp',
      paragraph_title: '00-Nights / 00-Days',
      paragraph: 'Coming Soon... In Website But Bookings Are Open',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 2,
      title: ' THAILAND ',
      image: './img/thailand.webp',
      paragraph_title: '00-Nights / 00-Days',
      paragraph: 'Coming Soon... In Website But Bookings Are Open',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 3,
      title: ' BALI ',
      image: './img/bali.webp',
      paragraph_title: '00-Nights / 00-Days',
      paragraph: 'Coming Soon... In Website But Bookings Are Open',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 4,
      title: ' ANDAMAN NICOBAR ',
      image: './img/andamanNicobar.webp',
      paragraph_title: '00-Nights / 00-Days',
      paragraph: 'Coming Soon... In Website But Bookings Are Open',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 5,
      title: ' VIETNAM ',
      image: './img/vietnam.webp',
      paragraph_title: '00-Nights / 00-Days',
      paragraph: 'Coming Soon... In Website But Bookings Are Open',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 6,
      title: ' LEH-LADAKH ',
      image: './img/ladakh.webp',
      paragraph_title: '10-Nights / 11-Days',
      paragraph: '01 Night Manali 01 Night Jispa 02 Night Leh 01 Night Nubra 01 Night Leh 01 Night Pangong Lake 01 Night Leh 01  Night Kargil 01 Night Srinagar',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 7,
      title: ' PURI ODISHA ',
      image: './img/puri.webp',
      paragraph_title: '06-Nights / 07-Days',
      paragraph: 'Jagannath Puri Tample, Puri Sea Beach, Unesco Heritage Konark Sun Temple, 1100 Year Old Lingraj Temple, Chilika Lake, Dholigirir a Shanti Stupa More...',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 8,
      title: ' CHARDHAM YATRA ',
      image: './img/chardhamyatra.webp',
      paragraph_title: '10-Nights / 11-Days',
      paragraph: 'Delhi - Haridwar(1-Night) - Barkot(2-Night) - Uttarkashi(2-Night) - Sitapur(2-Night) - Badrinath(1-Night) - Pipakoti/Joshimath(1-Night) More...',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 9,
      title: ' HIMACHAL ',
      image: './img/manali.webp',
      paragraph_title: '9-Nights / 10-Days',
      paragraph: '02 Nights Shimla 03 Night Manali 01 Night Dharamshala 02 Night Dalhousie 01 Night Amritsar',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 10,
      title: ' RAJASTHAN ',
      image: './img/rajasthan.webp',
      paragraph_title: '7-Nights / 8-Days',
      paragraph: '02 Nights Jaipur 01 Night Pushkar 01 Night Jodhpur 01 Night Mountabu 02 Night Udaipur',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 11,
      title: ' UTTARAKHAND ',
      image: './img/mussoorie.webp',
      paragraph_title: '7-Nights / 8-Days',
      paragraph: 'Delhi - Nainital-(2 Nights) Jim Corbett-(2 Nights) Haridwar(1 Nights) Mussoorie(2 Nights) - Delhi',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 12,
      title: ' GOA ',
      image: './img/goa.webp',
      paragraph_title: '3-Nights / 4-Days',
      paragraph: 'Goa - North Goa - South Goa - Goa',
      paragraph_note: 'For Booking Call Or Whatsapp',
    }
  ]

  return (
    <>
      <Hero />

      <div className="package_title transition_hide">
        <div className={`package_title_1 ${animate ? "animate" : ""} transition_hide`} ref={ref}>
          PACKAGES
        </div>
      </div>

      <div className="main_package">
        <div className="main_package_frame transition_hide">
          {PackageCards.map((pc) => (
            <div key={pc.id} className="package_card transition_hide">
              <div className="card_img">
                <img src={`${pc.image}`} className="card_img_contant" alt="..." />
              </div>
              <div className="card_contant">
                <div className="card_heading transition_hide">
                  {pc.title}
                </div>
                <div className="card_note">
                  <p className="card_paragraph_title transition_hide">
                    {pc.paragraph_title}
                  </p>
                  <p className="card_paregraph transition_hide">
                    {pc.paragraph}<br /><br />
                    {pc.paragraph_note}
                  </p>
                  <div className="card_btn_component">
                    <a href="https://wa.me/919904803601" className="WhatsAppbtn" >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <FaWhatsapp className="whatsapp" />WhatsApp
                    </a>
                    <a href="tel:+918866381429" className="Contactbtn" >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <FaPhone />Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="end_note transition_hide">
        <h1 className="end_note_title">NOTE :-&nbsp;</h1>
        <p>Contact This Number&nbsp;:- 9904803601 For More... domestic & international Packages And Custom Packages.</p>
      </div>
    </>
  )
}

export default Packages;
