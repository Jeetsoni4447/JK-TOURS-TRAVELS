import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import Slider from './Slider.jsx';
import './Package.css';

// Single reusable heading component
function Heading({ animate, innerRef }) {
  return (
    <h2 className={`heading ${animate ? 'animate' : ''}`} ref={innerRef}>
      PACKAGES
    </h2>
  );
}

function Package() {
  // 3 different refs
  const refLaptop = useRef(null);
  const refTablet = useRef(null);
  const refMobile = useRef(null);

  // 3 different animation states
  const [animateLaptop, setAnimateLaptop] = useState(false);
  const [animateTablet, setAnimateTablet] = useState(false);
  const [animateMobile, setAnimateMobile] = useState(false);

  // Function for intersection animation
  const createObserver = (ref, setAnimate) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false);
          setTimeout(() => setAnimate(true), 10);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return observer;
  };

  // Laptop observer
  useEffect(() => {
    const observer = createObserver(refLaptop, setAnimateLaptop);
    return () => observer.disconnect();
  }, []);

  // Tablet observer
  useEffect(() => {
    const observer = createObserver(refTablet, setAnimateTablet);
    return () => observer.disconnect();
  }, []);

  // Mobile observer
  useEffect(() => {
    const observer = createObserver(refMobile, setAnimateMobile);
    return () => observer.disconnect();
  }, []);

  // Fade-in animations for cards
  useEffect(() => {
    const boxes = document.querySelectorAll('.transition_hide');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('transition_show', entry.isIntersecting);
      });
    });

    boxes.forEach((box) => observer.observe(box));
    return () => boxes.forEach((box) => observer.unobserve(box));
  }, []);

  const package_card_1 = [
    {
      title: ' LEH-LADAKH ',
      image: './public/Leh-Ladakh.webp',
      paragraph_title: '10-Nights / 11-Days',
      paragraph:
        '01 Night Manali 01 Night Jispa 02 Night Leh 01 Night Nubra 01 Night Leh 01 Night Pangong Lake 01 Night Leh 01 Night Kargil 01 Night Srinagar',
    },
    {
      title: ' HIMACHAL ',
      image: './public/Manali.webp',
      paragraph_title: '9-Nights / 10-Days',
      paragraph:
        '02 Nights Shimla 03 Night Manali 01 Night Dharamshala 02 Night Dalhousie 01 Night Amritsar',
    },
    {
      title: ' UTTARAKHAND ',
      image: './public/Mussoorie.webp',
      paragraph_title: '7-Nights / 8-Days',
      paragraph:
        'Delhi - Nainital-(2 Nights) Jim Corbett-(2 Nights) Haridwar(1 Nights) Mussoorie(2 Nights) - Delhi',
    },
  ];

  const package_card_2 = [
    {
      id: 'pc1',
      title: ' LEH-LADAKH ',
      paragraph_title: '10-Nights / 11-Days',
      paragraph:
        '01 Night Manali 01 Night Jispa 02 Night Leh 01 Night Nubra 01 Night Leh 01 Night Pangong Lake 01 Night Leh 01  Night Kargil 01 Night Srinagar',
    },
    {
      id: 'pc2',
      title: ' HIMACHAL ',
      paragraph_title: '9-Nights / 10-Days',
      paragraph:
        '02 Nights Shimla 03 Night Manali 01 Night Dharamshala 02 Night Dalhousie 01 Night Amritsar',
    },
    {
      id: 'pc3',
      title: ' UTTARAKHAND ',
      paragraph_title: '7-Nights / 8-Days',
      paragraph:
        'Delhi - Nainital-(2 Nights) Jim Corbett-(2 Nights) Haridwar(1 Nights) Mussoorie(2 Nights) - Delhi',
    },
  ];

  return (
    <>
      {/* LAPTOP */}
      <div className="main_package_laptop transition_hide">
        <Heading animate={animateLaptop} innerRef={refLaptop} />
        <div className="main_package_cards">
          <Slider />
        </div>
      </div>

      {/* TABLET */}
      <div className="main_package_tablet transition_hide">
        <Heading animate={animateTablet} innerRef={refTablet} />

        <div
          id="carouselExampleControlsNoTouching"
          className="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div className="main_package_cards">
            <div className="carousel-inner">
              {package_card_1.map((pc, index) => (
                <div
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  key={index}
                >
                  <div className="card text-color">
                    <img src={pc.image} className="card-img" alt="" />
                    <div className="card-img-overlay">
                      <h5 className="card-title">{pc.title}</h5>
                      <p className="card-text">{pc.paragraph_title}</p>
                      <p className="card-text">{pc.paragraph}</p>
                      <Link to="/packages" className="text-btn" end>
                        View All Packages
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="main_package_mobile transition_hide">
        <Heading animate={animateMobile} innerRef={refMobile} />

        <div className="main_package_cards">
          {package_card_2.map((pc) => (
            <div key={pc.id} className="card text-center">
              <div className="card-header">{pc.title}</div>
              <div className="card-body">
                <p>{pc.paragraph_title}</p>
                <p>{pc.paragraph}</p>
              </div>
              <div className="card-footer">
                <Link to="/packages" className="text-btn" end>
                  View All Packages
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Package;
