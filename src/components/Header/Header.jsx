import React from "react";
import styles from "./Header.module.css";
import { FaCube } from "react-icons/fa";

export const Header = () => {
  return (
    <header className={styles.header}>
      <FaCube className={styles.icon} />
      <div className={styles.titleContainer}>
        <span className={styles.subtitle}>TXO_LHC9 - Cold</span>
        <h1 className={styles.title}>
          PC50206SelA - D502 FG hdr press cntllr A
        </h1>
      </div>
    </header>
  );
};

export default Header;
