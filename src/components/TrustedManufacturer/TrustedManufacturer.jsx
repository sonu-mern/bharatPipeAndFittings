import React from "react";
import styles from "./TrustedManufacturer.module.css";
import { Link } from "react-router-dom"; // Optional if using React Router
import ThemedButton from "../ui/ThemedButton";

const TrustedManufacturer = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <div className={styles.colLeft}>
          <div className={styles.titleBox}>
            <div className={styles.titleSections}>
              <div className={styles.title}>
                Searching for a Reliable <br /> Manufacturing Partner?
              </div>
              <p>
                We specialize in premium-quality Sheet, Plate, Angle, Channel,
                Flat, Rod, Pipes, and Pipe Fittings. <br />
                Get fast responses, expert support, and dependable solutions
                tailored to your project needs.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.colRight}>
          <div className={styles.btnWrapper}>
            <ThemedButton style={{ backgroundColor: "var(--color-primary)" }}>
              Get In Touch
            </ThemedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedManufacturer;
