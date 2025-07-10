import React from 'react';
import styles from './AboutPage.module.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>About ModernStore</h1>
            <p className={styles.heroSubtitle}>
              Your trusted partner for premium products and exceptional service
            </p>
          </div>

          <section className={styles.section}>
            <div className={styles.content}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
                <p className={styles.sectionText}>
                  At ModernStore, we are committed to bringing you the finest selection of products 
                  that enhance your lifestyle. Our mission is to provide exceptional quality, 
                  innovative design, and outstanding customer service in everything we do.
                </p>
                <p className={styles.sectionText}>
                  We believe that great products should be accessible to everyone, which is why 
                  we carefully curate our collection to offer the perfect balance of quality, 
                  functionality, and value.
                </p>
              </div>
              <div className={styles.imageContent}>
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                  alt="Our Mission" 
                  className={styles.sectionImage}
                />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.content}>
              <div className={styles.imageContent}>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                  alt="Our Story" 
                  className={styles.sectionImage}
                />
              </div>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Our Story</h2>
                <p className={styles.sectionText}>
                  Founded in 2020, ModernStore began as a small passion project with a simple 
                  goal: to make high-quality products accessible to everyone. What started as 
                  a small online store has grown into a trusted destination for thousands of 
                  customers worldwide.
                </p>
                <p className={styles.sectionText}>
                  Our journey has been driven by our commitment to excellence and our dedication 
                  to understanding what our customers truly need. Every product in our store is 
                  carefully selected and tested to ensure it meets our high standards.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.valuesSection}>
            <h2 className={styles.valuesSectionTitle}>Our Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🎯</div>
                <h3 className={styles.valueTitle}>Quality First</h3>
                <p className={styles.valueDescription}>
                  We never compromise on quality. Every product is carefully selected and tested.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <h3 className={styles.valueTitle}>Customer Focus</h3>
                <p className={styles.valueDescription}>
                  Our customers are at the heart of everything we do. Your satisfaction is our priority.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🚀</div>
                <h3 className={styles.valueTitle}>Innovation</h3>
                <p className={styles.valueDescription}>
                  We constantly seek new and innovative products that improve your daily life.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🌱</div>
                <h3 className={styles.valueTitle}>Sustainability</h3>
                <p className={styles.valueDescription}>
                  We're committed to sustainable practices and eco-friendly products.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.teamSection}>
            <div className={styles.teamContent}>
              <h2 className={styles.teamTitle}>Meet Our Team</h2>
              <p className={styles.teamDescription}>
                Behind ModernStore is a passionate team of professionals dedicated to bringing 
                you the best shopping experience possible. Our diverse team combines expertise 
                in product curation, customer service, and technology to serve you better.
              </p>
              <div className={styles.teamImage}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop" 
                  alt="Our Team" 
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;