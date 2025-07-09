
import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>ModernShop</h2>
        </div>
        
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#products" className={styles.navLink}>Products</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
        
        <button 
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
