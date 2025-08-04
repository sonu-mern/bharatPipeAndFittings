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
import FloatingWhatsappButton from "../FloatingWhatsappButton/FloatingWhatsappButton";
import { constantValue } from "../../utils/constantValue";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "/contact" },
    // { name: "Privacy Policy", href: "#privacy" },
    // { name: "Terms of Service", href: "#terms" },
  ];
  const applicationIndustries = [
    // { name: "Chemical Industry", href: "" },
    // { name: "Energy & Power Industry", href: "" },
    { name: "Oil & Gas Industry", href: "" },
    { name: "Pharmaceutical Industry", href: "" },
    { name: "Petrochemical Industry", href: "" },
    { name: "Sugar Industry", href: "" },
    { name: "Refineries", href: "" },
    { name: "Paper & Pulp Industry", href: "" },
    { name: "Automobile Industry", href: "" },
    { name: "Engineering", href: "" },
    // { name: "Agriculture Industry", href: "" },
    // { name: "Marine Industry", href: "" },
    { name: "Shipbuilding Industry", href: "" },
    { name: "Furnace Industry", href: "" },
    { name: "Nuclear Power Industry", href: "" },
    { name: "Water Piping Systems", href: "" },
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
      <FloatingWhatsappButton />
      <footer className={styles.footer} id="contact">
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>
                About Bharat Pipe & Fittings
              </h3>
              <p className={styles.aboutText}>
                Bharat Pipe & Fittings is a trusted name in the manufacturing
                and supply of industrial pipes, fittings, rods, plates, and
                structural products across India. We are committed to delivering
                top-quality solutions with unmatched service.
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
              <h3 className={styles.columnTitle}>Contact Information</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <MapPin size={18} />
                  <span>{constantValue.companyAddress}</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={18} />
                  <span>{constantValue.companyPhone}</span>
                </div>
                <div className={styles.contactItem}>
                  <Mail size={18} />
                  <span>{constantValue.companyEmail}</span>
                </div>
              </div>
              {/* <div className={styles.newsletter}>
                <h4 className={styles.newsletterTitle}>
                  Subscribe for Updates
                </h4>
                <div className={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className={styles.newsletterInput}
                  />
                  <button className={styles.newsletterButton}>Subscribe</button>
                </div>
              </div> */}
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Dealers & Distributors</h3>
              <p className={styles.aboutText}>
                Gujarat, Haryana, Karnataka, Jharkhand, Tamil Nadu, Maharashtra,
                Kerala, Rajasthan, Uttar Pradesh, Madhya Pradesh, Andhra
                Pradesh, Mumbai, Bangalore, Bhavnagar, Hyderabad, Ahmedabad,
                Chennai, Baroda, Pune, Nashik, Surat, Rajkot, Coimbatore,
                Bhubaneswar, Thane, Rajkot, Assam, Delhi, Bhiwandi, Bikaner,
                Indore.
              </p>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Countries We Export</h3>
              <p className={styles.aboutText}>
                Peru, Iran, Puerto Rico, Ukraine, Kuwait, Qatar, Bolivia, Iraq,
                New Zealand, Libya, Austria, Denmark, Namibia, Afghanistan,
                Lithuania, Finland, Egypt, Nigeria, Netherlands, Poland,
                Singapore, Venezuela, France, Turkey, Hungary, Serbia, Nigeria,
                Philippines, Malaysia, Pakistan, Taiwan, South Africa, Zimbabwe,
                Bhutan, Portugal, Kenya, Mexico, Australia, Japan.
              </p>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Application Industry</h3>
              <ul className={styles.linksList}>
                {applicationIndustries.map((industry, index) => (
                  <li key={index}>
                    <p className={styles.footerLink}>{industry.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              <p>
                &copy; {new Date().getFullYear()} Bharat Pipe & Fittings. All
                rights reserved | Designed and developed by{" "}
                <a
                  href="https://sonumahto.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sonu Mahto
                </a>
              </p>
            </div>
            <div className={styles.paymentMethods}>
              <span>We Accept:</span>
              <div className={styles.paymentIcons}>
                <span className={styles.paymentIcon}>💳</span>
                <span className={styles.paymentIcon}>🏦</span>
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
