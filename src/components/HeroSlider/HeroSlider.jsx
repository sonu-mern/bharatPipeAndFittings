import React, { useState, useEffect } from "react";
import styles from "./HeroSlider.module.css";
import c1 from "../../assets/images/heroSlider/c1.jpg";
import c2 from "../../assets/images/heroSlider/c2.jpg";
import c3 from "../../assets/images/heroSlider/c3.jpg";
import c4 from "../../assets/images/heroSlider/c4.jpg";

const slides = [
  {
    id: 1,
    title: "Welcome to Bharat Pipe & Fittings",
    subtitle: "Your Trusted Industrial Partner",
    description:
      "Supplying high-quality pipes and fittings to industries across India with guaranteed durability.",
    buttonText: "Explore Products",
    backgroundImage: c1,
  },
  {
    id: 2,
    title: "ISO Certified Products",
    subtitle: "Quality You Can Rely On",
    description:
      "All our products are ISO 9001:2015 certified and tested to meet industrial standards.",
    buttonText: "View Certifications",
    backgroundImage: c2,
  },
  {
    id: 3,
    title: "Nationwide Delivery",
    subtitle: "Fast & Reliable Logistics",
    description:
      "We ensure timely delivery to your doorstep, no matter where your project site is located.",
    buttonText: "Get a Quote",
    backgroundImage: c4,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  console.log("HeroSlider rendering, currentSlide:", currentSlide);

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
    <div className={styles.heroSlider}>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              // backdropFilter: "blur(5px)",
            }}
          >
            <div className={styles.slideContent}>
              <h1 className={styles.title}>{slide.title}</h1>
              <h2 className={styles.subtitle}>{slide.subtitle}</h2>
              <p className={styles.description}>{slide.description}</p>
              <button className={styles.ctaButton}>{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      <button
        className={styles.navButton + " " + styles.prevButton}
        onClick={prevSlide}
      >
        &#8249;
      </button>
      <button
        className={styles.navButton + " " + styles.nextButton}
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
