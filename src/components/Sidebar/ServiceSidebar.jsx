import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./ServiceSidebar.module.css";
import { FiChevronRight } from "react-icons/fi";

const ServiceSidebar = ({ data, title = "Our Services" }) => {
  const { id: location } = useParams();

  return (
    <>
      <h2 className={styles.sidebarTitle}>{title}</h2>
      <div className={styles.sidebarContainer}>
        <ul className={styles.serviceList}>
          {data.map((service, index) => {
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
    </>
  );
};

export default ServiceSidebar;
