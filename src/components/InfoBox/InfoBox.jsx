import React from "react";
import styles from "./InfoBox.module.css";

export const InfoBox = ({ title, icon, subtitle, bgColor }) => {
  return (
    <div className={styles.infoBox} style={{ backgroundColor: bgColor }}>
      <div className={styles.icon}>{React.createElement(icon)}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default InfoBox;
