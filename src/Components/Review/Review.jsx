import { useEffect, useState, useRef } from 'react';
import './Review.css';

function Review() {

  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="review transition_hide">
        <div className={`google ${animate ? "animate" : ""}`} ref={ref}>
          JK Tours & Travels Google Reviews
        </div>

        <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25631965' frameBorder='0' width='100%' height='1000'></iframe>

      </div>
    </>
  );
}

export default Review;
