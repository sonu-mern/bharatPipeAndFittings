import React from "react";
import styles from "./TopBar.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { constantValue } from "../../utils/constantValue";

const TopBar = () => {
  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <span className={styles.message}>
            <FaMapMarkerAlt className={styles.icon} /> India, Mumbai
          </span>
          <div className={styles.links}>
            <a href="tel:+919119171675" className={styles.link}>
              <FaPhoneAlt className={styles.icon} />{" "}
              {constantValue.companyPhone}
            </a>
            <a
              href={`mailto:${constantValue.companyEmail}`}
              className={styles.link}
            >
              <FaEnvelope className={styles.icon} />{" "}
              {constantValue.companyEmail}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
