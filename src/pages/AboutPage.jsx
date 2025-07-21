import React from "react";
import styles from "./AboutPage.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { constantValue } from "../utils/constantValue";
let companyName = constantValue.companyName;
const coreValues = [
  {
    icon: "🏗️",
    title: "Unmatched Quality",
    description:
      "We uphold the highest manufacturing standards to deliver durable and reliable pipe solutions.",
  },
  {
    icon: "👷",
    title: "Customer Commitment",
    description:
      "Every client is our partner. We focus on understanding your needs and exceeding expectations.",
  },
  {
    icon: "⚙️",
    title: "Innovation & Efficiency",
    description:
      "We continuously improve our production methods to ensure efficiency and product performance.",
  },
  {
    icon: "🌿",
    title: "Sustainable Practices",
    description:
      "We implement environmentally responsible practices across our operations.",
  },
  {
    icon: "📜",
    title: "Certified Excellence",
    description:
      "Our products conform to ISI and ISO standards to ensure lasting quality and safety.",
  },
  {
    icon: "📞",
    title: "Prompt Support",
    description:
      "Our technical team is ready to support you through every project phase — from inquiry to installation.",
  },
];

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Hero Section */}
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>About {companyName}</h1>
            <p className={styles.heroSubtitle}>
              Delivering excellence in plumbing and infrastructure solutions
              since 1995
            </p>
          </div>

          {/* Mission Section */}
          <section className={styles.section}>
            <div className={styles.content}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
                <p className={styles.sectionText}>
                  At {companyName}, our mission is to provide top-grade piping
                  solutions that power infrastructure across India. Whether it's
                  residential, commercial, or industrial projects — quality,
                  durability, and trust define our offerings.
                </p>
                <p className={styles.sectionText}>
                  We aim to lead the pipe industry through our constant
                  commitment to innovation, precision engineering, and customer
                  satisfaction.
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

          {/* Story Section */}
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
                <h2 className={styles.sectionTitle}>Our Journey</h2>
                <p className={styles.sectionText}>
                  Established in 1995, {companyName} started with a vision to
                  become a trusted name in the pipe industry. With a modest
                  beginning, we've grown into a leading manufacturer and
                  supplier known for quality and dependability.
                </p>
                <p className={styles.sectionText}>
                  From local builders to nationwide contractors, we’ve earned
                  the confidence of professionals by consistently delivering
                  high-performance piping solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className={styles.valuesSection}>
            <h2 className={styles.valuesSectionTitle}>Our Core Values</h2>
            <div className={styles.valuesGrid}>
              {coreValues.map((value, index) => (
                <div key={index} className={styles.valueCard}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className={styles.teamSection}>
            <div className={styles.teamContent}>
              <h2 className={styles.teamTitle}>Meet Our Team</h2>
              <p className={styles.teamDescription}>
                Our success is driven by a skilled and dedicated team of
                engineers, technicians, and support professionals. Together, we
                ensure {companyName} stands for reliability and service.
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
