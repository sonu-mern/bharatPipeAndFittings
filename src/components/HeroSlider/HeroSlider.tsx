
import React, { useState, useEffect } from 'react';
import styles from './HeroSlider.module.css';

const slides = [
  {
    id: 1,
    title: "Welcome to ModernShop",
    subtitle: "Discover Amazing Products",
    description: "Find the perfect items for your lifestyle with our curated collection of premium products.",
    buttonText: "Shop Now",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: 2,
    title: "Quality You Can Trust",
    subtitle: "Premium Materials",
    description: "Every product is carefully selected and tested to ensure the highest quality standards.",
    buttonText: "Learn More",
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    id: 3,
    title: "Fast & Free Shipping",
    subtitle: "Delivered to Your Door",
    description: "Enjoy free shipping on all orders over $50 with our express delivery service.",
    buttonText: "Start Shopping",
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
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
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ background: slide.background }}
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

      <button className={styles.navButton + ' ' + styles.prevButton} onClick={prevSlide}>
        &#8249;
      </button>
      <button className={styles.navButton + ' ' + styles.nextButton} onClick={nextSlide}>
        &#8250;
      </button>

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
