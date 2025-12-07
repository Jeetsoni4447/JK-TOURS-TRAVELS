import { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Review from "/src/Components/Review/Review.jsx";
import Package from "/src/Components/Package/Package.jsx";
import "./Trainbooking.css";

function Trainbooking() {

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
            <div className="Traincontainer transition_hide">
                <div className="Traincontant">
                    <div className="Traintitle">
                        <p className="p">
                            🚆 Planning a train trip? JK Tours & Travels makes ticket booking quick, easy, and hassle-free. Smooth service and stress-free travel—book your journey today! 🌟✨
                        </p>
                        <a href="https://wa.me/919904803601" target="_blank" className="booking_btn"><div>Book Now Trains</div></a>
                    </div>
                </div>
                <div className="btn_contant">
                    <a href="https://wa.me/919904803601" target="_blank" ><div className="btn_1"><FontAwesomeIcon icon={faWhatsapp} /></div></a>
                    <a href="http://www.youtube.com/@JKTOURS-TRAVEL" target="_blank"><div className="btn_2"><FontAwesomeIcon icon={faYoutube} /></div></a>
                    <a href="https://www.instagram.com/jk_tours_travels_/?igsh=amZpaXpxY2V0ZWNr&utm_source=qr#" target="_blank"><div className="btn_3"><FontAwesomeIcon icon={faInstagram} /></div></a>
                    <a href="mailto:jktourstravels4447@gmail.com" target="_blank"><div className="btn_4"><FontAwesomeIcon icon={faEnvelope} /></div></a>
                </div>
            </div>

            <Package />
            <Review />
        </>
    )

}

export default Trainbooking;