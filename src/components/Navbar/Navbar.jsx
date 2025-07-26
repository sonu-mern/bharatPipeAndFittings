import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import logo from "../../assets//images/logo/comanylogo2.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { name: "Products", href: "/#products", isRoute: false },
    { name: "Catalogue", href: "/catalog.pdf", isRoute: false, isPdf: true },
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

  const handlePdfOpen = (e, href) => {
    e.preventDefault();
    window.open(href, "_blank");
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          <span>
            <img src={logo} alt="Bharat Pipe & Fittings Logo" /> Bharat Pipe &
            Fittings
          </span>
        </NavLink>

        <div
          className={`${styles.navLinks} ${
            isMenuOpen ? styles.navLinksOpen : ""
          }`}
        >
          {navLinks.map((link, index) => {
            if (link.isPdf) {
              // For Catalogue PDF
              return (
                <a
                  key={index}
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handlePdfOpen(e, link.href)}
                >
                  {link.name}
                </a>
              );
            } else if (link.isRoute) {
              return (
                <NavLink
                  key={index}
                  to={link.href}
                  end
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              );
            } else {
              return (
                <a
                  key={index}
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            }
          })}
        </div>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
