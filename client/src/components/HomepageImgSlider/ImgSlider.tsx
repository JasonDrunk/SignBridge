import { useState, useEffect } from 'react';
import './ImgSlider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images
  const slides = [
    { src: './images/image-slider/SignBridgeBanner1.png', alt: 'First Slide' },
    { src: './images/image-slider/SignBridgeBanner2.png', alt: 'Second Slide' },
    { src: './images/image-slider/SignBridgeBanner3.png', alt: 'Third Slide' },
  ];

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  // Automatically move to the next slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          className="slider-image"
        />
        <div className="dot-container">
          {slides.map((slide, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;