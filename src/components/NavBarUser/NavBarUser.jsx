import React from "react";
import styles from "./NavBarUser.module.css";
import {
  FaHome,
  FaChartBar,
  FaUsers,
  FaThLarge,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

export const NavBarUser = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.topIcons}>
        <FaHome className={styles.icon} title="Home" />
        <FaChartBar className={styles.icon} title="Gráficas" />
        <FaUsers className={styles.icon} title="Personas" />
        <FaThLarge className={styles.icon} title="Dashboard" />
      </div>
      <div className={styles.bottomIcons}>
        <FaUserCircle className={styles.icon} title="Perfil" />
        <FaSignOutAlt className={styles.icon} title="Salir" />
      </div>
    </div>
  );
};
