import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./ServiceSidebar.module.css";
import { FiChevronRight } from "react-icons/fi";

const services = [
  {
    label: "Sheet, Plate & Coil",
    path: "/sheet-plate-coil-supplier-stockist-india",
  },
  {
    label: "Angles & Channels",
    path: "/angles-channels-flat-supplier-stockist-india",
  },
  { label: "Bars & Rods", path: "/bars-rods-supplier-stockist-india" },
  { label: "Pipes & Tubes", path: "/pipes-tubes-supplier-stockist-india" },
  { label: "Pipe Fittings", path: "/pipe-fittings-supplier-stockist-india" },
  { label: "Flanges", path: "/flanges-supplier-stockist-india" },
  {
    label: "Forged Fittings",
    path: "/forged-fittings-supplier-stockist-india",
  },
  { label: "Fasteners", path: "/fasteners-supplier-stockist-india" },
  { label: "Valves", path: "/valves-supplier-stockist-india" },
];

const ServiceSidebar = () => {
  const location = useLocation();

  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.serviceList}>
        {services.map((service, index) => {
          const isActive = location.pathname === service.path;
          return (
            <li key={index} className={styles.serviceItem}>
              <Link
                to={service.path}
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
