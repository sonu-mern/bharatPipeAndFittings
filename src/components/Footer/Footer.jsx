import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import styles from "./Footer.module.css";
import TrustedManufacturer from "../TrustedManufacturer/TrustedManufacturer";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", name: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", name: "LinkedIn" },
  ];

  return (
    <>
      <TrustedManufacturer />
      <footer className={styles.footer} id="contact">
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>About ModernStore</h3>
              <p className={styles.aboutText}>
                We are dedicated to providing high-quality products and
                exceptional customer service. Our mission is to make shopping
                convenient, enjoyable, and accessible for everyone.
              </p>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Quick Links</h3>
              <ul className={styles.linksList}>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Contact Info</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <MapPin size={18} />
                  <span>123 Fashion Street, Style City, SC 12345</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={18} />
                  <span>(555) 123-4567</span>
                </div>
                <div className={styles.contactItem}>
                  <Mail size={18} />
                  <span>info@modernstore.com</span>
                </div>
              </div>
              <div className={styles.newsletter}>
                <h4 className={styles.newsletterTitle}>
                  Subscribe to Newsletter
                </h4>
                <div className={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.newsletterInput}
                  />
                  <button className={styles.newsletterButton}>Subscribe</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              <p>&copy; 2024 ModernStore. All rights reserved.</p>
            </div>
            <div className={styles.paymentMethods}>
              <span>We Accept:</span>
              <div className={styles.paymentIcons}>
                <span className={styles.paymentIcon}>💳</span>
                <span className={styles.paymentIcon}>💰</span>
                <span className={styles.paymentIcon}>📱</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
