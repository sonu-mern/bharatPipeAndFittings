import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./ServiceSidebar.module.css";
import { FiChevronRight } from "react-icons/fi";

const services = [
  { label: "Sheets, Plates & Coils" },
  { label: "Angles & Channels" },
  { label: "Pipes & Tubes" },
  { label: "Pipe Fittings" },
  { label: "Flanges" },
  { label: "Forged Fittings" },
  { label: "Fasteners" },
  { label: "Valves" },
  { label: "Round Bars & Rods" },
];

const ServiceSidebar = () => {
  const { id: location } = useParams();

  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.serviceList}>
        {services.map((service, index) => {
          const slug = service.label.toLowerCase(); // same as ProductSection
          const path = `/product/${slug}`;
          const isActive = location?.toLowerCase() === slug;

          return (
            <li key={index} className={styles.serviceItem}>
              <Link
                to={path}
                className={`${styles.serviceLink} ${
                  isActive ? styles.active : ""
                }`}
              >
                <span>{service.label.toUpperCase()}</span>
                <FiChevronRight />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceSidebar;
