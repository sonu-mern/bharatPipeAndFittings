import React from "react";
import styles from "./TrustedClientsHeader.module.css";
import ThirdPartyInspection from "../ThirdPartyInspection/ThirdPartyInspection";
import IndustryCards from "../IndustryCards/IndustryCards";

const TrustedClientsHeader = ({
  label,
  heading,
  description,
  images,
  showIndustryCards = false,
}) => {
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
      {showIndustryCards ? (
        <IndustryCards />
      ) : (
        <ThirdPartyInspection img={images} customWidth={"80vw"} />
      )}
    </div>
  );
};

export default TrustedClientsHeader;
