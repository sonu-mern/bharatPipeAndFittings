import React from "react";
import styles from "./TrustedClientsHeader.module.css";
import ThirdPartyInspection from "../ThirdPartyInspection/ThirdPartyInspection";

const TrustedClientsHeader = ({ label, heading, description, images }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.verticalLine} />
        <div>
          <div className={styles.labelWrapper}>
            <div className={styles.horizontalLine} />
            <span className={styles.label}>{label}</span>
          </div>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
      </div>

      <div className={styles.rightSection}>
        <p>{description}</p>
      </div>
      <ThirdPartyInspection img={images} customWidth={"80vw"} />
    </div>
  );
};

export default TrustedClientsHeader;
