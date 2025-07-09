
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>About Us</h3>
            <p className={styles.columnText}>
              ModernShop is your trusted destination for premium quality products. 
              We're committed to providing exceptional customer service and carefully 
              curated items that enhance your lifestyle.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>Facebook</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
              <a href="#" className={styles.socialLink}>Instagram</a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li><a href="#home" className={styles.footerLink}>Home</a></li>
              <li><a href="#about" className={styles.footerLink}>About</a></li>
              <li><a href="#products" className={styles.footerLink}>Products</a></li>
              <li><a href="#contact" className={styles.footerLink}>Contact</a></li>
              <li><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="#" className={styles.footerLink}>Terms of Service</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Contact Info</h3>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <strong>Address:</strong><br />
                123 Modern Street<br />
                City, State 12345
              </p>
              <p className={styles.contactItem}>
                <strong>Phone:</strong><br />
                (123) 456-7890
              </p>
              <p className={styles.contactItem}>
                <strong>Email:</strong><br />
                info@modernshop.com
              </p>
              <p className={styles.contactItem}>
                <strong>Hours:</strong><br />
                Mon - Fri: 9AM - 6PM<br />
                Sat - Sun: 10AM - 4PM
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; 2024 ModernShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
