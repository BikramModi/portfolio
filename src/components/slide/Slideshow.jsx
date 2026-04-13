import React, { useState } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => ((prevIndex + n - 1 + 3) % 3) + 1);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="slideshow-container">
      {/* Slide 1 */}
      <div className={`mySlides fade ${slideIndex === 1 ? "active" : ""}`}>
        <div className="numbertext">1 / 3</div>
        <img
          src="img_nature_wide.jpg"
          alt="Nature"
          style={{ width: "100%" }}
        />
        <div className="text">Caption Text</div>
      </div>

      {/* Slide 2 */}
      <div className={`mySlides fade ${slideIndex === 2 ? "active" : ""}`}>
        <div className="numbertext">2 / 3</div>
        <img
          src="img_snow_wide.jpg"
          alt="Snow"
          style={{ width: "100%" }}
        />
        <div className="text">Caption Two</div>
      </div>

      {/* Slide 3 */}
      <div className={`mySlides fade ${slideIndex === 3 ? "active" : ""}`}>
        <div className="numbertext">3 / 3</div>
        <img
          src="img_mountains_wide.jpg"
          alt="Mountains"
          style={{ width: "100%" }}
        />
        <div className="text">Caption Three</div>
      </div>

      {/* Navigation arrows (FIXED) */}
      <button
        className="prev"
        onClick={() => plusSlides(-1)}
        aria-label="Previous Slide"
      >
        ❮
      </button>

      <button
        className="next"
        onClick={() => plusSlides(1)}
        aria-label="Next Slide"
      >
        ❯
      </button>

      {/* Dots */}
      <div style={{ textAlign: "center" }}>
        <button
          className={`dot ${slideIndex === 1 ? "active" : ""}`}
          onClick={() => currentSlide(1)}
          aria-label="Slide 1"
        ></button>

        <button
          className={`dot ${slideIndex === 2 ? "active" : ""}`}
          onClick={() => currentSlide(2)}
          aria-label="Slide 2"
        ></button>

        <button
          className={`dot ${slideIndex === 3 ? "active" : ""}`}
          onClick={() => currentSlide(3)}
          aria-label="Slide 3"
        ></button>
      </div>
    </div>
  );
};

export default Slideshow;