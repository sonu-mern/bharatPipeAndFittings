
import React from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <span className={styles.message}>Free shipping on orders over $50!</span>
        <div className={styles.links}>
          <a href="tel:+1234567890" className={styles.link}>Call: (123) 456-7890</a>
          <a href="mailto:info@example.com" className={styles.link}>Email Us</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
