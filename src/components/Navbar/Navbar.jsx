import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { name: "Products", href: "/#products", isRoute: false },
    { name: "Contact", href: "/contact", isRoute: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          {/* <ShoppingBag size={28} /> */}
          <span>Bharat Pipe & Fittings</span>
        </Link>

        <div
          className={`${styles.navLinks} ${
            isMenuOpen ? styles.navLinksOpen : ""
          }`}
        >
          {navLinks.map((link, index) =>
            link.isRoute ? (
              <Link
                key={index}
                to={link.href}
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={index}
                href={link.href}
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            )
          )}
        </div>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
