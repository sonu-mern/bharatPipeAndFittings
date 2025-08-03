import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ServiceSidebar.module.css";
import { FiChevronRight } from "react-icons/fi";
import { slugify } from "../../utils/helperFunction";

const ServiceSidebar = ({ data, title = "Our Services" }) => {
  const { id: location } = useParams();

  return (
    <>
      <h2 className={styles.sidebarTitle}>{title}</h2>
      <div className={styles.sidebarContainer}>
        <ul className={styles.serviceList}>
          {data.map((service, index) => {
            const slug = slugify(service.label);
            const path = `/product/${slug}`;
            const isActive = location === slug;

            return (
              <li key={index} className={styles.serviceItem}>
                <Link
                  to={path}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  } // ✅ scroll on click
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
