import React, { useEffect } from 'react';
import { Link } from 'react-router';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css'

const JKToursCarousel = () => {
    useEffect(() => {
        new Swiper('.mySwiper', {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                480: { slidesPerView: 1 }
            }
        });
    }, []);

    const slides = [
        {
            title: ' LEH-LADAKH ',
            image: './public/Leh-Ladakh.webp',
            description_tite: '10-Nights / 11-Days',
            description: '01 Night Manali 01 Night Jispa 02 Night Leh 01 Night Nubra 01 Night Leh 01 Night Pangong Lake 01 Night Leh 01  Night Kargil 01 Night Srinagar',
        },
        {
            title: ' HIMACHAL ',
            image: './public/Manali.WebP',
            description_tite: '09-Nights / 10-Days',
            description: '02 Nights Shimla 03 Night Manali 01 Night Dharamshala 02 Night Dalhousie 01 Night Amritsar',
        },
        {
            title: ' UTTARAKHAND ',
            image: './public/Mussoorie.WebP',
            description_tite: '07-Nights / 08-Days',
            description: 'Delhi - Nainital-(2 Nights) Jim Corbett-(2 Nights) Haridwar(1 Nights) Mussoorie(2 Nights) - Delhi',
        }
    ];

    return (
        <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                {slides.concat(slides).map((slide, index) => (
                    <div className="swiper-slide" key={index}>
                        <div className="city-card">
                            <div className="card-image">
                                <img src={`${slide.image}`} alt="JK Tours" />
                                <div className="overlay-text">
                                    WELCOME TO JK TOURS PACKAGE'S
                                </div>
                            </div>
                            <div className="content">
                                <h3>{slide.title}</h3>
                                <p>{slide.description_tite}</p>
                                <p>{slide.description}</p>
                            </div>
                            <div className="textbtn">
                                <Link to="/packages"><button alt="View All Packages">
                                    <i>V</i>
                                    <i>i</i>
                                    <i>e</i>
                                    <i>w</i>
                                    <i>&nbsp;</i>
                                    <i>A</i>
                                    <i>l</i>
                                    <i>l</i>
                                    <i>&nbsp;</i>
                                    <i>P</i>
                                    <i>a</i>
                                    <i>c</i>
                                    <i>k</i>
                                    <i>a</i>
                                    <i>g</i>
                                    <i>e</i>
                                    <i>s</i>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

export default JKToursCarousel;