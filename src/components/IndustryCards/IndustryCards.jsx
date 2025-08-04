import React from "react";
import styles from "./IndustryCards.module.css";
import powerImg from "../../assets/images/industries/power.jpg"; // Replace with your actual image path
import oilGasImg from "../../assets/images/industries/oilgas.jpg";
import petrochemicalImg from "../../assets/images/industries/petrochemical.jpg";
import automotiveImg from "../../assets/images/industries/automotive.jpg";

const industries = [
  { title: "Petrochemical", image: petrochemicalImg },
  { title: "Power Plants", image: powerImg },
  { title: "Automotive", image: automotiveImg },
  { title: "Oil & Gas", image: oilGasImg },
];

const IndustryCards = () => {
  return (
    <div className={styles.cardContainer}>
      {industries.map((industry, index) => (
        <div key={index} className={styles.card}>
          <img
            src={industry.image}
            alt={industry.title}
            className={styles.image}
          />
          <div className={styles.title}>{industry.title}</div>
        </div>
      ))}
    </div>
  );
};

export default IndustryCards;
