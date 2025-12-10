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
                        <img src="./reliability.webp" alt="jktours" className="block_img_1" />
                        <p className='block_p_1'>
                            Reliability: With years of experience in the industry, we've built a reputation for reliability and trustworthiness. Count on us to deliver on our promises, every time.
                        </p>
                    </div>
                    <div className="block transition_hide">
                        <img src="./professionalism.webp" alt="jktours" className="block_img_2" />
                        <p className='block_p_2'>
                            Professionalism: Our team of trained drivers and dedicated staff ensures a seamless and professional experience from booking to drop-off.
                        </p>
                    </div>
                    <div className="block transition_hide">
                        <img src="./affordability.webp" alt="jktours" className="block_img_3" />
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
                        <img src="./car.webp" alt="jktours" className="block_img_4" />
                        <p><b>Vehicle Booking</b>: Rent cars, bikes, and vans easily for any occasion. Choose from a wide range of vehicles to suit your needs. All vehicles are well-maintained and safe to drive. Book your ride quickly through our online platform. Affordable rates for every budget and trip. Doorstep pickup and drop-off available. Perfect solution for travel, events, or temporary transport.</p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./round-trip.webp" alt="jktours" className="block_img_5" />
                        <p><b>Round Trips</b>: Pick up from your location and drop off at the same place. Flexible timing to fit your schedule. Choose from cars, SUVs, or luxury vehicles. Enjoy comfortable and safe journeys. Professional drivers ensure a smooth ride. Affordable round-trip packages for every budget. Perfect for airport transfers, city tours, or day trips. Stress-free travel without worrying about return logistics.</p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./one-way.webp" alt="jktours" className="block_img_6" />
                        <p><b>One Way</b>: Enjoy the freedom of One-Way Trips with our rental service. Choose cars for your trip. Flexible rental durations to suit your schedule. All vehicles are clean, safe, and regularly maintained.Transparent pricing with no hidden charges. Travel comfortably and conveniently with our one-way rentals.</p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./flight_ticket.webp" alt="jktours" className="block_img_7" />
                        <p><b>Flight Booking</b>: Compare prices from multiple airlines to get the best deal. Flexible travel options flights. Easy online booking with instant confirmation. Choose your class for a comfortable journey. Get exclusive discounts  flights. Secure and hassle-free payment options available. Manage your bookings anytime, anywhere. Perfect for business trips, vacations.  Perfect for business trips, vacations, or spontaneous getaways.</p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./train_ticket.webp" alt="jktours" className="block_img_8" />
                        <p><b>Train Booking</b>: Check train schedules and seat availability in real-time. Choose from multiple classes: Sleeper, AC, and First Class. Easy and convenient booking from anywhere, anytime. Get instant confirmation via whatsapp chat. Flexible cancellation and rescheduling options available. Hassle-free travel planning for a smooth journey.</p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./bus.webp" alt="jktours" className="block_img_9" />
                        <p><b>Bus Booking</b>: Choose from a wide range of buses for any route. Enjoy comfortable and safe journeys every time. Flexible booking options for one-way or round trips. Affordable fares to suit every budget. Get instant booking confirmation via Whatsapp chat. Reliable service with on-time departures. Convenient boarding points across the city. Travel stress-free with our hassle-free bus booking service.</p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./packages.webp" alt="jktours" className="block_img_10" />
                        <p><b>Packages Booking</b>: Explore our flexible vehicle rental packages designed for you. Enjoy affordable rates with no hidden charges. Pick from a wide range of cars, vans, flightticket & trainticket. Packages are tailored for travel, events, or business trips. Safe and well-maintained vehicles for a smooth journey. Also custome Packages & domestic & international packages are available. Book now and enjoy stress-free, flexible transportation solutions. </p>
                    </div>
                    <div className="b_1 transition_hide">
                        <img src="./travelling_visa.webp" alt="jktours" className="block_img_11" />
                        <p><b>Travelling-Visa</b>: Our Travelling-Visa Service provides fast and reliable visa assistance for all major destinations. We guide customers through every step of the application process. Document verification and form-filling support ensure error-free submissions. Dedicated experts handle appointment scheduling preparation. Custom travel-visa solutions are available for tourism, business, study, and work. Our team stays updated with the latest embassy rules and immigration policies. Express and priority visa processing options are also available. Customers receive end-to-end support until visa approval. We ensure a smooth, stress-free visa experience from start to finish.</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Service;