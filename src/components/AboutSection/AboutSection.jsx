import React from "react";
import styles from "./AboutSection.module.css";

const aboutCards = [
  {
    id: 1,
    title: "Industrial-Grade Quality",
    description:
      "Our products are built to last, crafted with the highest-grade materials suitable for industrial use.",
    icon: "🏭",
  },
  {
    id: 2,
    title: "Timely Delivery",
    description:
      "We ensure fast and reliable delivery across India with strong logistic partnerships.",
    icon: "🚚",
  },
  {
    id: 3,
    title: "Certified Products",
    description:
      "All our pipes and fittings are ISO 9001:2015 certified to meet strict industry standards.",
    icon: "📄",
  },
  {
    id: 4,
    title: "Customer-Centric Support",
    description:
      "Our experienced support team is always ready to assist with your technical and order-related queries.",
    icon: "📞",
  },
  {
    id: 5,
    title: "Trusted by Professionals",
    description:
      "We're the preferred supplier for contractors, builders, and manufacturers nationwide.",
    icon: "🤝",
  },
  {
    id: 6,
    title: "Wide Product Range",
    description:
      "From PVC to GI, we offer an extensive range of pipes, fittings, and accessories under one roof.",
    icon: "📦",
  },
  {
    id: 7,
    title: "Secure Transactions",
    description:
      "Our billing and payment system ensures a smooth and secure experience for every client.",
    icon: "💳",
  },
  {
    id: 8,
    title: "Pan-India Presence",
    description:
      "With clients across multiple states, we deliver trust and quality beyond city boundaries.",
    icon: "🗺️",
  },
  {
    id: 9,
    title: "Decades of Experience",
    description:
      "We bring over 15+ years of expertise in supplying quality pipe solutions to various sectors.",
    icon: "⏳",
  },
];

const AboutSection = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose Bharat Pipe & Fittings?</h2>
          <p className={styles.subtitle}>
            At Bharat Pipe & Fittings, we combine industrial-grade quality,
            certified standards, and exceptional service to support your project
            needs with confidence.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {aboutCards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
