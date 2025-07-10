import React from "react";
import styles from "./TopBar.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <span className={styles.message}>
          <FaMapMarkerAlt className={styles.icon} /> India, Mumbai
        </span>
        <div className={styles.links}>
          <a href="tel:+919119171675" className={styles.link}>
            <FaPhoneAlt className={styles.icon} /> +91 78773 78773
          </a>
          <a
            href="mailto:sales@bharatpipeandfitting.com"
            className={styles.link}
          >
            <FaEnvelope className={styles.icon} />{" "}
            sales@bharatpipeandfitting.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
