import React from "react";
import styles from "../HeroSlider/HeroSlider.module.css";
import clsx from "clsx";

/**
 * Button component using theme secondary color by default.
 * Accepts custom className and style props for further customization.
 */
export function ThemedButton({
  children,
  className = "",
  style = {},
  ...props
}) {
  return (
    <button
      className={clsx(styles.ctaButton, className)}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}

export default ThemedButton;
