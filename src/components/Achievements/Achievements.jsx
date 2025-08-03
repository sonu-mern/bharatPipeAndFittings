import React, { useEffect, useRef, useState } from "react";
import styles from "./Achievements.module.css";

const Achievements = ({ heading, description, achievements }) => {
  const [counts, setCounts] = useState(achievements.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    let observer;
    if (sectionRef.current) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(sectionRef.current);
    }
    return () => {
      if (observer && sectionRef.current)
        observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const intervals = achievements.map((item, index) => {
      const increment = Math.ceil(item.count / 50); // Adjust speed here
      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < item.count) {
            updated[index] = Math.min(updated[index] + increment, item.count);
          }
          return updated;
        });
      }, 30); // Speed of update
    });
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [achievements, hasAnimated]);

  return (
    <section className={styles.achievementsSection} ref={sectionRef}>
      <div className={styles.content}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.grid}>
          {achievements.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.count}>{counts[index]}+</div>
              <div className={styles.label}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
