// MainContainer.jsx
import React, { useState, useCallback, useRef } from "react";
import styles from "./MainContainer.module.css";
import Header from "../Header/Header";
import { NavBarMain } from "../NavBarMain/NavBarMain";
import InfoBox from "../InfoBox/InfoBox";
import {
  FaExclamationTriangle,
  FaCog,
  FaTachometerAlt,
  FaFire,
  FaBolt,
} from "react-icons/fa";

import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemTypes = {
  CARD: "card",
};

const DraggableCard = ({
  id,
  title,
  icon,
  subtitle,
  bgColor,
  index,
  moveCard,
}) => {
  const ref = useRef(null);

  // Drop target to handle hover & reorder
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      // Obtener posición del mouse
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Condiciones para evitar reorder innecesario
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  // Drag source
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "pointer",
      }}
    >
      <InfoBox
        title={title}
        icon={icon}
        subtitle={subtitle}
        bgColor={bgColor}
      />
    </div>
  );
};

export const MainContainer = ({ children }) => {
  // Ahora con estado para poder reordenar
  const [cards, setCards] = useState([
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
  ]);

  // Función para cambiar el orden de las tarjetas
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const [removed] = newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, removed);
      return newCards;
    });
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.mainContainer}>
        <Header />
        <div className={styles.body}>
          <NavBarMain />
          <main className={styles.content}>{children}</main>
          <div className={styles.infoBoxesContainer}>
            {cards.map(({ id, title, icon, subtitle, bgColor }, index) => (
              <DraggableCard
                key={id}
                id={id}
                index={index}
                title={title}
                icon={icon}
                subtitle={subtitle}
                bgColor={bgColor}
                moveCard={moveCard}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default MainContainer;
