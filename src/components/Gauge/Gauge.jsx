// src/components/Gauge/Gauge.jsx
import React from "react";
import GaugeChart from "react-gauge-chart";
import styles from "./Gauge.module.css";

const Gauge = () => {
  return (
    <div className={styles.gaugeWrapper}>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={100}
        percent={null}
        arcsLength={[0.1, 0.4, 0.5]} // 10% rojo, 40% verde, 50% amarillo
        colors={["#FF5F6D", "#4CAF50", "#FFC107"]}
        arcWidth={0.4} // 40% del radio = 80% del diámetro
        cornerRadius={2}
        needleColor="#444"
        needleBaseColor="#666"
        textColor="#000"
        animate={false}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Gauge;
