import { useEffect, useState, useRef } from 'react';
import './Review.css';
function Review() {

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

  return (
    <>
      <div className="review transition_hide">
        <div className={`google ${animate ? "animate" : ""}`} ref={ref}>
          Jk Tours & Travels Google Review
        </div>
        <iframe className="review_comments" src='https://widgets.sociablekit.com/google-reviews/iframe/25628054' frameBorder='0' width='100%' height='1000'></iframe>
      </div>
    </>
  )
}

export default Review;