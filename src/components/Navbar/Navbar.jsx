import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo/comanylogo2.jpeg";
import { materials } from "../../utils/ProductsShortList";
import { slugify } from "../../utils/helperFunction";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { name: "Products", href: "/#products", isRoute: false },
    { name: "Materials", isDropdown: true },
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
    setIsMaterialsOpen(false);
  };

  const toggleMaterials = () => {
    setIsMaterialsOpen(!isMaterialsOpen);
    setIsMenuOpen(true);
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
            if (link.isDropdown) {
              return (
                <div key={index} className={styles.navDropdown}>
                  <button
                    className={`${styles.navLink} ${styles.dropdownToggle}`}
                    type="button"
                    onClick={toggleMaterials}
                  >
                    {link.name}
                    <span className={styles.toggleIcon}>
                      {isMaterialsOpen ? "−" : "+"}
                    </span>
                  </button>

                  {(isMaterialsOpen || window.innerWidth >= 769) && (
                    <div className={styles.dropdownMenu}>
                      {materials.map((item, idx) => (
                        <a
                          key={idx}
                          href={`/product/${slugify(item.label)}`}
                          className={styles.dropdownItem}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMaterialsOpen(false);
                          }}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else if (link.isPdf) {
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
