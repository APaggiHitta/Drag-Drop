import React from "react";
import styles from "./MainContainer.module.css";
import Header from "../Header/Header";
import { NavBarMain } from "../NavBarMain/NavBarMain";
import InfoBox from "../InfoBox/InfoBox";
import ChartCard from "../ChartCard/ChartCard";
import Gauge from "../Gauge/Gauge";
import Gauge270 from "../Gauge270/Gauge270";

import {
  FaExclamationTriangle,
  FaCog,
  FaTachometerAlt,
  FaFire,
  FaBolt,
} from "react-icons/fa";

import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

export const MainContainer = () => {
  const cards = [
    {
      id: "card-1",
      title: "Disturbance Rejection",
      icon: FaExclamationTriangle,
      subtitle: "Slow",
      bgColor: "#d9534f",
    },
    {
      id: "card-2",
      title: "System Stability",
      icon: FaCog,
      subtitle: "Optimal",
      bgColor: "#0275d8",
    },
    {
      id: "card-3",
      title: "Speed Control",
      icon: FaTachometerAlt,
      subtitle: "Normal",
      bgColor: "#5bc0de",
    },
    {
      id: "card-4",
      title: "Temperature",
      icon: FaFire,
      subtitle: "High",
      bgColor: "#f0ad4e",
    },
    {
      id: "card-5",
      title: "Power Usage",
      icon: FaBolt,
      subtitle: "Efficient",
      bgColor: "#5cb85c",
    },
    {
      id: "card-6",
      title: "Power Usage Chart",
      component: ChartCard,
      bgColor: "#ffffff",
    },
    {
      id: "card-7",
      title: "Power Usage Chart",
      component: ChartCard,
      bgColor: "#ffffff",
    },

    {
      id: "card-8",
      title: "Temperature Gauge",
      component: Gauge270,
      bgColor: "#ffffff",
    },
  ];

  const layout = cards.map((card, i) => ({
    i: card.id,
    x: (i % 3) * 4,
    y: Math.floor(i / 3) * 2,
    w: 4,
    h: 2,
    resizeHandles: ["se"],
  }));

  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.body}>
        <NavBarMain />
        <div className={styles.gridWrapper}>
          <ReactGridLayout
            className={styles.infoBoxesContainer}
            layout={layout}
            cols={12}
            rowHeight={100}
            isResizable
            isDraggable
            margin={[16, 16]}
            containerPadding={[0, 0]}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className={styles.gridItem}
                style={{ backgroundColor: card.bgColor }}
              >
                {card.component ? (
                  <card.component />
                ) : (
                  <InfoBox
                    title={card.title}
                    icon={card.icon}
                    subtitle={card.subtitle}
                    bgColor={card.bgColor}
                  />
                )}
              </div>
            ))}
          </ReactGridLayout>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
