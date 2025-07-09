
import React from 'react';
import styles from './AboutSection.module.css';

const aboutCards = [
  {
    id: 1,
    title: "Premium Quality",
    description: "We source only the finest materials and work with trusted manufacturers to ensure every product meets our high standards.",
    icon: "⭐"
  },
  {
    id: 2,
    title: "Fast Shipping",
    description: "Get your orders delivered quickly with our express shipping options. Free shipping on orders over $50.",
    icon: "🚚"
  },
  {
    id: 3,
    title: "Customer Support",
    description: "Our dedicated support team is here to help you 24/7 with any questions or concerns you may have.",
    icon: "💬"
  },
  {
    id: 4,
    title: "Secure Payment",
    description: "Shop with confidence using our secure payment system that protects your personal information.",
    icon: "🔒"
  },
  {
    id: 5,
    title: "Easy Returns",
    description: "Not satisfied? Return any item within 30 days for a full refund, no questions asked.",
    icon: "↩️"
  },
  {
    id: 6,
    title: "Eco-Friendly",
    description: "We're committed to sustainability with eco-friendly packaging and environmentally conscious practices.",
    icon: "🌱"
  },
  {
    id: 7,
    title: "Expert Curation",
    description: "Our team of experts carefully selects each product to ensure it meets our quality and style standards.",
    icon: "👥"
  },
  {
    id: 8,
    title: "Global Reach",
    description: "We ship worldwide and have customers in over 50 countries who trust our products and service.",
    icon: "🌍"
  },
  {
    id: 9,
    title: "Innovation",
    description: "We're constantly innovating and adding new products to keep up with the latest trends and technologies.",
    icon: "💡"
  }
];

const AboutSection = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose ModernShop?</h2>
          <p className={styles.subtitle}>
            We're committed to providing the best shopping experience with quality products, 
            exceptional service, and values you can trust.
          </p>
        </div>
        
        <div className={styles.cardsGrid}>
          {aboutCards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardIcon}>
                {card.icon}
              </div>
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
