import React, { useState, useEffect } from "react";
import styles from "./HeroSlider.module.css";

import c0 from "../../assets/images/heroSlider/bharat-factory.jpg";
import c1 from "../../assets/images/heroSlider/c1.jpg";
import c2 from "../../assets/images/heroSlider/c2.jpg";
import c3 from "../../assets/images/heroSlider/c3.jpg";
import c4 from "../../assets/images/heroSlider/c4.jpg";
import { useNavigate } from "react-router-dom";
import { handleWhatsAppClick } from "../../utils/helperFunction";

const slides = [
  {
    id: 1,
    title: "Pipe Fittings That Outlast",
    subtitle: "Tee • Elbow • Reducer • Cross",
    description:
      "Precision-crafted pipe fittings made to handle pressure, corrosion, and tough industrial environments.",
    buttonText: "View Pipe Fittings",
    backgroundImage: c0,
    navigate: "/product/pipe-fittings",
  },
  {
    id: 2,
    title: "Fasteners Built for Strength",
    subtitle: "Bolt • Nut • Screw • Washer",
    description:
      "From heavy-duty bolts to precision screws, our fasteners are engineered for performance and durability.",
    buttonText: "Explore Fasteners",
    backgroundImage: c1,
    navigate: "/product/fasteners",
  },
  // {
  //   id: 3,
  //   title: "Certified. Trusted. Reliable.",
  //   subtitle: "ISO 9001:2015 Certified",
  //   description:
  //     "Quality you can trust — every product we ship meets global standards and customer expectations.",
  //   buttonText: "View Certification",
  //   backgroundImage: c2,
  // },
  {
    id: 4,
    title: "Worldwide Delivery, On Time",
    subtitle: "Supplying Across the Globe",
    description:
      "We ensure safe and timely delivery of industrial products — wherever your site is, we reach you.",
    buttonText: "Request a Quote",
    backgroundImage: c4,
    navigate: "/contact",
    ContactToWhatsApp: () => handleWhatsAppClick(),
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  let navigate = useNavigate();
  // Touch state for swipe
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Minimum swipe distance in px
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div
      className={styles.heroSlider}
      onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
      onTouchMove={(e) => setTouchEndX(e.touches[0].clientX)}
      onTouchEnd={() => {
        if (touchStartX !== null && touchEndX !== null) {
          const distance = touchStartX - touchEndX;
          if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
              nextSlide(); // swipe left
            } else {
              prevSlide(); // swipe right
            }
          }
        }
        setTouchStartX(null);
        setTouchEndX(null);
      }}
    >
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${slide.backgroundImage})`,
            }}
          >
            <div className={styles.slideContent}>
              <h1 className={styles.title}>{slide.title}</h1>
              <h2 className={styles.subtitle}>{slide.subtitle}</h2>
              <p className={styles.description}>{slide.description}</p>
              {slide.buttonText && (
                <button
                  className={styles.ctaButton}
                  onClick={
                    slide.id === 4
                      ? slide.ContactToWhatsApp
                      : () => navigate(slide.navigate)
                  }
                >
                  {slide.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={nextSlide}
      >
        &#8250;
      </button>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
