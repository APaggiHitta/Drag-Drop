import React from "react";
import styles from "./NavBarMain.module.css";
import {
  FaChartLine,
  FaChartBar,
  FaWaveSquare,
  FaHeartbeat,
  FaFolderOpen,
  FaTools,
  FaCogs,
  FaSlidersH,
  FaTachometerAlt,
} from "react-icons/fa";
import { MdTrendingUp, MdLoop } from "react-icons/md";

export const NavBarMain = () => {
  return (
    <nav className={styles.sidebarMain}>
      <ul>
        <li>
          <FaChartLine className={styles.icon} /> Performance Report
        </li>
        <li>
          <FaChartBar className={styles.icon} /> Performance Stats
        </li>
        <li>
          <MdLoop className={styles.icon} /> Loop Trends
        </li>
        <li>
          <MdTrendingUp className={styles.icon} /> Performance Trends
        </li>
        <li>
          <FaHeartbeat className={styles.icon} /> Health History
        </li>
        <li>
          <FaFolderOpen className={styles.icon} /> Analysis Records
        </li>
      </ul>

      <h4 className={styles.subtitle}>Tools</h4>
      <ul>
        <li>
          <FaTools className={styles.icon} /> Performance Analysis
        </li>
        <li>
          <FaSlidersH className={styles.icon} /> Loop Tune
        </li>
      </ul>

      <h4 className={styles.subtitle}>Settings</h4>
      <ul>
        <li>
          <FaCogs className={styles.icon} /> Loop configuration
        </li>
        <li>
          <FaCogs className={styles.icon} /> Cascade configuration
        </li>
        <li>
          <FaTachometerAlt className={styles.icon} /> Performance Threshold
        </li>
      </ul>
    </nav>
  );
};
