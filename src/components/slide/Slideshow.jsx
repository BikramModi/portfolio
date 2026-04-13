import React, { useState } from 'react';
import './Slideshow.css'; // Importing the CSS file for styles

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n - 1) % 3 + 1);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="slideshow-container">
      {/* Slide 1 */}
      <div className={`mySlides fade ${slideIndex === 1 ? 'active' : ''}`}>
        <div className="numbertext">1 / 3</div>
        <img src="img_nature_wide.jpg" alt="Nature" style={{ width: '100%' }} />
        <div className="text">Caption Text</div>
      </div>

      {/* Slide 2 */}
      <div className={`mySlides fade ${slideIndex === 2 ? 'active' : ''}`}>
        <div className="numbertext">2 / 3</div>
        <img src="img_snow_wide.jpg" alt="Snow" style={{ width: '100%' }} />
        <div className="text">Caption Two</div>
      </div>

      {/* Slide 3 */}
      <div className={`mySlides fade ${slideIndex === 3 ? 'active' : ''}`}>
        <div className="numbertext">3 / 3</div>
        <img src="img_mountains_wide.jpg" alt="Mountains" style={{ width: '100%' }} />
        <div className="text">Caption Three</div>
      </div>

      {/* Navigation arrows */}
      <a className="prev" onClick={() => plusSlides(-1)}>
        ❮
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        ❯
      </a>

      {/* Dots */}
      <div style={{ textAlign: 'center' }}>
        <span
          className={`dot ${slideIndex === 1 ? 'active' : ''}`}
          onClick={() => currentSlide(1)}
        ></span>
        <span
          className={`dot ${slideIndex === 2 ? 'active' : ''}`}
          onClick={() => currentSlide(2)}
        ></span>
        <span
          className={`dot ${slideIndex === 3 ? 'active' : ''}`}
          onClick={() => currentSlide(3)}
        ></span>
      </div>
    </div>
  );
};

export default Slideshow;


