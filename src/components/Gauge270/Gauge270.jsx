import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { FaExclamationTriangle } from "react-icons/fa";

const data = [
  { name: "Red", value: 10, fill: "#FF5F6D" },
  { name: "Green", value: 40, fill: "#4CAF50" },
  { name: "Yellow", value: 50, fill: "#FFC107" },
];

const Gauge270Pie = () => {
  const valuePercent = 0.95;
  const startAngle = 225;
  const totalAngle = 270;
  const angleDeg = startAngle - totalAngle * valuePercent;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[{ name: "Center", value: 100 }]}
              startAngle={0}
              endAngle={360}
              innerRadius={0}
              outerRadius="51%"
              fill="#ddd"
              stroke="none"
              dataKey="value"
            />
            <Pie
              data={data}
              startAngle={225}
              endAngle={-45}
              innerRadius="85%"
              outerRadius="100%"
              dataKey="value"
              stroke="none"
              cornerRadius={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Aguja con zIndex menor para que quede detrás */}
      <svg
        viewBox="0 0 100 100"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <line
          x1="50"
          y1="50"
          x2={50 + 42.5 * Math.cos((angleDeg * Math.PI) / 180)}
          y2={50 - 42.5 * Math.sin((angleDeg * Math.PI) / 180)}
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Icono con zIndex mayor que todo */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          color: "#FFA000",
          fontSize: "4rem",
          zIndex: 3,
        }}
      >
        <FaExclamationTriangle />
      </div>
    </div>
  );
};

export default Gauge270Pie;
