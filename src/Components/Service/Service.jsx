import { useEffect, useState, useRef } from 'react';
import "./Service.css";

function Service() {

    const ref = useRef(null);
    const ref_1 = useRef(null);
    const [animate, setAnimate] = useState(false);
    const [animation, setAnimation] = useState(false);

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
            <div className="maincontainer_1 transition_hide">
                <div className={`why ${animate ? "animate" : ""} transition_hide`} ref={ref}>
                    Why Choose Us ?
                </div>
                <div className="block_compo">
                    <div className="block transition_hide">
                        <img src="./img/reliability.webp" alt="jktours" className="block_img_1" />
                        <p className='block_p_1'>
                            Reliability: With years of experience in the industry, we've built a reputation for reliability and trustworthiness. Count on us to deliver on our promises, every time.
                        </p>
                    </div>
                    <div className="block transition_hide">
                        <img src="./img/professionalism.webp" alt="jktours" className="block_img_2" />
                        <p className='block_p_2'>
                            Professionalism: Our team of trained drivers and dedicated staff ensures a seamless and professional experience from booking to drop-off.
                        </p>
                    </div>
                    <div className="block transition_hide">
                        <img src="./img/affordability.webp" alt="jktours" className="block_img_3" />
                        <p className='block_p_3'>
                            Affordability: Enjoy competitive pricing without compromising on quality. We believe in providing value for your money, making luxury travel accessible to all.
                        </p>
                    </div>
                </div>
            </div>
            <div className="maincontainer_2 transition_hide">
                <div className={`our ${animation ? "animation" : ""} transition_hide`} ref={ref_1}>
                    Our Services
                </div>
                <div className="block_comp_1">
                    <div className="b_1 transition_hide">
                        <img src="./img/car.webp" alt="jktours" className="block_img_4" />
                        <p><b>Vehicle Booking</b>: Rent cars, bikes, and vans easily for any occasion. Choose from a wide range of vehicles to suit your needs. All vehicles are well-maintained and safe to drive. Book your ride quickly through our online platform. Affordable rates for every budget and trip. Doorstep pickup and drop-off available. Perfect solution for travel, events, or temporary transport. 🚗✨ </p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./img/round-trip.webp" alt="jktours" className="block_img_5" />
                        <p><b>Round Trips</b>: JK Tours & Travels provides convenient and reliable round-trip booking services for both local and outstation travel. With comfortable vehicles, experienced drivers, and transparent pricing, we ensure smooth pick-up, safe journeys, and timely returns—making your round-trip travel easy, comfortable, and stress-free. 🚗✨ </p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./img/one-way.webp" alt="jktours" className="block_img_6" />
                        <p><b>One Way</b>: JK Tours & Travels offers easy and reliable one-way travel services designed for maximum convenience. Whether you’re planning a short trip  journey, we help you book the best one-way options at competitive prices. With quick processing, flexible choices, and trusted support, we ensure a smooth and comfortable travel experience every time. 🚖 </p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./img/flight_ticket.webp" alt="jktours" className="block_img_7" />
                        <p><b>Flight Booking</b>: JK Tours & Travels offers dependable flight booking services for both domestic and international travel. We help you find the best flight options, schedules, and fares to suit your budget and travel plans. With fast bookings, trusted airline partnerships, and dedicated customer support, we ensure a smooth and comfortable flying experience from takeoff to landing. 🌍✈️ </p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./img/train_ticket.webp" alt="jktours" className="block_img_8" />
                        <p><b>Train Booking</b>: JK Tours & Travels provides reliable train ticket booking services for hassle-free journeys across India. We assist you in finding the best train options, seat availability, and convenient schedules to match your travel needs. With quick bookings, accurate information, and dedicated customer support, we make your train travel comfortable and worry-free from start to finish. 🚂🚉 </p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./img/bus.webp" alt="jktours" className="block_img_9" />
                        <p><b>Bus Booking</b>: JK Tours & Travels provides reliable bus booking services for comfortable and affordable journeys. We help you choose from a wide range of routes and operators to suit your travel needs. With easy bookings, secure payments, and dependable support, we ensure a smooth and stress-free bus travel experience from start to finish. 🚍🚌 </p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./img/packages.webp" alt="jktours" className="block_img_10" />
                        <p><b>Packages Booking</b>: JK Tours & Travels offers carefully crafted travel packages designed to suit every budget and travel style. From relaxing family holidays and romantic getaways to group tours and custom itineraries, we handle everything—from planning to bookings—so you enjoy a seamless, memorable, and worry-free travel experience. 🌍✈️ </p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./img/travel_passport.webp" alt="jktours" className="block_img_11" />
                        <p><b>Travel-Passport</b>: JK Tours & Travels offers reliable and hassle-free passport services to make your travel planning smooth and stress-free. From new passport applications and renewals to corrections and Tatkal processing, our team provides complete guidance and accurate documentation support, helping you save time and avoid delays—so you can focus on your journey with confidence. ✈️📘 </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Service;