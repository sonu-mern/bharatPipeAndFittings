import React from "react";
import styles from "./ImageGridWithLabel.module.css";

// Sample data
const channels = [
  { label: "U-Steel channels", image: "/images/u-steel.png" },
  { label: "C-Steel channels", image: "/images/c-steel.png" },
  { label: "Z-Steel channels", image: "/images/z-steel.png" },
  { label: "Hat-Steel channels", image: "/images/hat-steel.png" },
  { label: "T-Steel channels", image: "/images/t-steel.png" },
  { label: "J-Steel channels", image: "/images/j-steel.png" },
];

const ImageGridWithLabel = ({ imagesWithLabel }) => {
  return (
    <div className={styles.container}>
      {imagesWithLabel.map((item, index) => (
        <div key={index} className={styles.card}>
          <img src={item.image} alt={item.label} className={styles.image} />
          <div className={styles.label}>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGridWithLabel;
