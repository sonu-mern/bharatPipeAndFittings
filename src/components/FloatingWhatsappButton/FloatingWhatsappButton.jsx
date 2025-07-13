import React from "react";
import styles from "./FloatingWhatsappButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsappButton = () => {
  const phoneNumber =
    import.meta.env.VITE_WHATSAPP_PHONE_NUMBER || "919876543210"; // Replace with your number
  const message = import.meta.env.VITE_WHATSAPP_MESSAGE || "Hello";
  const encodedMessage = encodeURIComponent(message);

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      className={styles.floatingButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsappButton;
